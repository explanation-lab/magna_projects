# Pilot 1

Double-click `index.html` to review the study offline.

`Magna_Pilot_Review.zip` contains the same `index.html` for sharing. Extract it before opening.

The reviewer panel can inspect all 48 case versions, walk through a randomized three-case session with one case per outcome, and export review responses. Each session uses one of the two question orders throughout its three cases. Starting a new session samples an order again.

Questions name the plaintiff for compensatory damages and the company for punitive damages. Death-case lawsuits name the deceased person’s estate as the plaintiff. The seven-point scale runs from “Not at all strong” to “Extremely strong.” Both introductory comprehension checks require Yes and allow the damages definitions to be reread on the same screen. A wrong answer returns to the instructions and restarts both checks.

One factual product question appears after all six ratings, with its case visible. Its answer and correctness are recorded for diagnostics. Either answer allows the session to continue. Reading-screen durations are recorded in milliseconds, with no minimum delay. These durations measure time on the displayed reading screen, including time spent away from the tab.

JSON contains `question_order`, `factual_checks`, `reading_times`, and the exact question text and party names for each rating. CSV keeps one row per rating and adds `question_order`, `plaintiff`, `company`, `reading_time_ms`, and factual-check columns. The check’s result appears on both rating rows for its case. A skipped reading screen has a null reading duration. Completion requires six ratings, an answer to the factual question, and finishing the feedback screen. A wrong factual answer permits completion.

`pilot-allocations.json` provides the planned 160 completed participant slots, including case order and question order. There are 80 slots per question order, 10 evaluations per vignette overall, and 5 evaluations per vignette within each question order. Assign each slot once when implementing participant collection. The offline reviewer samples assignments and orders for review.

No responses are submitted by this offline build.
