import Link from "next/link"
import { cn } from "@/lib/utils"

type HeroAction = {
  readonly label: string
  readonly href: string
}

type HeroStat = {
  readonly id: string
  readonly value: string
  readonly label: string
}

type HeroFormField = {
  readonly id: string
  readonly label: string
  readonly name: string
  readonly type?: string
  readonly placeholder: string
  readonly required?: boolean
}

type HeroWithFormSectionProps = {
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly primaryAction: HeroAction
  readonly secondaryAction: HeroAction
  readonly stats: readonly HeroStat[]
  readonly supportingTitle: string
  readonly supportingDescription: string
  readonly formFields: readonly HeroFormField[]
  readonly submitLabel: string
  readonly footerNote: string
  readonly className?: string
}

type HeroActionLinkProps = {
  readonly action: HeroAction
  readonly variant: "primary" | "secondary"
}

type HeroStatItemProps = {
  readonly stat: HeroStat
}

type HeroFormFieldProps = {
  readonly field: HeroFormField
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
      className="size-4 transition-transform group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function HeroActionLink({ action, variant }: HeroActionLinkProps) {
  const baseClasses =
    "inline-flex h-11.5 w-fit items-center justify-center rounded-[9px] px-5 text-[15px] font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"

  if (variant === "primary") {
    return (
      <Link
        href={action.href}
        className={cn(
          baseClasses,
          "bg-accent-fill text-accent-fill-foreground hover:bg-accent-fill-hover focus-visible:ring-ring",
        )}
      >
        {action.label}
      </Link>
    )
  }

  return (
    <Link
      href={action.href}
      className={cn(
        baseClasses,
        "group border border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-secondary focus-visible:ring-ring",
      )}
    >
      <span className="flex items-center gap-2">
        {action.label}
        <ArrowRightIcon />
      </span>
    </Link>
  )
}

function HeroStatItem({ stat }: HeroStatItemProps) {
  return (
    <div className="flex min-w-0 flex-col">
      <dt className="sr-only">{stat.label}</dt>
      <dd className="font-mono text-2xl font-medium leading-none tracking-[-0.02em] sm:text-[26px]">
        {stat.value}
      </dd>
      <p className="mt-1.5 font-mono text-[11px] font-medium uppercase leading-[1.35] tracking-[0.12em] text-muted-foreground">
        {stat.label}
      </p>
    </div>
  )
}

function HeroFormFieldInput({ field }: HeroFormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={field.id}
        className="text-sm font-medium leading-none text-foreground"
      >
        {field.label}
      </label>
      <input
        id={field.id}
        name={field.name}
        type={field.type ?? "text"}
        placeholder={field.placeholder}
        required={field.required}
        className="h-12 rounded-[9px] border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
    </div>
  )
}

export function HeroWithFormSection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats,
  supportingTitle,
  supportingDescription,
  formFields,
  submitLabel,
  footerNote,
  className,
}: HeroWithFormSectionProps) {
  return (
    <section className={cn("w-full border-b border-border", className)}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4.5 py-12 sm:px-11 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-x-10 lg:py-16">
        <div className="min-w-0">
          <p className="mb-4 font-mono text-[11px] font-medium uppercase leading-[1.4] tracking-[0.16em] text-foreground/70">
            {eyebrow}
          </p>
          <h1 className="mb-5.5 max-w-[22ch] text-balance text-[2.125rem] font-bold leading-[1.04] tracking-[-0.032em] text-foreground sm:text-[2.75rem] lg:text-[3.25rem] lg:leading-[1.02] lg:tracking-[-0.036em]">
            {title}
          </h1>
          <p className="max-w-[52ch] text-[17px] font-normal leading-[1.55] text-(--ah-fg-muted) sm:text-[18.5px]">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <HeroActionLink action={primaryAction} variant="primary" />
            <HeroActionLink action={secondaryAction} variant="secondary" />
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-6 border-t border-border pt-6">
            {stats.map((stat) => (
              <HeroStatItem key={stat.id} stat={stat} />
            ))}
          </dl>
        </div>

        <aside className="flex min-w-0 flex-col rounded-[18px] border border-border bg-background/80 p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-[10px] border border-border bg-muted text-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
                aria-hidden="true"
              >
                <path d="M7 6h9.75c2.1067 0 3.16 0 3.9167.5056.3276.2189.6088.5001.8277.8277.5056.7567.5056 1.8101.5056 3.9167 0 3.5112 0 5.2667-.8427 6.5279-.1823.2729-.3907.5266-.6218.7576" />
                <path d="M3.4645 18.5355C2 17.0711 2 14.714 2 10V6.9443C2 5.1278 2 4.2196 2.3803 3.5381c.2711-.4858.6719-.8867 1.1577-1.1578.6815-.3803 1.5898-.3803 3.4062-.3803 1.1638 0 1.7456 0 2.255 0.191C10.3622 2.6271 10.8418 3.6836 11.3666 4.7331L12 6" />
                <path d="M18.25 21.25 16 19v-3" />
                <path d="M18.25 20.5c-.4142 0-.75.3358-.75.75s.3358.75.75.75.75-.3358.75-.75-.3358-.75-.75-.75Z" />
                <path d="M5.75 21.25 8 19v-3" />
                <path d="M5.75 20.5c.4142 0 .75.3358.75.75s-.3358.75-.75.75-.75-.3358-.75-.75.3358-.75.75-.75Z" />
              </svg>
            </div>
            <div className="min-w-0">
              <h2 className="text-lg font-bold leading-[1.2] tracking-[-0.02em] text-foreground">
                {supportingTitle}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-(--ah-fg-muted)">
                {supportingDescription}
              </p>
            </div>
          </div>

          <form className="mt-6 grid gap-3">
            {formFields.map((field) => (
              <HeroFormFieldInput key={field.id} field={field} />
            ))}
            <button
              type="submit"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-[9px] bg-accent-fill px-5 text-sm font-bold text-accent-fill-foreground transition hover:bg-accent-fill-hover"
            >
              {submitLabel}
            </button>
          </form>

          <p className="mt-2.5 text-[13px] leading-[1.35] text-(--ah-fg-subtle)">
            {footerNote}
          </p>
        </aside>
      </div>
    </section>
  )
}
