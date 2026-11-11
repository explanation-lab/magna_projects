# Pilot 1

Double-click `index.html` to review the study offline.

`Magna_Pilot_Review.zip` contains the same `index.html` for sharing. Extract it before opening.

The reviewer panel can inspect all 48 case versions, walk through a randomized three-case session with one case per outcome, and export review responses. Each session uses one of the two question orders throughout its three cases. Starting a new session samples an order again.

Questions name the plaintiff for compensatory damages and the company for punitive damages. Death-case lawsuits name the deceased person’s estate as the plaintiff. The seven-point scale runs from “Not at all strong” to “Extremely strong.” Both introductory comprehension checks require Yes. A wrong answer returns to the instructions and restarts both checks.

The final screen before completion states “21 is an even number” with Yes and No buttons. No is recorded as correct. Both responses advance to completion, with the answer and correctness exported for diagnostics. Reading-screen durations are recorded in milliseconds, with no minimum delay. These durations measure time on the displayed reading screen, including time spent away from the tab.

JSON contains `question_order`, `attention_checks`, `reading_times`, and the exact question text and party names for each rating. CSV keeps one row per rating and adds `question_order`, `plaintiff`, `company`, `reading_time_ms`, and attention-check columns. The session’s attention-check result appears on all six rating rows. A skipped reading screen has a null reading duration. Completion requires six ratings, finishing feedback, and answering the final yes/no item. An incorrect answer permits completion.

`pilot-allocations.json` provides the planned 160 completed participant slots, including case order and question order. There are 80 slots per question order, 10 evaluations per vignette overall, and 5 evaluations per vignette within each question order. Assign each slot once when implementing participant collection. The offline reviewer samples assignments and orders for review.

No responses are submitted by this offline build.
