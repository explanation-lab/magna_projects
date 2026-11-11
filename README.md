# Magna projects

Research materials for studying judgments about compensatory and punitive damages across intentional harm, negligence, strict liability, and control cases.

## Pilot 1

The current review study is in [code/experiments/pilot 1/](code/experiments/pilot%201/). Open its `index.html` directly in a browser. The same folder contains `Magna_Pilot_Review.zip`, which packages that single HTML file for review.

The bank contains 48 versions: four contexts × four case categories × three outcomes (death, brain injury, and neck/back injury). A session presents three cases with distinct contexts and categories, one case for each outcome. The 576 possible assignments give all 48 versions equal representation across the full set.

The flow is consent, instructions, two yes/no comprehension checks, three cases with compensatory and punitive ratings, a yes/no attention check, optional age/sex/ethnicity demographics, and feedback. Both comprehension checks require Yes; an incorrect answer returns to the instructions and restarts both checks. Each case appears before its questions, with no question-preview screen or case counter. Ratings ask about desire to award damages, name the plaintiff or company, and use a seven-point scale from “Not at all strong” to “Extremely strong.” In death cases, the named plaintiff is the deceased person’s estate. Question order is randomized once per session and remains fixed across that session’s three cases.

This is an offline review build. It does not submit responses; the reviewer panel can export review JSON and CSV. Server allocation, recruitment, and participant-data collection are not implemented.

The attention check immediately after the cases and before demographics displays “Twenty-one is an even number.” The response buttons are Yes and No. No is recorded as correct. Each response advances to demographics, and correctness is recorded for pilot diagnostics. Screen durations are recorded for every page visit, including comprehension checks and revisits. The current page’s elapsed time is included when exporting. Reading-screen durations are recorded without an advancing delay. JSON exports include those durations and attention-check responses. CSV exports add reading duration, question order, party names, and the session’s attention-check result alongside its ratings.

The planned exploratory pilot has 160 completed participants. [The allocation plan](code/experiments/pilot%201/pilot-allocations.json) provides 160 sessions with 80 per question order. Each of the 48 vignettes appears 10 times overall and 5 times under each question order. The collection build must allocate each planned slot once. The offline reviewer samples case assignments and question order randomly for inspection.

## Repository structure

- `code/R/`: analysis and figure scripts.
- `code/experiments/`: study implementations and materials.
- `data/`: appropriately de-identified analysis data.
- `docs/`: browser-renderable experiments or generated web output.
- `figures/`: research figures and diagrams.

No participant data are included. See [PROJECT_STATUS.md](PROJECT_STATUS.md) for current work and handoff details.
