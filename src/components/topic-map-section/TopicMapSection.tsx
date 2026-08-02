import Link from "next/link"

import { cn } from "@/lib/utils"

export type TopicMapSectionLink = {
  readonly label: string
  readonly href: string
}

export type TopicMapSectionItem = {
  readonly kind: string
  readonly title: string
  readonly href: string
}

export type TopicMapSectionGroup = {
  readonly badge: string
  readonly title: string
  readonly moreLink: TopicMapSectionLink
  readonly items: readonly TopicMapSectionItem[]
}

type TopicMapSectionProps = {
  readonly ariaLabel: string
  readonly title: string
  readonly description: string
  readonly cta: TopicMapSectionLink
  readonly groups: readonly TopicMapSectionGroup[]
  readonly className?: string
}

type TopicMapSectionActionLinkProps = {
  readonly link: TopicMapSectionLink
  readonly className?: string
}

type TopicMapSectionResourceLinkProps = {
  readonly item: TopicMapSectionItem
}

type TopicMapSectionGroupProps = {
  readonly group: TopicMapSectionGroup
  readonly isLast: boolean
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

function TopicMapSectionActionLink({
  link,
  className,
}: TopicMapSectionActionLinkProps) {
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

function TopicMapSectionResourceLink({
  item,
}: TopicMapSectionResourceLinkProps) {
  return (
    <li>
      <Link
        href={item.href}
        className="group border-border hover:bg-muted/60 focus-visible:ring-ring flex items-center gap-4 border-b py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset md:-mx-4 md:px-4"
      >
        <span className="hidden w-[74px] flex-none sm:block">
          <span className="border-border text-foreground inline-flex w-fit rounded-[4px] border px-[7px] py-[5px] font-mono text-[10px] leading-none font-medium uppercase tracking-[0.10em]">
            {item.kind}
          </span>
        </span>

        <span className="flex min-w-0 flex-1 flex-col items-start gap-1.5">
          <span className="border-border text-foreground inline-flex w-fit rounded-[4px] border px-[7px] py-[5px] font-mono text-[10px] leading-none font-medium uppercase tracking-[0.10em] sm:hidden">
            {item.kind}
          </span>
          <span className="text-base font-medium leading-snug text-balance">
            {item.title}
          </span>
        </span>

        <ArrowIcon className="text-muted-foreground group-hover:text-foreground ease-out-quart size-4 shrink-0 transition-all duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />
      </Link>
    </li>
  )
}

function TopicMapSectionGroup({ group, isLast }: TopicMapSectionGroupProps) {
  return (
    <li
      className={cn(
        "border-border grid grid-cols-1 gap-x-12 gap-y-5 border-b py-[30px] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
        isLast && "last:border-b-0",
      )}
    >
      <div className="flex flex-col gap-3">
        <p>
          <span className="bg-foreground/10 text-foreground inline-block rounded-[4px] px-[7px] py-[5px] font-mono text-[10px] leading-none font-medium uppercase tracking-[0.10em]">
            {group.badge}
          </span>
        </p>

        <h3 className="text-[1.25rem] font-bold leading-[1.2] tracking-[-0.022em] text-balance sm:text-[1.375rem] lg:text-[1.5625rem] lg:leading-[1.15] lg:tracking-[-0.025em]">
          {group.title}
        </h3>

        <TopicMapSectionActionLink
          link={group.moreLink}
          className="text-muted-foreground hover:text-foreground focus-visible:ring-ring mt-1"
        />
      </div>

      <ul className="flex flex-col [&>li:last-child_a]:border-b-0">
        {group.items.map((item) => (
          <TopicMapSectionResourceLink
            key={`${item.kind}-${item.title}`}
            item={item}
          />
        ))}
      </ul>
    </li>
  )
}

export function TopicMapSection({
  ariaLabel,
  title,
  description,
  cta,
  groups,
  className,
}: TopicMapSectionProps) {
  return (
    <section aria-label={ariaLabel} className={cn("border-b", className)}>
      <div className="flex flex-col gap-6 px-4.5 pb-10 pt-14 sm:px-11 sm:pt-19 md:flex-row md:items-end md:justify-between md:gap-[30px] md:pb-9.5">
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

        <TopicMapSectionActionLink
          link={cta}
          className="border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-secondary focus-visible:ring-ring border px-[17px] py-[11px]"
        />
      </div>

      <div className="px-4.5 pb-14 sm:px-11 sm:pb-17">
        <ul className="border-border border-t">
          {groups.map((group, index) => (
            <TopicMapSectionGroup
              key={`${group.badge}-${group.title}`}
              group={group}
              isLast={index === groups.length - 1}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
