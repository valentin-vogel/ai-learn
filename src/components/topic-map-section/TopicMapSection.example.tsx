import {
  TopicMapSection,
  type TopicMapSectionGroup,
} from "@/components/topic-map-section/TopicMapSection"

const groups: readonly TopicMapSectionGroup[] = [
  {
    badge: "Learn how LLMs think",
    title: "What is actually happening when I prompt a model?",
    moreLink: {
      label: "More on how LLMs think",
      href: "/topics/learn-how-llms-think",
    },
    items: [
      {
        kind: "Article",
        title: "What Is An LLM?",
        href: "/what-is-an-llm",
      },
      {
        kind: "Video",
        title: "What Is The Context Window?",
        href: "/what-is-the-context-window",
      },
      {
        kind: "Video",
        title: "What Are Tokens?",
        href: "/what-are-tokens",
      },
    ],
  },
  {
    badge: "Set up your agent",
    title: "How do I get it working the way I work?",
    moreLink: {
      label: "More ways to set up your agent",
      href: "/topics/set-up-your-agent",
    },
    items: [
      {
        kind: "Article",
        title: "A Complete Guide To AGENTS.md",
        href: "/a-complete-guide-to-agents-md",
      },
      {
        kind: "Article",
        title: "An Introduction To Plan Mode",
        href: "/plan-mode-introduction",
      },
      {
        kind: "Video",
        title: "Never Run Claude /init",
        href: "/never-run-claude-init",
      },
    ],
  },
  {
    badge: "Ship solid code",
    title: "How do I ship code I would put my name on?",
    moreLink: {
      label: "More on shipping solid code",
      href: "/topics/ship-solid-code",
    },
    items: [
      {
        kind: "Video",
        title: "My Skill Makes Claude Code GREAT At TDD",
        href: "/skill-test-driven-development-claude-code",
      },
      {
        kind: "Article",
        title: "The /improve-codebase-architecture Skill",
        href: "/skills-improve-codebase-architecture",
      },
      {
        kind: "Video",
        title: "Essential AI Coding Feedback Loops For TypeScript Projects",
        href: "/essential-ai-coding-feedback-loops-for-type-script-projects",
      },
    ],
  },
  {
    badge: "Build a software factory",
    title: "How far can I let an agent run on its own?",
    moreLink: {
      label: "More on running agents unattended",
      href: "/topics/build-a-software-factory",
    },
    items: [
      {
        kind: "Article",
        title: "Getting Started With Ralph",
        href: "/getting-started-with-ralph",
      },
      {
        kind: "Article",
        title: "Here's How To Stream Claude Code With AFK Ralph",
        href: "/heres-how-to-stream-claude-code-with-afk-ralph",
      },
      {
        kind: "Article",
        title: "11 Tips For AI Coding With Ralph Wiggum",
        href: "/tips-for-ai-coding-with-ralph-wiggum",
      },
    ],
  },
]

export function TopicMapSectionExample() {
  return (
    <TopicMapSection
      ariaLabel="What do you want to do?"
      title="What do you want to do?"
      description="Most developers find the gap is further back than they expected. Pick the honest one."
      cta={{
        label: "See the full map",
        href: "/learn",
      }}
      groups={groups}
    />
  )
}
