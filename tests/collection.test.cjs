const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');

const root = process.env.MAGNA_REPO || path.resolve(__dirname, '..');
const pilot = path.join(root, 'code/experiments/pilot 1');
const scope = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(pilot, 'collection/js/materials.js'), 'utf8'), scope);
vm.runInContext(fs.readFileSync(path.join(pilot, 'collection/js/ui.js'), 'utf8'), scope);
const materials = JSON.parse(JSON.stringify(scope.MagnaMaterials));
const render = (screen, state = {}) => scope.MagnaUI.render(screen, state);
const normalize = value => JSON.parse(JSON.stringify(value));
const escape = text => text.replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
const permutations = values => values.length
  ? values.flatMap((value, index) => permutations(values.filter((_, i) => i !== index)).map(rest => [value, ...rest]))
  : [[]];

test('320 completed allocations balance every vignette, context, category, and outcome', () => {
  const plan = JSON.parse(fs.readFileSync(path.join(pilot, 'pilot-allocations.json')));
  assert.equal(plan.completed_participant_target, 320);
  assert.equal(plan.sessions.length, 320);
  assert.equal(materials.groups.length, 16);
  const counts = { cases: {}, contexts: {}, categories: {}, outcomes: {} };
  for (const group of materials.groups) {
    assert.equal(group.target, 20);
    const cases = group.case_ids.map(id => materials.bank.find(c => c.id === id));
    assert.equal(cases.length, 3);
    for (const key of ['context', 'category']) assert.equal(new Set(cases.map(c => c[key])).size, 3);
    assert.equal(new Set(cases.map(c => c.id.slice(-1))).size, 3);
    for (const c of cases) {
      for (const [bucket, key] of [['cases', c.id], ['contexts', c.context], ['categories', c.category], ['outcomes', c.id.slice(-1)]]) {
        counts[bucket][key] = (counts[bucket][key] || 0) + group.target;
      }
    }
  }
  assert.equal(Object.keys(counts.cases).length, 48);
  assert.deepEqual([...new Set(Object.values(counts.cases))], [20]);
  assert.deepEqual([...new Set(Object.values(counts.contexts))], [240]);
  assert.deepEqual([...new Set(Object.values(counts.categories))], [240]);
  assert.deepEqual([...new Set(Object.values(counts.outcomes))], [320]);
  for (const session of plan.sessions) {
    assert.deepEqual(session.question_order, ['compensatory', 'punitive']);
    assert.deepEqual([...session.case_ids].sort(), [...materials.groups.find(g => g.code === session.condition).case_ids].sort());
  }
});

test('all 48 narratives and party names match the approved reviewer', () => {
  const html = fs.readFileSync(path.join(pilot, 'index.html'), 'utf8');
  const bank = JSON.parse(html.match(/<script id="case-bank" type="application\/json">([\s\S]*?)<\/script>/)[1]);
  assert.deepEqual(materials.bank, bank);
  for (const c of bank) {
    assert.equal(c.plaintiff.endsWith("'s estate"), c.id.endsWith('1'));
    assert(c.paragraphs.at(-1).includes(c.plaintiff));
  }
});

test('all 96 case-set orders preserve exact questions, seven ratings, and required responses', () => {
  let checked = 0;
  for (const group of materials.groups) {
    for (const order of permutations(group.case_ids)) {
      for (const [index, id] of order.entries()) {
        const c = materials.bank.find(c => c.id === id);
        const read = render({ stage: 'read', case: c, position: index + 1 });
        for (const paragraph of c.paragraphs) assert(read.includes(escape(paragraph)));
        assert(!read.includes('id="question-text"'));
        for (const type of ['compensatory', 'punitive']) {
          const html = render({ stage: type, case: c, position: index + 1 });
          const question = materials.questions[type].replace('{plaintiff}', c.plaintiff).replace('{company}', c.company);
          assert(html.includes(escape(question)));
          assert.equal((html.match(/name="rating"/g) || []).length, 7);
          assert(html.includes('id="continue" disabled'));
          assert(html.includes('Not at all strong'));
          assert(html.includes('Extremely strong'));
        }
      }
      checked++;
    }
  }
  assert.equal(checked, 96);
});

test('attention statement, optional demographics, and comprehension screens match the requested interface', () => {
  const attention = render({ stage: 'attention_check' });
  assert(attention.includes('Twenty-one is an even number.'));
  assert(attention.includes('id="attention-yes"'));
  assert(attention.includes('id="attention-no"'));
  for (const stage of ['punitive_check', 'compensatory_check']) {
    const html = render({ stage });
    assert(!html.includes('<details>'));
    assert(html.includes('id="check-yes"'));
    assert(html.includes('id="check-no"'));
  }
  assert.deepEqual(normalize(materials.demographicFields), ['age', 'sex', 'ethnicity']);
  const demographics = render({ stage: 'demographics' });
  assert(!demographics.includes('required'));
});

test('the console production mode marks collected trials valid and Sandbox mode marks them synthetic', () => {
  const source = fs.readFileSync(path.join(pilot, 'collection/js/study.js'), 'utf8');
  for (const mode of ['production', 'sandbox']) {
    let timeline;
    const data = { push() {} };
    const jsPsych = { data: { get: () => data }, run: value => { timeline = value; } };
    const env = vm.createContext({
      MagnaMaterials: scope.MagnaMaterials,
      explanationLab: { launch: { condition: 'p01', mode, studyKey: 'MODE-TEST', participant: { prolificPid: 'TEST', studyId: 'TEST', sessionId: 'TEST' } } },
      performance,
      crypto: require('node:crypto').webcrypto,
      localStorage: { getItem: () => null, setItem() {} },
      document: { getElementById: () => ({}), addEventListener() {} },
      addEventListener() {}, initJsPsych: () => jsPsych, jsPsychHtmlButtonResponse: {}
    });
    vm.runInContext(source, env);
    const trial = timeline[0].timeline[0].data();
    assert.equal(trial.collection_mode, mode);
    assert.equal(trial.valid_participant_data, mode === 'production');
    assert.equal(trial.review_mode, false);
    assert.equal(trial.condition, 'p01');
  }
});
