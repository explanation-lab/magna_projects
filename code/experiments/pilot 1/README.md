# Pilot 1

Double-click `index.html` to review the study offline.

`Magna_Pilot_Review.zip` contains the same `index.html` for sharing. Extract it before opening.

The reviewer panel can inspect all 48 case versions, walk through a randomized three-case session with one case per outcome, and export review responses. Every session asks about compensatory damages first, then punitive damages, for each of its three cases.

Questions name the plaintiff for compensatory damages and the company for punitive damages. Death-case lawsuits name the deceased person’s estate as the plaintiff. The seven-point scale runs from “Not at all strong” to “Extremely strong.” Both introductory comprehension checks require Yes. A wrong answer returns to the instructions and restarts both checks.

The attention check immediately after the three cases and before demographics displays “Twenty-one is an even number.” The response buttons are Yes and No. No is recorded as correct. Both responses advance to demographics, with the answer and correctness exported for diagnostics. Every page visit has a duration in milliseconds in `screen_history`, including consent, instructions, both comprehension checks, the case and rating screens, the attention check, demographics, feedback, and completion. Revisits create separate entries. Entries include `started_at`, `ended_at`, and `rt_ms`; the current page has `ended_at: null` and its elapsed time at export. Reading-screen durations are also included in `reading_times`, with no minimum delay. Durations include time spent away from the tab.

JSON contains `question_order`, `attention_checks`, `reading_times`, and the exact question text and party names for each rating. CSV keeps one row per rating and adds `question_order`, `plaintiff`, `company`, `reading_time_ms`, and attention-check columns. The session’s attention-check result appears on all six rating rows. A skipped reading screen has a null reading duration. Completion requires six ratings, finishing feedback, and answering the yes/no item. An incorrect answer permits completion.

`pilot-allocations.json` provides the planned 160 completed participant slots, including case order and question order. All 160 slots ask about compensatory damages first, then punitive damages. Each vignette receives 10 evaluations. Assign each slot once when implementing participant collection. The offline reviewer samples case assignments for review.

No responses are submitted by this offline build.
