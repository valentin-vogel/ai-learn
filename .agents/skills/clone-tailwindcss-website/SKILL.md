---
name: clone-tailwindcss-website
description: Convert HTML and Tailwind CSS snippets from a website into reusable React components, plus an example usage file.
---

# Clone Tailwind CSS Website

Use this skill when the user provides an HTML snippet copied from a browser and wants it turned into a reusable React component.

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

1. A component file named using PascalCase, for example: HeroSection.tsx
2. A second file named with the same base name and .example.tsx, for example: HeroSection.example.tsx

## Workflow

1. Infer a clear component name from the snippet.
2. Convert the HTML structure into JSX and Tailwind CSS classes.
3. Preserve the original layout, spacing, hierarchy, and semantics as closely as possible.
4. Turn repeated elements into reusable data-driven rendering using arrays and maps.
5. Extract the visible content from the HTML snippet into the example file so the example is meaningful and self-contained.
6. Keep the component in a single file and refactor repeated code into small helper structures or mapped lists.
7. Use TypeScript and React best practices where possible.

## Component Rules

- Prefer functional React components.
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

## Response Format

When applying this skill, provide:

- The component file content.
- The example file content.
- A short note describing the component name and the main refactoring choices.
