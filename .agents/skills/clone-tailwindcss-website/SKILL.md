---
name: clone-tailwindcss-website
description: Convert HTML and Tailwind CSS snippets from a website into reusable React components and a companion example file. Use when the user provides copied HTML or Tailwind markup and wants a reusable React implementation. Always apply available Vercel React best practices and composition patterns.
---

# Clone Tailwind CSS Website

Convert an HTML and Tailwind CSS snippet into a reusable React component and a companion example.

## Core Mandate

Whenever this skill is applied, incorporate the principles from these skills when they are available:

- `vercel-react-best-practices`
- `vercel-composition-patterns`

Apply those principles by default. Do not treat them as optional suggestions.

## Goal

Transform one HTML and Tailwind CSS snippet into:

1. A reusable React component.
2. A companion example showing how to use the component.
3. A maintainable implementation that removes meaningful repetition without introducing unnecessary abstractions.

## Input

The user may provide:

- An HTML snippet copied from a website.
- Tailwind CSS classes embedded in the snippet.
- An optional preferred component name.
- An optional target directory.
- Optional repository-specific conventions.

## Mandatory Naming Decision

Component naming is **always** a blocking user decision unless the user already explicitly provided the component name.

### Non-negotiable Rules

- Never silently choose one of the generated names.
- Never create, modify, rename, or delete files before the naming decision has been resolved.
- Never execute any commands before the naming decision has been resolved.
- Never assume the recommended option is accepted.
- After asking the naming question, **stop immediately** and wait for the user's response.
- Continue with implementation after the user chooses a name from the presented suggestions.
- A missing response is **not** consent.
- A timeout is **not** consent.
- An empty response is **not** consent.
- Never infer acceptance from the user's original request.

### Naming Workflow

#### Case A — User already supplied a component name

Use the supplied name as the starting point for the naming workflow and continue with the "Name Validation" step.

#### Case B — No component name supplied

1. Analyze the HTML snippet.
2. Search the repository for existing component names.
3. Generate exactly **5 unique names**.

Generate:

- **3 generic reusable names**
- **2 context-aware reusable names**

Then ask the user to choose one.

**Stop immediately after asking.**
**Continue only after the user chooses a name from the presented suggestions.**

##### Interactive Clarification

When the current Copilot host supports an interactive clarification or selection tool, you **must** use it.

The clarification must:

- be single-select
- contain exactly five generated names
- allow a custom answer if supported
- mark one option as Recommended
- ask only the naming question
- contain no implementation
- contain no code generation
- contain no file creation

The question should be equivalent to:

> Which component name should I use?

Each option should contain: PascalCase component name

Example:

- HeroSection — Recommended
- SplitHero
- HeroWithActions
- ProductIntro
- CampaignHeader
- Custom name

Generate names appropriate for the current snippet.
Never reuse these examples blindly.

##### Text Fallback

If interactive clarification is unavailable, respond exactly like this:

```text
Which component name should I use?

1. HeroSection — Recommended
2. SplitHero
3. HeroWithActions
4. ProductIntro
5. CampaignHeader

You may also provide your own component name.

Reply with the number or the exact component name.
```

After printing this list:

- Stop immediately.
- Do not generate code.
- Do not create files.
- Do not continue.

#### Valid Selection

A name has only been selected if one of the following happens:

- the user clicked an interactive option
- the user replied with a number
- the user replied with the exact suggested name
- the user entered a custom name

The following are **not** valid selections:

- Continue
- Go ahead
- Looks good
- Whatever you recommend
- Use the best one

If the response is ambiguous, ask again.

Never continue with implementation until a valid selection is made.

#### Name Validation

After the user selected a name:

1. Convert to PascalCase.
2. Generate kebab-case folder.
3. Search the repository for:
   - filename conflicts
   - exported component conflicts
   - directory conflicts
4. Treat case-only differences as conflicts.
5. Never overwrite existing components.
6. If a conflict exists:
   - explain it
   - generate new suggestions
   - ask again
   - wait

#### Component Naming Rules

Names should describe UI structure instead of content.

Good examples:

- HeroSection
- FeatureSection
- SiteHeader
- FeatureGrid
- SplitLayout
- PricingSection
- CardStack
- QuoteBlock
- MediaPanel
- HeroWithActions
- HeroWithForm

Avoid names copied from:

- products
- companies
- campaigns
- marketing text
- headings
- brands

Bad examples:

- SummerSaleBanner
- AcmeHero
- LaunchSignup

Use numeric suffixes only if repository conventions require them.

## Required Output

Create:

```text
hero-section/
├── HeroSection.tsx
└── HeroSection.example.tsx
```

Use:

- kebab-case folders
- PascalCase components
- PascalCase.example.tsx example files

Respect repository conventions.

## Implementation Workflow

Begin **only after** the naming decision is complete.

1. Validate the selected name.
2. Search the repository.
3. Follow existing conventions.
4. Convert HTML to JSX.
5. Preserve layout.
6. Preserve semantics.
7. Decide server vs client.
8. Prefer Server Components.
9. Extract props.
10. Convert repeated content into arrays.
11. Extract meaningful subcomponents.
12. Keep helper components inside the same file.
13. Move copied content into the example file.
14. Validate imports.
15. Validate TypeScript.

## Component Rules

- Functional React components
- TypeScript
- Explicit props
- Prefer Server Components
- Add `"use client"` only if required
- Tailwind directly
- Composition over inheritance
- Small focused components
- Repeated markup becomes mapped data
- Semantic HTML
- Accessible markup
- No unnecessary abstractions
- No unnecessary state
- No unnecessary effects

## Repetition Rules

Refactor repeated markup into arrays.

Prefer:

```tsx
const items = [
  {
    title: "Example",
    description: "Description",
  },
]
```

Avoid duplicated JSX.

Avoid extracting every small wrapper into its own component.

## Content Separation

Component:

- layout
- props
- rendering
- reusable structure

Example:

- heading
- body
- CTA
- links
- images
- copied content

Do not embed marketing copy inside reusable components.

## Example Rules

The example must:

- import the component
- show realistic usage
- contain extracted content
- be self-contained
- match the original design

## Quality Bar

The result should:

- preserve layout
- preserve semantics
- preserve accessibility
- be reusable
- use composition
- avoid duplicated markup
- follow React best practices
- compile successfully

## Final Response

After implementation provide:

1. Selected component name
2. Created files
3. Refactoring summary
4. Server vs Client explanation
5. Validation results
6. Remaining assumptions

## CRITICAL EXECUTION RULE

This rule overrides all others.

If the user has **not explicitly selected a component name**, you must:

1. Generate five names.
2. Present them using the interactive clarification tool when available.
3. Otherwise present the numbered fallback list.
4. End your response immediately.
5. Wait for the user's next message.

Do **not** generate React code.

Do **not** create files.

Do **not** continue implementation.

The current response must contain **only** the naming question.

Implementation always begins in the following agent turn.
