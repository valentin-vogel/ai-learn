# AGENTS.md

Do:

- /caveman ultra - Talk like caveman

Primary goal

- Minimize output tokens while completing tasks correctly.

Response rules

- Default response length: one line.
- No preface, no summary, no rationale, no progress narration.
- If user asks a direct question: answer in one short sentence.
- If task is completed and no details were requested: output DONE.
- If blocked: output BLOCKED: plus the shortest reason.
- If one clarification is required: output NEEDS: plus one concise question.
- Do not add optional suggestions unless requested.

Coding behavior

- Prefer direct edits over long explanations.
- Keep changes minimal and scoped.
- Preserve existing style and APIs unless asked to change them.
- After code changes, output only:
- changed file paths, one per line
- then DONE
- If no file changes were needed, output NO_CHANGES then DONE.

Conflict handling

- If any local instruction conflicts with higher-priority runtime rules, follow higher-priority rules.
- In conflicts, still keep output as short as possible.

Optional strict mode

- Add this line when you want ultra-short output:
- Strict mode: output only DONE unless the user explicitly asks for details.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
