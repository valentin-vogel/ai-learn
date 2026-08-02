---
name: clone-tailwindcss-website
description: Convert HTML and Tailwind CSS snippets from a website into reusable React components, plus an example usage file. Always apply Vercel React best practices and composition patterns.
---

# Clone Tailwind CSS Website

Use this skill when the user provides an HTML snippet copied from a browser and wants it turned into a reusable React component.

## Core Mandate

Whenever this skill is applied, always incorporate the principles from the following skills (if they are available):

- vercel-react-best-practices
- vercel-composition-patterns

These should shape the implementation by default rather than being treated as optional ideas.

## Goal

Transform a single HTML + Tailwind snippet into:

1. A reusable React component file.
2. A second example file showing how to use the component.
3. A refactored component that avoids repeated markup while staying in one component file.

## Input

- A copied HTML snippet from a website, such as a section, header, card, or button.
- Optional: a preferred component name.
- Optional: a target folder or project conventions.

## Required Output

For each snippet, create:

1. A component folder using kebab-case, for example: hero-section.
2. Inside that folder, a component file named using PascalCase, for example: hero-section/HeroSection.tsx.
3. A second file in the same folder named with the same base name and .example.tsx, for example: hero-section/HeroSection.example.tsx.

## Workflow

1. Infer a generic component name from the snippet structure rather than from its specific copy or brand context.
2. Before creating the component, present the user with multiple naming suggestions: 5 names in total, including 3 preferred generic names and 2 context-based names that are offered only as optional alternatives for the user to choose from.
3. Confirm the chosen name with the user or proceed with the preferred default if the user does not specify one.
4. Check the repository components to ensure the chosen name does not already exist before creating the component files.
5. Convert the HTML structure into JSX and Tailwind CSS classes.
6. Preserve the original layout, spacing, hierarchy, and semantics as closely as possible.
7. Decide whether the component should be a server or client component; prefer server components by default unless interactivity is required.
8. Break repeated or conceptually distinct parts into small composable subcomponents instead of building one large monolith.
9. Turn repeated elements into reusable data-driven rendering using arrays and maps.
10. Extract the visible content from the HTML snippet into the example file so the example is meaningful and self-contained.
11. Place the component and example in the same subfolder and refactor repeated code into small helper structures, mapped lists, or composed subcomponents.
12. Use TypeScript and React best practices throughout, with a clear props interface and minimal unnecessary complexity.

## Component Naming Rules

- Use generic, reusable names that describe UI structure or intent rather than the source content.
- Before implementation, present the user with 5 naming suggestions in total: 3 preferred names and 2 context-based names.
- The 3 preferred names should be generic and reusable, such as HeroSection, FeatureSection, Header, CtaSection, HeroSection01, HeroSectionWithFormAction, FeatureGrid, SplitLayout, PricingSection, MediaPanel, QuoteBlock, or CardStack.
- The 2 context-based names should be optional alternatives that may reflect the current UI context, but they should still be general enough to remain reusable and should be presented only so the user can decide whether to use them.
- Do not use names based on the input content, campaign text, product names, brands, or specific copy.
- Avoid names like SummerSaleBanner, AcmeProductHero, or LaunchWeekSignup even if those words appear in the source snippet.
- Before creating files, verify that the selected name does not already exist in the repository components directory or in the current component tree.

## Component Rules

- Prefer functional React components.
- Favor server components by default; only add "use client" when interactivity or browser-only APIs are required.
- Keep component responsibilities small and focused.
- Use composition patterns: extract shared UI into smaller components, keep props explicit, and avoid boolean prop sprawl or deeply nested conditionals.
- Use Tailwind classes directly.
- Keep the component reusable by moving content into props where appropriate.
- If the snippet contains repeated blocks, make them data-driven rather than copy-pasted.
- Keep the implementation clean, readable, and production-friendly.
- Avoid unnecessary abstractions; refactor only where repetition is meaningful.

## Example File Rules

- Create a companion file with the same base name and the .example.tsx suffix.
- Import the component into the example file.
- Populate the example with extracted content from the HTML snippet.
- Make the example easy to understand and visually representative of the original design.

## Quality Bar

The final result should:

- Match the structure and styling of the original snippet.
- Be reusable instead of being a one-off copy.
- Contain a practical example showing how to use the component.
- Show clear refactoring of repeated markup into a cleaner component structure.
- Demonstrate solid React composition and maintainability rather than just visual translation.

## Response Format

When applying this skill, provide:

- The component file content.
- The example file content.
- A short note describing the component name and the main refactoring choices.
