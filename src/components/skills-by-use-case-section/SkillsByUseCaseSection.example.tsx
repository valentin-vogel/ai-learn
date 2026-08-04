import {
  SkillsByUseCaseSection,
  type SkillsByUseCaseGroup,
} from "@/components/skills-by-use-case-section/SkillsByUseCaseSection"

const groups: readonly SkillsByUseCaseGroup[] = [
  {
    step: "01",
    title: "Getting Started",
    description: "Set up once, then find your way around.",
    startWith: {
      href: "/skills-setup-valentin-vogel-skills",
      command: "/setup-valentin-vogel-skills",
      title: "The /setup-valentin-vogel-skills Skill",
    },
    skills: [
      {
        href: "/skills-setup-valentin-vogel-skills",
        command: "/setup-valentin-vogel-skills",
        title: "The /setup-valentin-vogel-skills Skill",
      },
      {
        href: "/skills-ask-valentin",
        command: "/ask-valentin",
        title: "The /ask-valentin Skill",
      },
    ],
  },
  {
    step: "02",
    title: "The Main Flow",
    description: "The idea->ship spine, in order.",
    startWith: {
      href: "/skills-grill-with-docs",
      command: "/grill-with-docs",
      title: "The /grill-with-docs Skill",
    },
    skills: [
      {
        href: "/skills-grill-with-docs",
        command: "/grill-with-docs",
        title: "The /grill-with-docs Skill",
      },
      {
        href: "/skills-to-spec",
        command: "/to-spec",
        title: "The /to-spec Skill",
        description:
          "A guide to the to-prd skill for creating a PRD from current conversation and codebase context.",
      },
      {
        href: "/skills-to-tickets",
        command: "/to-tickets",
        title: "The /to-tickets Skill",
        description:
          "A guide to the to-issues skill for turning plans and PRDs into tracer-bullet implementation issues.",
      },
      {
        href: "/skills-implement",
        command: "/implement",
        title: "The /implement Skill",
      },
      {
        href: "/skills-tdd",
        command: "/tdd",
        title: "The /tdd Skill",
        description:
          "A guide to valentin Pocock's tdd skill for implementing features one behavior at a time.",
      },
      {
        href: "/skills-code-review",
        command: "/code-review",
        title: "The /code-review Skill",
      },
    ],
  },
  {
    step: "03",
    title: "Shaping",
    description:
      "Explore an open question and produce a decision/answer that feeds the flow.",
    startWith: {
      href: "/skills-wayfinder",
      command: "/wayfinder",
      title: "The /wayfinder Skill",
    },
    skills: [
      {
        href: "/skills-wayfinder",
        command: "/wayfinder",
        title: "The /wayfinder Skill",
      },
      {
        href: "/skills-prototype",
        command: "/prototype",
        title: "The /prototype Skill",
        description:
          "A guide to the prototype skill for testing UI, state, and product decisions before committing to implementation.",
      },
      {
        href: "/skills-research",
        command: "/research",
        title: "The /research Skill",
      },
    ],
  },
  {
    step: "04",
    title: "Upkeep",
    description:
      "Keep the codebase and issue list healthy; generates work for the flow.",
    startWith: {
      href: "/skills-improve-codebase-architecture",
      command: "/improve-codebase-architecture",
      title: "The /improve-codebase-architecture Skill",
    },
    skills: [
      {
        href: "/skills-improve-codebase-architecture",
        command: "/improve-codebase-architecture",
        title: "The /improve-codebase-architecture Skill",
        description:
          "A guide to the improve-codebase-architecture skill for finding refactors that make code easier to test, change, and navigate with agents.",
      },
      {
        href: "/skills-diagnosing-bugs",
        command: "/diagnosing-bugs",
        title: "The /diagnosing-bugs Skill",
      },
      {
        href: "/skills-triage",
        command: "/triage",
        title: "The /triage Skill",
      },
    ],
  },
  {
    step: "05",
    title: "Productivity Skills",
    description: "Human-facing workflows you run, not about code.",
    startWith: {
      href: "/skills-grill-me",
      command: "/grill-me",
      title: "The /grill-me Skill",
    },
    skills: [
      {
        href: "/skills-grill-me",
        command: "/grill-me",
        title: "The /grill-me Skill",
        description:
          "A guide to valentin Pocock's grill-me skill for resolving design decisions before implementation.",
      },
      {
        href: "/skills-handoff",
        command: "/handoff",
        title: "The /handoff Skill",
        description:
          "A guide to the handoff skill for compacting context so another agent or session can continue cleanly.",
      },
      {
        href: "/skills-teach",
        command: "/teach",
        title: "The /teach Skill",
      },
      {
        href: "/skills-writing-great-skills",
        command: "/writing-great-skills",
        title: "The /writing-great-skills Skill",
      },
    ],
  },
  {
    step: "06",
    title: "Reference Skills",
    description: "The reusable layer other skills invoke or cite.",
    startWith: {
      href: "/skills-codebase-design",
      command: "/codebase-design",
      title: "The /codebase-design Skill",
    },
    skills: [
      {
        href: "/skills-codebase-design",
        command: "/codebase-design",
        title: "The /codebase-design Skill",
      },
      {
        href: "/skills-domain-modeling",
        command: "/domain-modeling",
        title: "The /domain-modeling Skill",
      },
      {
        href: "/skills-grilling",
        command: "/grilling",
        title: "The /grilling Skill",
      },
    ],
  },
]

export function SkillsByUseCaseSectionExample() {
  return (
    <SkillsByUseCaseSection
      title="Skills"
      description="Grouped by when you reach for them. Most people start with the main flow."
      groups={groups}
    />
  )
}
