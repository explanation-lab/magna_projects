# Project status

- Last updated: November 11, 2026.
- Current stage: Console setup and Sandbox verification complete; awaiting Prolific information.
- Current study: **MAGNA-PILOT-1-KK2W**, “Magna — Pilot 1”.
- Console project: **MAGNA-PROJECTS-36Q5**.
- Collection version: **magna-pilot1-1.0.1**.
- Target: **320 completed participants**, 20 per case set.

## Current study

The participant collection source is `code/experiments/pilot 1/collection/`. The offline reviewer and its review ZIP remain beside that directory. Both use the same approved 48 narratives and case-specific questions, including estate plaintiffs in death cases. Each participant receives three cases with different contexts, liability categories, and outcomes. Compensatory damages always come first. The attention statement “Twenty-one is an even number.” follows the cases and precedes optional demographics. Yes and No both allow completion; No is recorded as correct.

The official Console client handles launch allocation, Firebase submission, and completion routing. The participant runtime preserves responses and assigned order through reload, records page and reading durations, and offers save retry. The data format has been confirmed in the Console.

## Balance and verification

Sixteen assigned case sets each target 20 completions. At those targets, each of the 48 vignettes receives 20 evaluations, each of four contexts and four liability categories receives 240, and each of three outcomes receives 320. Case order is shuffled within the assigned set.

The final hosted release saved 16 Sandbox submissions. Its downloaded raw data and CSVs were checked against the frozen package: 96 ratings, all 48 vignettes, all 16 demographic rows, assignments, parties, questions, and page/reading times matched. Comprehension retry plus reload retained responses once, an incorrect attention answer permitted completion, blank demographics saved, and reloading a completed Sandbox session did not add a submission. Local browser testing also verified failed-save retry. Five automated tests cover allocation, exact materials, all 96 case-set orders, the requested interface, and production/Sandbox flags. All 12 hosted runtime files match the frozen native Console package.

No real submissions have been collected, and recruitment has not started. The final Console preflight leaves exactly two actions: enter the actual Prolific completion URL, then confirm the Prolific launch link, 320 places, and matching completion code. The real Prolific redirect remains to be checked after that information is entered.

## Resume / handoff

Use [the current Console setup](https://explanation-lab-studies.web.app/?view=projects&project=MAGNA-PROJECTS-36Q5&study=MAGNA-PILOT-1-KK2W&data=sandbox&section=setup). See [PILOT1_CONSOLE.md](docs/PILOT1_CONSOLE.md) for release provenance, fields, tests, and the remaining steps. The earlier Sandbox candidate `MAGNA-PILOT-1-YFEW` is superseded; use **KK2W** for this release.

The repository [explanation-lab/magna_projects](https://github.com/explanation-lab/magna_projects) is public, as authorized, and its `gh-pages` branch serves the frozen participant website. No Console application code or Firebase rules were changed. No raw participant exports or credentials are included in this repository.
