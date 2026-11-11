# Pilot 1 Console handoff

Verified November 11, 2026. Ready for Prolific setup, with **320 completed participants** planned. Recruitment has not started.

## Current study and release

- [Console setup](https://explanation-lab-studies.web.app/?view=projects&project=MAGNA-PROJECTS-36Q5&study=MAGNA-PILOT-1-KK2W&data=sandbox&section=setup) — study **MAGNA-PILOT-1-KK2W**, project **MAGNA-PROJECTS-36Q5**.
- Hosted participant directory: [pilot-1-v1-0-1](https://explanation-lab.github.io/magna_projects/pilot-1-v1-0-1/). Launch through the Console-generated participant link rather than the bare directory URL.
- Source: `code/experiments/pilot 1/collection/`.
- Frozen package: `dist/magna-pilot1-console-1.0.1.zip`.
- Input package: `dist/magna-pilot1-source-1.0.1.zip`.
- Native converter report: `dist/magna-pilot1-conversion-1.0.1.json`.
- Hosting verification receipt: `dist/magna-pilot1-hosting-1.0.1.json`.
- Experiment version: **magna-pilot1-1.0.1**.
- Package fingerprint: `559d363012cfeccb13c4d40f8e528501f482da013ea5fc1a0257576bc5df5109`.

The Console's native converter generated the immutable manifest and embedded the official frozen client. The manifest was not edited manually. Runtime versions are jsPsych 7.3.4, html-button-response 1.1.3, official client 1.5.1, manifest 1.2.0, and export schema 2.0.0. Local jsPsych assets and notices are included. The official client loads Firebase SDK 12.16.0 and its App Check resources; consent retains the approved Cornell links.

The repository was made public with David's approval to enable GitHub Pages. The `gh-pages` deployment commit is `625f80a2f2daeae9d7e1324ec8c62c5ab982972f`. All 12 deployed runtime files were compared byte-for-byte with the final native ZIP. Earlier version 1.0.0 and Console Sandbox candidate `MAGNA-PILOT-1-YFEW` are superseded test history. Use **KK2W** and version **1.0.1** for collection.

## Remaining Prolific steps

The final Console preflight reports exactly two remaining actions:

1. Enter the actual Prolific completion URL/code in the Console.
2. Put the Console-generated link into the Prolific study, set **320 places**, and confirm the matching completion code and launch configuration in the Console.

Use the exact production link shown by the Console, preserving its Prolific placeholders, `study=MAGNA-PILOT-1-KK2W`, and `mode=production`. The consent currently states about 10 minutes and $1.50; keep the recruitment information consistent with the approved consent. Run the final preflight and verify the actual Prolific completion redirect once the real completion URL is available. No completion URL has been fabricated, no real recruitment has been launched, and the final Prolific confirmation is deliberately unchecked.

## Allocation and procedure

The Console uses 16 between-participant allocation codes, `p01`–`p16`, each with target 20. Each code defines a set of three cases with different contexts, liability categories, and outcomes. The browser only shuffles the case order inside its assigned set and preserves that order on reload. At 20 completions in every set:

| Factor | Levels | Evaluations per level |
| --- | --- | --- |
| Vignette | 48 | 20 |
| Context | 4 | 240 |
| Liability category | 4 | 240 |
| Outcome | 3 | 320 |

Each person supplies six ratings, so the target yields 1,920 ratings. Compensatory always precedes punitive for each case. The two comprehension checks require Yes and repeat after an error. The statement **“Twenty-one is an even number.”** appears after the cases and before demographics. Its correct answer is No; an incorrect answer is recorded and permits completion. Age, sex, ethnicity, and feedback are optional.

Exact balance depends on reaching every case-set completion target. Monitor per-set completed counts in the Console when collecting/replacing participants. The offline reviewer's broader random assignment space is for materials inspection; participant allocation uses the 16 registered sets in `pilot-allocations.json`.

## Saved data

The official client saves a complete jsPsych submission before routing to completion. In-progress answers are checkpointed locally; they are not a server submission until completion. Failed saves display a retry button. Local storage is keyed by release, Console study, mode, participant/session IDs, and assigned set. Reload resumes the next unanswered screen with prior completed visits retained once.

The downloaded bundle includes raw submissions, response CSV, demographic CSV, the dictionary, manifest, and README. In the exported response data:

- `condition`, `launch_condition`, and `case_set` refer to `p01`–`p16`. Use **`liability_category`** for intentional, negligence, strict, or control.
- `case_id`, `context`, `outcome`, `outcome_code`, `case_position`, and `case_order` identify the vignette and its presentation.
- `trial_role=response` identifies the six rating rows. `measure` is `compensatory_damages` or `punitive_damages`; `rating` is 1–7. Exact narrative, question, plaintiff, company, anchors, and question order are saved.
- `screen_time_ms` and `rt` record elapsed milliseconds for each completed page visit. `started_at`, `ended_at`, `screen_index`, and `visit_index` retain visit history, including comprehension retries. Rating rows carry `reading_time_ms` from the corresponding reading page.
- These are elapsed durations, including time away from an open tab. A page checkpoint carries partial elapsed time through reload. No minimum reading delay or automatic speed exclusion is applied. They should not be interpreted as eye-tracked reading time.
- Attention responses and correctness, comprehension attempts, optional demographic values, and feedback are retained. Missing demographics remain blank/null.
- `valid_participant_data` is true for official production mode and false for Sandbox. `collection_mode` records that distinction. Sandbox data are kept separate in the Console.

## Verification

The final hosted release completed all 16 assigned Sandbox sets through the actual frozen client and Console backend. The Console shows **16 Sandbox submissions, 0 real submissions**. Its data format is confirmed. The export audit checked 258 raw trials, 242 response-CSV rows, 16 demographic rows, 96 rating rows, all 48 narratives, exact questions/parties, assignment checks, selected ratings, and timing fields against the native package.

Special paths verified include comprehension failure/retry, reload after a case with prior ratings restored once, incorrect attention answer, blank optional demographics, and completed-session reload without duplicate submission. A local browser walkthrough also forced a save failure and verified successful retry. The mobile layout was checked at 390 pixels. Five automated source tests cover exact materials, allocation counts, all 96 case-set/order combinations, interface details, and production/Sandbox validity flags.

The aggregate audit is [PILOT1_SANDBOX_VERIFICATION.json](PILOT1_SANDBOX_VERIFICATION.json). The raw synthetic export stays outside the public repository, in David's Downloads folder as `MAGNA-PILOT-1-KK2W_sandbox_data_2026-11-11.zip`. The actual Prolific completion redirect cannot be verified until its real URL is provided.

## Reproduce checks and package

From this repository:

```sh
node --test tests/collection.test.cjs
python3 tools/validate_sandbox.py /path/to/MAGNA-PILOT-1-KK2W_sandbox_data_2026-11-11.zip --study-id MAGNA-PILOT-1-KK2W
```

Building requires Node 24, an installed checkout of the Study Console with `fflate`, and its native `lib/study-converter.ts`. Supply the frozen client extracted from the current native ZIP to reproduce the same client bytes; otherwise the tool fetches the current official client.

```sh
node tools/build_console.mjs /path/to/study-console /tmp/magna-build /path/to/explanation-lab-client.js
```

The native build was reproduced with the same package fingerprint. Build into a new output directory and retain frozen artifacts rather than replacing a registered release. A changed package needs a new version and matching Console registration. No Console application source or Firebase security rules were changed for this integration.
