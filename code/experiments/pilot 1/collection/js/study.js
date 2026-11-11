/* jsPsych 7.3.4. The Console supplies the balanced case-set assignment. */
const CONDITION_ASSIGNMENT = 'between_participant';
const AVAILABLE_CONDITIONS = ['p01','p02','p03','p04','p05','p06','p07','p08','p09','p10','p11','p12','p13','p14','p15','p16'];
const EXPERIMENT_VERSION = 'magna-pilot1-1.0.1';

(() => {
  'use strict';
  const m = MagnaMaterials;
  const lab = globalThis.explanationLab;
  const group = m.groups.find(group => group.code === lab.launch.condition);
  if (!group) throw new Error('Unknown Console case-set assignment.');
  const root = document.getElementById('jspsych-target');
  const startedAt = performance.now();
  const identity = [lab.launch.studyKey, lab.launch.mode, lab.launch.participant.prolificPid,
    lab.launch.participant.studyId, lab.launch.participant.sessionId, group.code];
  const storageKey = m.version + ':' + JSON.stringify(identity);
  const shuffled = values => {
    const result = values.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const value = new Uint32Array(1);
      const limit = Math.floor(4294967296 / (i + 1)) * (i + 1);
      do { crypto.getRandomValues(value); } while (value[0] >= limit);
      const j = value[0] % (i + 1);
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };
  let saved;
  try { saved = JSON.parse(localStorage.getItem(storageKey) || 'null'); } catch (_) { /* Start fresh if storage is unavailable. */ }
  const reusable = saved?.version === m.version && saved.group === group.code &&
    Array.isArray(saved.case_order) && saved.case_order.length === 3 &&
    new Set(saved.case_order).size === 3 && saved.case_order.every(id => group.case_ids.includes(id)) &&
    Array.isArray(saved.records) && Number.isInteger(saved.next) && saved.next >= 0 && saved.next <= 16;
  const state = reusable ? saved : {
    version: m.version, group: group.code, case_order: shuffled(group.case_ids),
    consented: false, checks_passed: false, check_attempt: 0, reminder: false,
    next: 0, records: [], complete: false, saved: false, pending: null
  };
  const cases = state.case_order.map(id => m.bank.find(c => c.id === id));
  const screens = [
    { stage: 'consent' }, { stage: 'instructions' },
    { stage: 'punitive_check' }, { stage: 'compensatory_check' },
    ...cases.flatMap((c, index) => ['read', 'compensatory', 'punitive'].map(stage => ({ stage, case: c, position: index + 1 }))),
    { stage: 'attention_check' }, { stage: 'demographics' }, { stage: 'feedback' }
  ];
  let currentScreen, screenStarted = 0, carriedTime = 0, screenStartedAt, declined = false, savePromise;
  const persist = () => {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch (_) { /* In-memory answers remain available for save retry. */ }
  };
  const elapsed = () => carriedTime + Math.round(performance.now() - screenStarted);
  const checkpoint = () => {
    if (currentScreen && !state.complete && !declined) {
      state.pending = { screen_index: state.next, elapsed_ms: elapsed(), started_at: screenStartedAt };
      persist();
    }
  };
  addEventListener('pagehide', checkpoint);
  document.addEventListener('visibilitychange', checkpoint);
  const question = (c, type) => m.questions[type].replace('{plaintiff}', c.plaintiff).replace('{company}', c.company);
  function trialData(screen) {
    const c = screen.case;
    const rating = screen.stage === 'compensatory' || screen.stage === 'punitive';
    const role = rating ? 'response' : screen.stage === 'demographics' ? 'demographic'
      : screen.stage.endsWith('_check') ? 'attention_check' : screen.stage === 'read' ? 'screen' : screen.stage;
    return {
      study_version: m.version, schema_version: '2.0.0', launch_condition: group.code, condition: group.code,
      assignment_type: 'between_participant', case_set: group.code, case_order: state.case_order.slice(),
      question_order: ['compensatory', 'punitive'], screen_index: state.next,
      visit_index: state.records.length, stage: screen.stage, trial_role: role,
      review_mode: false, valid_participant_data: lab.launch.mode === 'production', collection_mode: lab.launch.mode,
      ...(c ? {
        case_id: c.id, item_id: c.id, case_position: screen.position, context: c.context,
        liability_category: c.category, outcome: c.outcomeLabel, outcome_code: c.id.slice(-1),
        plaintiff: c.plaintiff, company: c.company, case_word_count: c.paragraphs.join(' ').split(/\s+/).length,
        case_text: c.paragraphs.join('\n\n')
      } : {}),
      ...(rating ? {
        measure: screen.stage + '_damages', question_type: screen.stage,
        question_position: screen.stage === 'compensatory' ? 1 : 2,
        question: question(c, screen.stage), scale_min: 1, scale_max: 7,
        scale_min_label: 'Not at all strong', scale_max_label: 'Extremely strong',
        reading_time_ms: state.records.findLast(record => record.stage === 'read' && record.case_id === c.id)?.rt ?? null
      } : {}),
      ...(screen.stage === 'attention_check' ? { item_id: 'twenty_one_even', measure: 'attention', question: m.attentionQuestion } : {}),
      ...(m.checks[screen.stage] ? { item_id: screen.stage, question: m.checks[screen.stage].question, check_attempt: state.check_attempt } : {})
    };
  }
  function finish(data = {}) {
    const endedAt = new Date().toISOString();
    const duration = elapsed();
    jsPsych.finishTrial({ ...data, rt: duration, screen_time_ms: duration, started_at: screenStartedAt, ended_at: endedAt });
  }
  function bind() {
    currentScreen = screens[state.next];
    screenStarted = performance.now();
    const pending = state.pending?.screen_index === state.next ? state.pending : null;
    carriedTime = pending?.elapsed_ms || 0;
    screenStartedAt = pending?.started_at || new Date().toISOString();
    state.pending = { screen_index: state.next, elapsed_ms: carriedTime, started_at: screenStartedAt };
    persist();
    const stage = currentScreen.stage;
    if (stage === 'consent') {
      document.getElementById('consent-yes').onclick = () => finish({ consent: true });
      document.getElementById('consent-no').onclick = () => { declined = true; finish({ consent: false }); };
    } else if (m.checks[stage]) {
      for (const answer of ['yes', 'no']) document.getElementById('check-' + answer).onclick =
        () => finish({ answer, correct: answer === m.checks[stage].correct });
    } else if (stage === 'attention_check') {
      for (const answer of ['yes', 'no']) document.getElementById('attention-' + answer).onclick =
        () => finish({ answer, correct: answer === 'no' });
    } else if (stage === 'demographics') {
      document.getElementById('demographics-form').onsubmit = event => {
        event.preventDefault();
        if (!event.target.reportValidity()) return;
        const form = new FormData(event.target);
        finish({ age: form.get('age') ? Number(form.get('age')) : null, sex: form.get('sex') || null, ethnicity: form.get('ethnicity') || null });
      };
    } else if (stage === 'feedback') {
      document.getElementById('feedback-form').onsubmit = event => {
        event.preventDefault();
        finish({ feedback: document.getElementById('feedback').value });
      };
    } else if (stage === 'compensatory' || stage === 'punitive') {
      const button = document.getElementById('continue');
      document.querySelectorAll('input[name="rating"]').forEach(input => input.onchange = () => { button.disabled = false; });
      button.onclick = () => {
        const selected = document.querySelector('input[name="rating"]:checked');
        if (!selected) return;
        button.disabled = true;
        finish({ rating: Number(selected.value) });
      };
    } else {
      document.getElementById('continue').onclick = () => finish();
    }
    requestAnimationFrame(() => {
      if (stage === 'compensatory' || stage === 'punitive') {
        document.querySelector('.question-card').scrollIntoView({ block: 'nearest', behavior: 'auto' });
        document.getElementById('question-text').focus({ preventScroll: true });
      } else {
        window.scrollTo(0, 0);
        root.focus({ preventScroll: true });
      }
    });
  }
  function record(data) {
    delete data.stimulus;
    state.records.push({ ...data });
    state.pending = null;
    if (data.stage === 'consent') state.consented = data.consent === true;
    if (data.stage === 'instructions') { state.check_attempt++; state.reminder = false; }
    if (m.checks[data.stage] && !data.correct) {
      state.next = 1;
      state.checks_passed = false;
      state.reminder = true;
    } else {
      if (data.stage === 'compensatory_check') state.checks_passed = true;
      state.next++;
    }
    state.complete = !declined && state.next === screens.length;
    persist();
  }
  function validComplete() {
    const ratings = state.records.filter(record => record.trial_role === 'response');
    return state.complete && state.consented && state.checks_passed && ratings.length === 6 &&
      cases.every(c => ['compensatory', 'punitive'].every(type => ratings.some(record =>
        record.case_id === c.id && record.question_type === type && record.rating >= 1 && record.rating <= 7))) &&
      state.records.some(record => record.stage === 'attention_check') &&
      state.records.some(record => record.stage === 'demographics') &&
      state.records.some(record => record.stage === 'feedback') &&
      state.records.every(record => record.launch_condition === group.code);
  }
  async function completed() {
    if (declined) {
      root.innerHTML = '<section class="page simple-page"><p>Thank you. You have not consented. You may close this window.</p></section>';
      return;
    }
    if (!validComplete()) throw new Error('The study is incomplete. Please reopen your participant link.');
    if (state.saved && lab.launch.mode === 'sandbox') {
      root.innerHTML = '<section class="page simple-page"><h1>Sandbox complete</h1><p>Your responses have already been saved to the Explanation Lab.</p></section>';
      return;
    }
    if (savePromise) return savePromise;
    root.innerHTML = '<section class="page simple-page"><h1>Saving your responses…</h1><p>Please keep this page open.</p></section>';
    savePromise = (async () => {
      try {
        await lab.submitAndRedirect(jsPsych.data.get(), {
          durationMs: state.records.reduce((total, record) => total + record.screen_time_ms, 0), showRetryScreen: false,
          metadata: { experimentVersion: m.version, schemaVersion: '2.0.0', demographicFields: m.demographicFields,
            expected_rating_count: 6, launch_condition: group.code, case_set: group.code,
            case_order: state.case_order, question_order: ['compensatory', 'punitive'],
            elapsed_session_ms: Math.round(performance.now() - startedAt) }
        });
        state.saved = true;
        persist();
        if (lab.launch.mode === 'sandbox') root.innerHTML = '<section class="page simple-page"><h1>Sandbox complete</h1><p>Your responses have been saved to the Explanation Lab.</p></section>';
      } catch (error) {
        savePromise = null;
        root.innerHTML = '<section class="page simple-page"><h1>Your responses have not been saved yet</h1><p>Please keep this page open and retry.</p><button id="retry-save">Retry saving</button></section>';
        document.getElementById('retry-save').onclick = completed;
        console.error('Study save needs retry', error);
      }
    })();
    return savePromise;
  }
  const jsPsych = initJsPsych({ display_element: 'jspsych-target', on_finish: completed });
  state.records.forEach(record => jsPsych.data.get().push({ ...record }));
  globalThis.magnaStudy = { jsPsych, get state() { return state; }, get current() { return screens[state.next]; } };
  if (state.complete) { completed(); return; }
  const trial = {
    type: jsPsychHtmlButtonResponse, choices: [],
    stimulus: () => MagnaUI.render(screens[state.next], state),
    data: () => trialData(screens[state.next]),
    on_load: bind, on_finish: record
  };
  jsPsych.run([{ timeline: [trial], loop_function: () => !state.complete && !declined }]);
})();
