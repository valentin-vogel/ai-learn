import Link from "next/link"

import { cn } from "@/lib/utils"

type AnnouncementBadge = {
  readonly id: string
  readonly label: string
}

type AnnouncementBannerProps = {
  readonly badges: readonly AnnouncementBadge[]
  readonly linkHref: string
  readonly linkLabel: string
  readonly ariaLabel?: string
  readonly className?: string
}

type BadgeListProps = {
  readonly badges: readonly AnnouncementBadge[]
}

function BadgeList({ badges }: BadgeListProps) {
  return (
    <div className="inline-flex min-w-0 items-center gap-1.5">
      {badges.map((badge) => (
        <span
          key={badge.id}
          className="text-primary inline-flex shrink-0 items-center rounded-lg border border-(--ah-accent-line) px-1.5 py-1 font-mono text-[9px] font-medium uppercase leading-none tracking-widest"
        >
          {badge.label}
        </span>
      ))}
    </div>
  )
}

function ArrowRightIcon() {
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
      className="size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export function AnnouncementBanner({
  badges,
  linkHref,
  linkLabel,
  ariaLabel = "Announcement",
  className,
}: AnnouncementBannerProps) {
  return (
    <aside
      aria-label={ariaLabel}
      className={cn(
        "relative mx-auto w-full max-w-364 px-2 print:hidden",
        className,
      )}
    >
      <div className="bg-muted/40 border-border flex h-8.5 items-center justify-center gap-2.5 border-x border-b px-4 text-center text-[12.5px] leading-none">
        <BadgeList badges={badges} />

        <Link
          href={linkHref}
          className="group focus-visible:ring-ring inline-flex min-w-0 items-center gap-1.5 font-medium tracking-tight underline-offset-4 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          <span className="truncate leading-[1.4]">{linkLabel}</span>
          <ArrowRightIcon />
        </Link>
      </div>
    </aside>
  )
}
