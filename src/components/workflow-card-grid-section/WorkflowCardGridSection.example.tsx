import {
  WorkflowCardGridSection,
  type WorkflowCardGridSectionCard,
} from "@/components/workflow-card-grid-section/WorkflowCardGridSection"

const cards: readonly WorkflowCardGridSectionCard[] = [
  {
    step: "01",
    title: "Getting Started",
    description: "Set up once, then find your way around.",
    chips: [
      {
        label: "/setup-matt-pocock-skills",
        href: "/skills-setup-matt-pocock-skills",
      },
      {
        label: "/ask-matt",
        href: "/skills-ask-matt",
      },
    ],
    primaryLink: {
      label: "/setup-matt-pocock-skills",
      href: "/skills-setup-matt-pocock-skills",
    },
  },
  {
    step: "02",
    title: "The Main Flow",
    description: "The idea→ship spine, in order.",
    chips: [
      { label: "/grill-with-docs", href: "/skills-grill-with-docs" },
      { label: "/to-spec", href: "/skills-to-spec" },
      { label: "/to-tickets", href: "/skills-to-tickets" },
      { label: "/implement", href: "/skills-implement" },
      { label: "/tdd", href: "/skills-tdd" },
      { label: "/code-review", href: "/skills-code-review" },
    ],
    primaryLink: {
      label: "/grill-with-docs",
      href: "/skills-grill-with-docs",
    },
  },
  {
    step: "03",
    title: "Shaping",
    description:
      "Explore an open question and produce a decision/answer that feeds the flow.",
    chips: [
      { label: "/wayfinder", href: "/skills-wayfinder" },
      { label: "/prototype", href: "/skills-prototype" },
      { label: "/research", href: "/skills-research" },
    ],
    primaryLink: {
      label: "/wayfinder",
      href: "/skills-wayfinder",
    },
  },
  {
    step: "04",
    title: "Upkeep",
    description:
      "Keep the codebase and issue list healthy; generates work for the flow.",
    chips: [
      {
        label: "/improve-codebase-architecture",
        href: "/skills-improve-codebase-architecture",
      },
      { label: "/diagnosing-bugs", href: "/skills-diagnosing-bugs" },
      { label: "/triage", href: "/skills-triage" },
    ],
    primaryLink: {
      label: "/improve-codebase-architecture",
      href: "/skills-improve-codebase-architecture",
    },
  },
  {
    step: "05",
    title: "Productivity Skills",
    description: "Human-facing workflows you run, not about code.",
    chips: [
      { label: "/grill-me", href: "/skills-grill-me" },
      { label: "/handoff", href: "/skills-handoff" },
      { label: "/teach", href: "/skills-teach" },
      {
        label: "/writing-great-skills",
        href: "/skills-writing-great-skills",
      },
    ],
    primaryLink: {
      label: "/grill-me",
      href: "/skills-grill-me",
    },
  },
  {
    step: "06",
    title: "Reference Skills",
    description: "The reusable layer other skills invoke or cite.",
    chips: [
      { label: "/codebase-design", href: "/skills-codebase-design" },
      { label: "/domain-modeling", href: "/skills-domain-modeling" },
      { label: "/grilling", href: "/skills-grilling" },
    ],
    primaryLink: {
      label: "/codebase-design",
      href: "/skills-codebase-design",
    },
  },
]

export function WorkflowCardGridSectionExample() {
  return (
    <WorkflowCardGridSection
      ariaLabel="The skills workflow"
      title="A real engineering process, as installable skills"
      description="Every skill here is free, installs in one command, and you can use it today. Start anywhere. Most people start with the main flow."
      cta={{ label: "See all 21 skills", href: "/skills" }}
      cards={cards}
    />
  )
}
