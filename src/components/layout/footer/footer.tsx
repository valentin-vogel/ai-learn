import Link from "next/link"
import type { ReactNode } from "react"
import { ModeToggle } from "@/components/ui/dark-mode-toggle"
import { cn } from "@/lib/utils"

const defaultFooterColumns: readonly FooterColumn[] = [
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

const defaultFooterBottomLinks: readonly FooterLink[] = [
  { label: "Browse All", href: "/posts" },
  { label: "Skills", href: "/skills" },
  { label: "Terms", href: "/privacy" },
  { label: "Legal", href: "/legal" },
]

type FooterProps = {
  readonly footerColumns: readonly FooterColumn[]
  readonly footerBottomLinks: readonly FooterLink[]
}

type FooterLinkProps = {
  readonly href: string
  readonly className?: string
  readonly children: ReactNode
  readonly ariaLabel?: string
  readonly targetBlank?: boolean
}

type FooterColumnProps = {
  readonly column: FooterColumn
}

export type FooterColumn = {
  readonly title: string
  readonly links: readonly FooterLink[]
}

export type FooterLink = {
  readonly label: string
  readonly href: string
  readonly external?: boolean
  readonly mono?: boolean
}

function FooterLink({
  href,
  className,
  children,
  ariaLabel,
  targetBlank,
}: FooterLinkProps) {
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={className}
        target={targetBlank ? "_blank" : undefined}
        rel={targetBlank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={className}>
      {children}
    </Link>
  )
}

function FooterColumn({ column }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-muted-foreground mb-4 font-mono text-[11px] font-medium leading-[1.4] tracking-normal">
        {column.title}
      </h3>
      <ul className="-my-1.25 flex flex-col items-start">
        {column.links.map((linkItem) => (
          <li key={linkItem.href + linkItem.label}>
            <FooterLink
              href={linkItem.href}
              targetBlank={linkItem.external}
              className={cn(
                "inline-block rounded-sm py-1.25 text-sm font-medium leading-snug text-(--ah-fg-muted) transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                linkItem.mono && "font-mono text-[13px] leading-[1.35]",
              )}
            >
              {linkItem.label}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer({
  footerColumns = defaultFooterColumns,
  footerBottomLinks = defaultFooterBottomLinks,
}: FooterProps) {
  return (
    <footer className="border-border w-full border-t print:hidden">
      <div className="border-border grid grid-cols-1 gap-9 border-b px-4.5 pb-8 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-11 lg:pb-6.5 lg:pt-13">
        {footerColumns.map((column) => (
          <FooterColumn key={column.title} column={column} />
        ))}
      </div>

      <div className="flex flex-col items-start gap-5 px-4.5 pb-8 pt-5 sm:flex-row sm:items-center lg:px-11 lg:pb-8.5 lg:pt-5.5">
        <nav
          aria-label="Footer"
          className="-mx-2.5 -my-1 flex flex-wrap items-center"
        >
          {footerBottomLinks.map((linkItem) => (
            <FooterLink
              key={linkItem.href + linkItem.label}
              href={linkItem.href}
              className="inline-block rounded-sm px-2.5 py-1 text-[13px] leading-[1.35] text-(--ah-fg-subtle) transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {linkItem.label}
            </FooterLink>
          ))}
        </nav>

        <ModeToggle />
      </div>
    </footer>
  )
}
