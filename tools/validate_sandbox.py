"""Audit a Study Console Sandbox download against the frozen Magna package."""
from collections import Counter
from pathlib import Path
from zipfile import ZipFile
import argparse
import csv
import hashlib
import io
import json

parser = argparse.ArgumentParser()
parser.add_argument('bundle', type=Path)
parser.add_argument('--package', type=Path, default=Path(__file__).resolve().parents[1] / 'dist/magna-pilot1-console-1.0.1.zip')
parser.add_argument('--summary', type=Path)
parser.add_argument('--study-id', required=True)
args = parser.parse_args()
with ZipFile(args.package) as archive:
    source = archive.read('js/materials.js').decode()
    materials = json.loads(source.split('globalThis.MagnaMaterials = ', 1)[1].strip().removesuffix(';'))
    package = json.loads(archive.read('explanation-lab.config.json'))
with ZipFile(args.bundle) as archive:
    raw = json.loads(archive.read('raw-submissions.json'))
    manifest = json.loads(archive.read('manifest.json'))
    responses = list(csv.DictReader(io.StringIO(archive.read('responses.csv').decode('utf-8-sig'))))
    demographics = list(csv.DictReader(io.StringIO(archive.read('demographics.csv').decode('utf-8-sig'))))

groups = {group['code']: group for group in materials['groups']}
bank = {case['id']: case for case in materials['bank']}
assert len(raw) == 16 and {submission['condition'] for submission in raw} == set(groups)
assert {c['code']: c['target'] for c in manifest['study']['conditions']} == {code: 20 for code in groups}
assert len(responses) == 242 and len(demographics) == 16
assert sum(row['trial_role'] == 'response' for row in responses) == 96
assert all(row['condition_verification'] == 'matched' for row in responses + demographics)
assert manifest['study']['demographicFields'] == ['age', 'sex', 'ethnicity']
read_cases = Counter()
orders = set()
for submission in raw:
    code = submission['condition']
    group_index = int(code[1:]) - 1
    trials = submission['trials']
    assert submission['studyId'] == args.study_id
    assert submission['mode'] == 'sandbox'
    assert submission['metadata']['experimentVersion'] == materials['version']
    assert submission['clientVersion'] == package['clientVersion']
    assert submission['metadata']['conditionVerification']['status'] == 'matched'
    assert submission['metadata']['expected_rating_count'] == 6
    assert submission['serializedBytes'] < 900000
    assert submission['durationMs'] == sum(row['screen_time_ms'] for row in trials)
    assert len(trials) == (18 if code == 'p01' else 16)
    assert sorted(row['visit_index'] for row in trials) == list(range(len(trials)))
    assert all(row['condition'] == row['launch_condition'] == code for row in trials)
    assert all(row['screen_time_ms'] == row['rt'] and row['rt'] >= 0 and row['started_at'] and row['ended_at'] for row in trials)
    assert all(row['review_mode'] is False and row['valid_participant_data'] is False for row in trials)
    assert any(row['stage'] == 'consent' and row['consent'] is True for row in trials)
    ratings = [row for row in trials if row['trial_role'] == 'response']
    assert [row['rating'] for row in ratings] == [(group_index + i) % 7 + 1 for i in range(6)]
    assert [row['question_type'] for row in ratings] == ['compensatory', 'punitive'] * 3
    order = submission['metadata']['case_order']
    orders.add(tuple(order))
    assert sorted(order) == sorted(groups[code]['case_ids'])
    read_rows = [row for row in trials if row['stage'] == 'read']
    assert [row['case_id'] for row in read_rows] == order
    read_cases.update(order)
    for i, row in enumerate(ratings):
        case = bank[order[i // 2]]
        kind = ['compensatory', 'punitive'][i % 2]
        expected = materials['questions'][kind].replace('{plaintiff}', case['plaintiff']).replace('{company}', case['company'])
        assert row['question'] == expected
        assert row['case_id'] == row['item_id'] == case['id']
        assert row['measure'] == kind + '_damages'
        assert row['case_position'] == i // 2 + 1 and row['question_position'] == i % 2 + 1
        assert row['case_text'] == '\n\n'.join(case['paragraphs'])
        assert row['context'] == case['context'] and row['liability_category'] == case['category']
        assert row['plaintiff'] == case['plaintiff'] and row['company'] == case['company']
        assert row['scale_min'] == 1 and row['scale_max'] == 7
        assert row['scale_min_label'] == 'Not at all strong' and row['scale_max_label'] == 'Extremely strong'
        assert row['reading_time_ms'] == next(read['rt'] for read in read_rows if read['case_id'] == case['id'])
        csv_row = next(candidate for candidate in responses if candidate['condition'] == code and candidate['trial_role'] == 'response' and candidate['case_id'] == case['id'] and candidate['question_type'] == kind)
        assert int(csv_row['rating']) == row['rating'] and csv_row['question'] == expected
        assert int(csv_row['screen_time_ms']) == row['screen_time_ms']
    assert [row['stage'] for row in trials][-3:] == ['attention_check', 'demographics', 'feedback']
    attention = next(row for row in trials if row['stage'] == 'attention_check')
    assert attention['question'] == 'Twenty-one is an even number.'
    assert attention['answer'] == ('yes' if code == 'p02' else 'no')
    assert attention['correct'] is (code != 'p02')
    demo = next(row for row in trials if row['trial_role'] == 'demographic')
    demo_csv = next(row for row in demographics if row['condition'] == code)
    for field in materials['demographicFields']:
        assert demo_csv[field] == (str(demo[field]) if demo[field] is not None else '')
    if code == 'p03':
        assert all(demo[field] is None for field in materials['demographicFields'])
    else:
        assert demo['age'] == 25 + group_index
        assert demo['sex'] == ('Other' if group_index % 2 else 'Female')
        assert demo['ethnicity'] == 'SANDBOX test ethnicity ' + code
    assert trials[-1]['feedback'] == 'SANDBOX verification ' + code
assert len(read_cases) == 48 and set(read_cases.values()) == {1}
summary = {
    'result': 'passed', 'study_id': manifest['study']['id'], 'experiment_version': materials['version'],
    'package_fingerprint': package['packageFingerprint'], 'planned_participants': 320,
    'groups': 16, 'target_per_group': 20, 'vignette_evaluations_at_target': 20,
    'context_evaluations_at_target': 240, 'category_evaluations_at_target': 240, 'outcome_evaluations_at_target': 320,
    'sandbox_submissions': 16, 'raw_trials': sum(len(s['trials']) for s in raw), 'rating_rows': 96,
    'responses_csv_rows': len(responses), 'demographics_csv_rows': len(demographics),
    'vignettes_verified': len(read_cases), 'condition_checks': 'all matched',
    'compensatory_first': True, 'reading_and_page_times': 'all exported',
    'p01_reload_and_comprehension_retry': 'responses retained once',
    'p02_attention_failure': 'response retained and completion allowed',
    'p03_optional_demographics': 'all blank saved successfully',
    'bundle_sha256': hashlib.sha256(args.bundle.read_bytes()).hexdigest()
}
if args.summary:
    args.summary.write_text(json.dumps(summary, indent=2) + '\n')
print(json.dumps(summary, indent=2))
