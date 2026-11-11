# Pilot 1

Double-click `index.html` to review the study offline.

`Magna_Pilot_Review.zip` contains the same `index.html` for sharing. Extract it before opening.

The reviewer panel can inspect all 48 case versions, walk through a randomized three-case session with one case per outcome, and export review responses. Every session asks about compensatory damages first, then punitive damages, for each of its three cases.

Questions name the plaintiff for compensatory damages and the company for punitive damages. Death-case lawsuits name the deceased person’s estate as the plaintiff. The seven-point scale runs from “Not at all strong” to “Extremely strong.” Both introductory comprehension checks require Yes. A wrong answer returns to the instructions and restarts both checks.

The attention check immediately after the three cases and before demographics displays “Twenty-one is an even number.” The response buttons are Yes and No. No is recorded as correct. Both responses advance to demographics, with the answer and correctness exported for diagnostics. Every page visit has a duration in milliseconds in `screen_history`, including consent, instructions, both comprehension checks, the case and rating screens, the attention check, demographics, feedback, and completion. Revisits create separate entries. Entries include `started_at`, `ended_at`, and `rt_ms`; the current page has `ended_at: null` and its elapsed time at export. Reading-screen durations are also included in `reading_times`, with no minimum delay. Durations include time spent away from the tab.

JSON contains `question_order`, `attention_checks`, `reading_times`, and the exact question text and party names for each rating. CSV keeps one row per rating and adds `question_order`, `plaintiff`, `company`, `reading_time_ms`, and attention-check columns. The session’s attention-check result appears on all six rating rows. A skipped reading screen has a null reading duration. Completion requires six ratings, finishing feedback, and answering the yes/no item. An incorrect answer permits completion.

`pilot-allocations.json` provides 320 planned participant slots across 16 case sets, with 20 completed participants per set. Each vignette receives 20 evaluations at the target. The Console assigns a case set; the collection runtime shuffles its three cases and preserves the order through reloads. Compensatory damages always precede punitive damages. The offline reviewer samples assignments independently for review.

No responses are submitted by this offline build.

## Console collection

The `collection/` directory is the participant source for `magna-pilot1-1.0.1`. The frozen package is `dist/magna-pilot1-console-1.0.1.zip` at the repository root. Open participants through the Console-generated link, which supplies the study ID, mode, participant IDs, and authoritative case-set assignment. Opening the bare hosted URL or source HTML is not a participant launch.

Collection uses jsPsych and the frozen official Explanation Lab client. It saves all completed page visits, six ratings, exact case/question text, assignment and case order, comprehension attempts, attention response, optional demographics, feedback, and elapsed durations. The collection export uses `rt` and `screen_time_ms` in milliseconds; rating rows also have `reading_time_ms`. Time away from the tab is included while a page remains open. Reload restores prior answers and resumes the next unanswered page. Submission waits for the official client save before completion/redirect and offers a retry on failure.

The current Console study is **MAGNA-PILOT-1-KK2W**. Its 16 real hosted Sandbox sessions and downloaded raw/CSV exports passed verification. No real participants have been collected. Prolific setup is the remaining launch step. See [the collection handoff](../../../docs/PILOT1_CONSOLE.md) for links, balance, export fields, and commands.
