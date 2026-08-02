import Link from "next/link"

import { cn } from "@/lib/utils"

export type ChangelogFeedActionLink = {
  readonly label: string
  readonly href: string
  readonly external?: boolean
  readonly icon?: "rss" | "none"
}

export type ChangelogFeedEntry = {
  readonly href: string
  readonly version?: string
  readonly date: string
  readonly title: string
  readonly description: string
  readonly highlighted?: boolean
}

type ChangelogFeedSectionProps = {
  readonly headingId?: string
  readonly eyebrow: string
  readonly title: string
  readonly actions: readonly ChangelogFeedActionLink[]
  readonly entries: readonly ChangelogFeedEntry[]
  readonly className?: string
}

type FeedActionProps = {
  readonly action: ChangelogFeedActionLink
}

type FeedEntryProps = {
  readonly entry: ChangelogFeedEntry
}

function RssIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5"
      aria-hidden="true"
    >
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  )
}

function FeedAction({ action }: FeedActionProps) {
  const commonClassName =
    "text-sm font-medium leading-snug hover:text-foreground inline-flex items-center gap-1.5 text-(--ah-fg-subtle) transition-colors"

  if (action.external) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClassName}
      >
        {action.label}
      </a>
    )
  }

  return (
    <Link href={action.href} className={commonClassName}>
      {action.icon === "rss" ? <RssIcon /> : null}
      {action.label}
    </Link>
  )
}

function FeedEntry({ entry }: FeedEntryProps) {
  return (
    <li className="border-border border-b last:border-b-0">
      <Link
        href={entry.href}
        className="focus-visible:ring-ring group grid gap-x-6 gap-y-2 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset sm:grid-cols-[150px_minmax(0,1fr)]"
      >
        <div>
          {entry.version ? (
            <span
              className={cn(
                "font-mono text-xs font-medium mb-1.25 block",
                entry.highlighted ? "text-primary" : "text-(--ah-fg-muted)",
              )}
            >
              {entry.version}
            </span>
          ) : null}

          <span className="font-mono text-xs block font-normal text-(--ah-fg-faint)">
            {entry.date}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold leading-[1.2] tracking-[-0.02em] sm:text-xl mb-1.5 text-balance transition-colors group-hover:text-(--ah-fg-muted)">
            {entry.title}
          </h3>
          <p className="text-sm leading-relaxed text-pretty text-(--ah-fg-muted)">
            {entry.description}
          </p>
        </div>
      </Link>
    </li>
  )
}

export function ChangelogFeedSection({
  headingId = "changelog-heading",
  eyebrow,
  title,
  actions,
  entries,
  className,
}: ChangelogFeedSectionProps) {
  return (
    <section aria-labelledby={headingId} className={cn("border-b", className)}>
      <div className="px-4.5 pb-12.5 pt-12 sm:px-11">
        <div className="mb-6.5 flex flex-col gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] font-medium leading-[1.4] tracking-normal text-muted-foreground">
              {eyebrow}
            </p>
            <h2
              id={headingId}
              className="text-2xl font-bold leading-[1.08] tracking-[-0.028em] sm:text-[1.75rem] lg:text-[2.125rem] lg:leading-[1.06] lg:tracking-[-0.03em] mt-3.5 text-balance"
            >
              {title}
            </h2>
          </div>

          <div className="flex items-center gap-5 md:ml-auto md:shrink-0">
            {actions.map((action) => (
              <FeedAction
                key={`${action.label}-${action.href}`}
                action={action}
              />
            ))}
          </div>
        </div>

        <ol className="border-border max-w-240 border-t">
          {entries.map((entry) => (
            <FeedEntry key={`${entry.date}-${entry.title}`} entry={entry} />
          ))}
        </ol>
      </div>
    </section>
  )
}
