import {
  PostPage,
  type PostPageCard,
  type PostPageFilterControl,
  type PostPageFooterColumn,
  type PostPageFooterLink,
  type PostPageSidebarGroup,
  type PostPageViewMode,
} from "@/components/post-page/PostPage"

const sidebarGroups: readonly PostPageSidebarGroup[] = [
  {
    label: "Explore",
    items: [
      { ariaLabel: "Map", icon: "map", href: "/learn" },
      { ariaLabel: "Skills", icon: "skills", href: "/skills" },
      { ariaLabel: "Open source", icon: "openSource", href: "/open-source" },
    ],
  },
  {
    label: "Guides",
    items: [
      {
        ariaLabel: "LLM Fundamentals",
        icon: "book",
        href: "/llm-fundamentals",
      },
      {
        ariaLabel: "AI Engineer Roadmap",
        icon: "roadmap",
        href: "/ai-engineer-roadmap",
      },
      {
        ariaLabel: "AI Coding Dictionary",
        icon: "dictionary",
        href: "/ai-coding-dictionary",
      },
    ],
  },
  {
    label: "What's New",
    items: [
      { ariaLabel: "All posts", icon: "posts", href: "/posts", current: true },
    ],
  },
  {
    label: "Topics",
    items: [{ ariaLabel: "Open Topics", icon: "topics" }],
  },
]

const filterControls: readonly PostPageFilterControl[] = [{ label: "Type..." }]

const sortControl: PostPageFilterControl = {
  label: "Newest first",
}

const viewModes: readonly PostPageViewMode[] = [
  { ariaLabel: "List view", icon: "listView", active: true },
  { ariaLabel: "Graph view", icon: "graphView" },
]

const cards: readonly PostPageCard[] = [
  {
    href: "/skills/skills-changelog-v1-1-wayfinder-to-spec-to-tickets-grilling-improvements",
    kind: "Skill-changelog",
    date: "Jul 8, 2026",
    title:
      "v1.1: /wayfinder, /to-spec, /to-tickets, /grilling improvements, and much more",
    description:
      "Skills v1.1 released: Learn new agent skills for AI coding including Wayfinder for planning, spec improvements, and TDD refactoring.",
    imageAlt:
      "v1.1: /wayfinder, /to-spec, /to-tickets, /grilling improvements, and much more",
    imageSrc: "https://localhost/thumbnail.jpg",
    featured: true,
  },
  {
    href: "/skills-grilling",
    kind: "Skill",
    date: "Jul 7, 2026",
    title: "The /grilling Skill",
    imageAlt: "The /grilling Skill",
    imageSrc: "https://localhost/plw8v1njpg.jpg",
  },
  {
    href: "/skills-handoff",
    kind: "Skill",
    date: "May 13, 2026",
    title: "The /handoff Skill",
    description:
      "A guide to the handoff skill for compacting context so another agent or session can continue cleanly.",
    imageAlt: "The /handoff Skill",
    imageSrc: "https://localhost/uewo6m4blrhskpxww8oc.jpg",
    tags: [{ label: "# Phase 6: Build" }, { label: "# Get Better Results" }],
  },
]

const footerColumns: readonly PostPageFooterColumn[] = [
  {
    title: "Learn",
    links: [
      {
        label: "AI SDK v6 Crash Course",
        href: "/workshops/ai-sdk-v6-crash-course",
      },
      { label: "LLM Fundamentals", href: "/llm-fundamentals" },
      { label: "AI Coding Dictionary", href: "/ai-coding-dictionary" },
      { label: "The AI Engineer Roadmap", href: "/ai-engineer-roadmap" },
      { label: "Vercel AI SDK Tutorial", href: "/vercel-ai-sdk-tutorial" },
      {
        label: "Model Context Protocol Tutorial",
        href: "/model-context-protocol-tutorial",
      },
    ],
  },
  {
    title: "Cohorts",
    links: [
      {
        label: "AI Coding for Real Engineers",
        href: "/cohorts/ai-coding-for-real-engineers-m0k0w",
      },
      {
        label: "Claude Code for Real Engineers",
        href: "/cohorts/claude-code-for-real-engineers-2026-04",
      },
      {
        label: "Build Your Own AI Personal Assistant in TypeScript",
        href: "/cohorts/build-your-own-ai-personal-assistant-in-typescript",
      },
      {
        label: "Build DeepSearch in TypeScript",
        href: "/cohorts/build-deepsearch-in-typescript",
      },
    ],
  },
  {
    title: "Account",
    links: [{ label: "Log in / Sign up", href: "/login" }],
  },
  {
    title: "Agents",
    links: [
      { label: "sitemap.md", href: "/sitemap.md", external: true, mono: true },
      { label: "llms.txt", href: "/llms.txt", external: true, mono: true },
      { label: "skills.md", href: "/skills.md", external: true, mono: true },
      { label: "rss.xml", href: "/rss.xml", external: true, mono: true },
    ],
  },
]

const footerBottomLinks: readonly PostPageFooterLink[] = [
  { label: "Browse All", href: "/posts" },
  { label: "Skills", href: "/skills" },
  { label: "Free course", href: "/skills/subscribe" },
  { label: "Dictionary", href: "/ai-coding-dictionary" },
  { label: "FAQ", href: "/faq" },
  { label: "Terms", href: "/privacy" },
]

export function PostPageExample() {
  return (
    <PostPage
      searchPlaceholder="Search..."
      sidebarGroups={sidebarGroups}
      filterControls={filterControls}
      sortControl={sortControl}
      viewModes={viewModes}
      cards={cards}
      footerColumns={footerColumns}
      footerBottomLinks={footerBottomLinks}
      themeLabel="system Theme"
    />
  )
}
