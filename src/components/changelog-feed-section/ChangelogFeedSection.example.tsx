import {
  ChangelogFeedSection,
  type ChangelogFeedActionLink,
  type ChangelogFeedEntry,
} from "@/components/changelog-feed-section/ChangelogFeedSection"

const actions: readonly ChangelogFeedActionLink[] = [
  {
    label: "RSS",
    href: "/skills/rss.xml",
    icon: "rss",
  },
  {
    label: "Full history on GitHub ->",
    href: "https://github.com/mattpocock/skills/releases",
    external: true,
    icon: "none",
  },
]

const entries: readonly ChangelogFeedEntry[] = [
  {
    href: "/skills/skills-changelog-v1-1-wayfinder-to-spec-to-tickets-grilling-improvements",
    version: "v1.1",
    date: "Jul 8, 2026",
    title:
      "/wayfinder, /to-spec, /to-tickets, /grilling improvements, and much more",
    description:
      "Skills v1.1 released: Learn new agent skills for AI coding including Wayfinder for planning, spec improvements, and TDD refactoring.",
    highlighted: true,
  },
  {
    href: "/skills/skills-changelog-v1-announcement",
    version: "v1",
    date: "Jun 18, 2026",
    title: "63% Token Reduction, /ask-matt, /writing-great-skills",
    description:
      "Skills v1.0 update: 63% token reduction, new routing skills, domain modeling & codebase design. Install with npx now.",
  },
  {
    href: "/skills/skills-changelog-handoff-prototype-review-and-writing",
    date: "May 11, 2026",
    title: "Skills Changelog: /handoff, /prototype, /review and /writing",
    description:
      "Two new AI agent skills: /handoff for passing context between agents, and /prototype for building throwaway prototypes to test design decisions.",
  },
  {
    href: "/skills/skills-changelog-ubiquitous-language-grill-with-docs",
    date: "Apr 30, 2026",
    title: "Skills Changelog: Ubiquitous Language -> /grill-with-docs",
    description:
      "Skills repo changelog: /grill-with-docs, ADRs, improved architecture language, multi-tracker support & new debugging skills. Updates inside.",
  },
]

export function ChangelogFeedSectionExample() {
  return (
    <ChangelogFeedSection
      eyebrow="Changelog"
      title="What changed recently"
      actions={actions}
      entries={entries}
    />
  )
}
