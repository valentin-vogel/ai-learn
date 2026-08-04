import Link from "next/link"
import { cn } from "@/lib/utils"

export type FeatureExplanationPoint = {
  readonly title: string
  readonly description: string
}

type FeatureExplanationSectionProps = {
  readonly headingId?: string
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly points: readonly FeatureExplanationPoint[]
  readonly supportTitle: string
  readonly supportDescription: string
  readonly platforms: readonly string[]
  readonly ctaLabel: string
  readonly ctaHref: string
  readonly className?: string
}

type PointCardProps = {
  readonly point: FeatureExplanationPoint
}

type PlatformBadgeProps = {
  readonly label: string
}

function PointCard({ point }: PointCardProps) {
  return (
    <div className="bg-background px-5.5 pb-6 pt-5.5">
      <h3 className="font-mono text-[11px] font-medium leading-[1.4] tracking-normal text-primary mb-2.75">
        {point.title}
      </h3>
      <p className="text-sm leading-relaxed text-(--ah-fg-muted)">
        {point.description}
      </p>
    </div>
  )
}

function PlatformBadge({ label }: PlatformBadgeProps) {
  return (
    <li className="font-mono text-xs font-medium border-input bg-muted inline-flex items-center rounded-sm border px-2.25 py-1.5 text-(--ah-fg-body)">
      {label}
    </li>
  )
}

function InstallArrowIcon() {
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
      className="ease-out-quart size-3 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}

export function FeatureExplanationSection({
  headingId = "feature-explanation-heading",
  eyebrow,
  title,
  description,
  points,
  supportTitle,
  supportDescription,
  platforms,
  ctaLabel,
  ctaHref,
  className,
}: FeatureExplanationSectionProps) {
  return (
    <section aria-labelledby={headingId} className={cn("border-b", className)}>
      <div className="px-4.5 pb-10 pt-11 sm:px-11">
        <p
          id={headingId}
          className="font-mono text-[11px] font-medium uppercase leading-[1.4] tracking-[0.16em] text-foreground/70 dark:text-foreground/65 mb-3"
        >
          {eyebrow}
        </p>

        <p className="text-[20px] font-medium leading-[1.4] tracking-[-0.018em] sm:text-[22px] lg:text-[24px] lg:tracking-[-0.02em] mb-7.5 mt-4.5 max-w-[64ch] text-pretty">
          {title}
        </p>

        <p className="text-sm leading-relaxed text-(--ah-fg-muted) mb-4 max-w-[64ch] text-pretty">
          {description}
        </p>

        <div className="border-border bg-border grid gap-px overflow-hidden rounded-lg border sm:grid-cols-3">
          {points.map((point) => (
            <PointCard key={point.title} point={point} />
          ))}
        </div>

        <div className="border-input bg-card mt-4 flex flex-wrap items-center gap-4.5 rounded-md border px-5 py-4">
          <div className="flex-none">
            <h3 className="text-base font-bold leading-[1.3] tracking-[-0.018em] mb-0.75">
              {supportTitle}
            </h3>
            <p className="text-[13px] leading-[1.35] text-(--ah-fg-subtle)">
              {supportDescription}
            </p>
          </div>

          <ul className="flex flex-wrap gap-1.75 sm:ml-auto">
            {platforms.map((platform) => (
              <PlatformBadge key={platform} label={platform} />
            ))}
          </ul>

          <Link
            href={ctaHref}
            className="font-mono text-xs font-medium border-(--ah-accent-line) bg-(--ah-accent-wash) text-primary hover:bg-(--ah-accent-panel) focus-visible:ring-ring group inline-flex items-center gap-1.5 rounded-sm border px-2.25 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            {ctaLabel}
            <InstallArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}
