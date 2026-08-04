import Link from "next/link"
import { cn } from "@/lib/utils"

export type SkillsByUseCaseLink = {
  readonly href: string
  readonly command: string
  readonly title: string
  readonly description?: string
}

export type SkillsByUseCaseGroup = {
  readonly step: string
  readonly title: string
  readonly description: string
  readonly startWith: SkillsByUseCaseLink
  readonly skills: readonly SkillsByUseCaseLink[]
}

type SkillsByUseCaseSectionProps = {
  readonly headingId?: string
  readonly title: string
  readonly description: string
  readonly groups: readonly SkillsByUseCaseGroup[]
  readonly className?: string
}

type GroupPanelProps = {
  readonly group: SkillsByUseCaseGroup
}

type SkillLinkItemProps = {
  readonly skill: SkillsByUseCaseLink
  readonly compact?: boolean
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
      className="text-muted-foreground group-hover:text-foreground ease-out-quart size-4 shrink-0 transition-all duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function SkillLinkItem({ skill, compact }: SkillLinkItemProps) {
  return (
    <li>
      <Link
        href={skill.href}
        className={cn(
          "group border-border hover:bg-muted/60 focus-visible:ring-ring flex items-center gap-4 border-b py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset md:-mx-4 md:px-4",
          compact && "border-b-0",
        )}
      >
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="font-mono text-xs font-medium text-(--ah-fg-body) block">
            {skill.command}
          </span>
          <span className="text-base font-medium leading-snug block text-balance">
            {skill.title}
          </span>
          {skill.description ? (
            <span className="text-sm leading-relaxed mt-0.5 block text-(--ah-fg-muted)">
              {skill.description}
            </span>
          ) : null}
        </span>

        <ArrowRightIcon />
      </Link>
    </li>
  )
}

function GroupPanel({ group }: GroupPanelProps) {
  return (
    <li className="border-border grid grid-cols-1 gap-x-12 gap-y-5 border-b py-7.5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="flex flex-col gap-2.5">
        <h3 className="text-lg font-bold leading-[1.2] tracking-[-0.02em] sm:text-xl flex items-baseline gap-2.5">
          <span
            aria-hidden="true"
            className="font-mono text-xs font-medium text-(--ah-fg-faint)"
          >
            {group.step}
          </span>
          {group.title}
        </h3>

        <p className="text-sm leading-relaxed max-w-[46ch] text-pretty text-(--ah-fg-muted)">
          {group.description}
        </p>

        <p className="font-mono text-[12px] font-normal leading-[1.4] tracking-normal text-muted-foreground mt-0.5">
          Start with{" "}
          <Link
            href={group.startWith.href}
            className="text-foreground focus-visible:ring-ring underline decoration-(--ah-line-strong) underline-offset-[3px] transition-colors hover:decoration-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            {group.startWith.command}
          </Link>
        </p>
      </div>

      <ul className="flex flex-col [&>li:last-child_a]:border-b-0">
        {group.skills.map((skill, index) => (
          <SkillLinkItem
            key={`${group.step}-${skill.command}`}
            skill={skill}
            compact={index === group.skills.length - 1}
          />
        ))}
      </ul>
    </li>
  )
}

export function SkillsByUseCaseSection({
  headingId = "skill-set-heading",
  title,
  description,
  groups,
  className,
}: SkillsByUseCaseSectionProps) {
  return (
    <section
      aria-labelledby={headingId}
      className={cn("border-border border-b bg-(--ah-band)", className)}
    >
      <div className="px-4.5 pb-13 pt-12 sm:px-11">
        <div className="mb-8.5 flex flex-col gap-3">
          <h2
            id={headingId}
            className="text-2xl font-bold leading-[1.08] tracking-[-0.028em] sm:text-[1.75rem] lg:text-[2.125rem] lg:leading-[1.06] lg:tracking-[-0.03em]"
          >
            {title}
          </h2>
          <p className="text-[17px] font-normal leading-[1.55] sm:text-[18.5px] max-w-[52ch] text-pretty text-(--ah-fg-muted)">
            {description}
          </p>
        </div>

        <ul className="border-border border-t [&>li:last-child]:border-b-0">
          {groups.map((group) => (
            <GroupPanel key={group.step} group={group} />
          ))}
        </ul>
      </div>
    </section>
  )
}
