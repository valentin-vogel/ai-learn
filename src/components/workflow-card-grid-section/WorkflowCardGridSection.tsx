import Link from "next/link"

import { cn } from "@/lib/utils"

export type WorkflowCardGridSectionLink = {
  readonly label: string
  readonly href: string
}

export type WorkflowCardGridSectionChip = {
  readonly label: string
  readonly href: string
}

export type WorkflowCardGridSectionCard = {
  readonly step: string
  readonly title: string
  readonly description: string
  readonly chips: readonly WorkflowCardGridSectionChip[]
  readonly primaryLink: WorkflowCardGridSectionLink
}

type WorkflowCardGridSectionProps = {
  readonly ariaLabel: string
  readonly title: string
  readonly description: string
  readonly cta: WorkflowCardGridSectionLink
  readonly cards: readonly WorkflowCardGridSectionCard[]
  readonly className?: string
}

type WorkflowCardGridSectionActionLinkProps = {
  readonly link: WorkflowCardGridSectionLink
  readonly className?: string
}

type WorkflowCardGridSectionCardProps = {
  readonly card: WorkflowCardGridSectionCard
  readonly isHighlighted?: boolean
}

function ArrowIcon({ className }: { readonly className?: string }) {
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
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function WorkflowCardGridSectionActionLink({
  link,
  className,
}: WorkflowCardGridSectionActionLinkProps) {
  return (
    <Link
      href={link.href}
      className={cn(
        "group inline-flex w-fit shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[9px] text-sm font-medium leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        className,
      )}
    >
      {link.label}
      <ArrowIcon className="ease-out-quart size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />
    </Link>
  )
}

function WorkflowCardGridSectionCard({
  card,
  isHighlighted,
}: WorkflowCardGridSectionCardProps) {
  return (
    <li className="bg-background flex flex-col px-6 pb-5.5 pt-6.5">
      <div className="mb-4.5 flex flex-col gap-2">
        <h3 className="text-lg font-bold leading-[1.2] tracking-[-0.02em] text-balance sm:text-xl flex items-baseline gap-2.5">
          <span
            aria-hidden="true"
            className={cn(
              "font-mono text-xs font-medium text-(--ah-fg-faint)",
              isHighlighted && "text-primary",
            )}
          >
            {card.step}
          </span>
          {card.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground text-balance">
          {card.description}
        </p>
      </div>

      <ul className="mb-5 flex flex-wrap gap-1.5">
        {card.chips.map((chip) => (
          <li key={`${chip.label}-${chip.href}`}>
            <Link
              href={chip.href}
              className="font-mono text-xs font-medium border-border bg-foreground/5.5 text-(--ah-fg-body) hover:border-foreground hover:bg-foreground hover:text-background focus-visible:ring-ring inline-flex items-center whitespace-nowrap rounded-sm border px-2.25 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              {chip.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={card.primaryLink.href}
        className={cn(
          "font-mono text-xs font-medium focus-visible:ring-ring group mt-auto flex w-full items-center justify-between gap-2.5 rounded-[8px] border px-3.25 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          isHighlighted
            ? "border-primary/35 bg-primary/[0.07] text-primary hover:bg-primary/15"
            : "border-border text-(--ah-fg-body) hover:bg-muted hover:text-foreground",
        )}
      >
        <span className="truncate">Start with {card.primaryLink.label}</span>
        <ArrowIcon className="ease-out-quart size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />
      </Link>
    </li>
  )
}

export function WorkflowCardGridSection({
  ariaLabel,
  title,
  description,
  cta,
  cards,
  className,
}: WorkflowCardGridSectionProps) {
  return (
    <section
      aria-label={ariaLabel}
      className={cn("border-b bg-(--ah-band)", className)}
    >
      <div className="flex flex-col gap-6 px-4.5 pb-10 pt-14 sm:px-11 sm:pt-19 md:flex-row md:items-end md:justify-between md:gap-7.5 md:pb-9.5">
        <div className="md:max-w-2xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-[1.875rem] font-bold leading-[1.08] tracking-[-0.028em] text-balance sm:text-[2.25rem] lg:text-[2.75rem] lg:leading-[1.04] lg:tracking-[-0.032em]">
              {title}
            </h2>
            <p className="text-(--ah-fg-muted) max-w-[62ch] text-[16.5px] leading-[1.68] text-balance sm:text-[17.5px]">
              {description}
            </p>
          </div>
        </div>

        <WorkflowCardGridSectionActionLink
          link={cta}
          className="border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-secondary focus-visible:ring-ring border px-4.25 py-2.75"
        />
      </div>

      <div className="px-4.5 pb-14 sm:px-11 sm:pb-20 md:pt-3">
        <ul className="border-border bg-border grid grid-cols-1 gap-px overflow-hidden rounded-lg border sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <WorkflowCardGridSectionCard
              key={`${card.step}-${card.title}`}
              card={card}
              isHighlighted={index === 0}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
