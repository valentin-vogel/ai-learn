import Link from "next/link"

import { cn } from "@/lib/utils"

export type CourseSignupPanelField = {
  readonly id: string
  readonly label: string
  readonly name: string
  readonly type: "text" | "email"
  readonly placeholder: string
  readonly required?: boolean
}

export type CourseSignupPanelSignup = {
  readonly statusLabel: string
  readonly title: string
  readonly description: string
  readonly submitLabel: string
  readonly disclaimer: string
  readonly fields: readonly CourseSignupPanelField[]
  readonly formAction?: string
  readonly formMethod?: "get" | "post"
}

export type CourseSignupPanelFeature = {
  readonly title: string
  readonly href: string
  readonly linkLabel: string
  readonly image: {
    readonly src: string
    readonly alt: string
    readonly width: number
    readonly height: number
    readonly sizes?: string
  }
  readonly stats: readonly {
    readonly label: string
    readonly value: string
  }[]
}

type CourseSignupPanelProps = {
  readonly id?: string
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly signup: CourseSignupPanelSignup
  readonly feature: CourseSignupPanelFeature
  readonly className?: string
}

type CourseSignupPanelFormProps = {
  readonly fields: readonly CourseSignupPanelField[]
  readonly submitLabel: string
  readonly formAction?: string
  readonly formMethod: "get" | "post"
}

type CourseSignupPanelFeatureCardProps = {
  readonly feature: CourseSignupPanelFeature
}

type CourseSignupPanelStatsProps = {
  readonly stats: readonly {
    readonly label: string
    readonly value: string
  }[]
}

function CourseSignupPanelForm({
  fields,
  submitLabel,
  formAction,
  formMethod,
}: CourseSignupPanelFormProps) {
  return (
    <form
      action={formAction}
      method={formMethod}
      data-sr-convertkit-subscribe-form=""
      className="text-sm font-medium leading-snug grid w-full min-w-0 grid-cols-1 gap-2.5 @[520px]:grid-cols-[minmax(0,140px)_minmax(0,1fr)_auto] @[520px]:items-start [&_label]:sr-only [&_input]:border-border [&_input]:bg-background [&_input]:text-foreground [&_input]:placeholder:text-(--ah-fg-faint) [&_input]:focus-visible:ring-ring [&_input]:box-border [&_input]:w-full [&_input]:min-w-0 [&_input]:rounded-[9px] [&_input]:border [&_input]:px-3.5 [&_input]:text-sm [&_button]:bg-accent-fill [&_button]:text-accent-fill-foreground [&_button]:hover:bg-accent-fill-hover [&_button]:w-full [&_button]:rounded-[9px] [&_button]:border-0 [&_button]:px-5 [&_button]:text-sm [&_button]:font-bold [&_button]:shadow-none"
    >
      {fields.map((field) => (
        <div key={field.id} data-sr-fieldset="" className="w-full">
          <label
            htmlFor={field.id}
            data-sr-label=""
            data-sr-input-label=""
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {field.label}
          </label>
          <input
            id={field.id}
            name={field.name}
            type={field.type}
            required={field.required}
            placeholder={field.placeholder}
            data-input-with-error="false"
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:outline-hidden flex h-12 w-full rounded-[9px] border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 desk:h-11"
          />
        </div>
      ))}

      <button
        type="submit"
        data-slot="button"
        data-sr-button="default"
        className="inline-flex h-12.5 w-full cursor-pointer items-center justify-center gap-2 rounded-[9px] bg-accent-fill px-5 text-[15px] font-bold whitespace-nowrap text-accent-fill-foreground shadow-xs transition-all hover:bg-accent-fill-hover disabled:pointer-events-none disabled:opacity-50 desk:h-11 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0"
      >
        {submitLabel}
        <span
          aria-hidden
          style={{ backgroundSize: "200% 100%" }}
          className="animate-shine absolute inset-0 overflow-hidden rounded-[inherit] bg-[linear-gradient(120deg,rgba(255,255,255,0)40%,rgba(255,255,255,1)50%,rgba(255,255,255,0)60%)] opacity-10 dark:opacity-20"
        />
      </button>
    </form>
  )
}

function CourseSignupPanelFeatureCard({
  feature,
}: CourseSignupPanelFeatureCardProps) {
  return (
    <Link
      href={feature.href}
      aria-label={`${feature.title}: more info`}
      className="focus-visible:ring-ring group block rounded-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <span className="border-border relative block aspect-video w-full overflow-hidden rounded-[10px] border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={feature.image.src}
          alt={feature.image.alt}
          width={feature.image.width}
          height={feature.image.height}
          sizes={feature.image.sizes ?? "(min-width: 1000px) 40vw, 100vw"}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
        />
      </span>

      <span className="text-muted-foreground group-hover:text-foreground mt-3.5 inline-flex items-center gap-1.5 text-sm font-medium leading-snug transition-colors">
        {feature.linkLabel}
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
          className="ease-out-quart size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}

function CourseSignupPanelStats({ stats }: CourseSignupPanelStatsProps) {
  return (
    <dl className="flex flex-wrap gap-x-10 gap-y-5">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse">
          <dt className="text-muted-foreground mt-1.5 font-mono text-[11px] leading-[1.35] font-medium uppercase tracking-[0.12em]">
            {stat.label}
          </dt>
          <dd>
            <span className="text-base leading-snug font-medium sm:text-[26px] sm:leading-none sm:tracking-[-0.02em] sm:font-mono">
              {stat.value}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  )
}

export function CourseSignupPanel({
  id,
  eyebrow,
  title,
  description,
  signup,
  feature,
  className,
}: CourseSignupPanelProps) {
  const headingId = id ? `${id}-heading` : undefined

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "border-border @container scroll-mt-24 border-b",
        className,
      )}
    >
      <div className="grid grid-cols-1 items-start gap-y-10 px-4.5 py-12 sm:px-11 md:py-13 @[1000px]:grid-cols-[minmax(32rem,1fr)_minmax(0,0.72fr)] @[1000px]:gap-x-12">
        <div className="min-w-0">
          <p className="text-foreground/70 mb-3 font-mono text-[11px] leading-[1.4] font-medium uppercase tracking-[0.16em] dark:text-foreground/65">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="max-w-[20ch] text-balance text-[2.125rem] font-bold leading-[1.04] tracking-[-0.032em] sm:text-[2.75rem] lg:text-[3.25rem] lg:leading-[1.02] lg:tracking-[-0.036em]"
          >
            {title}
          </h2>
          <p className="text-primary mt-5 max-w-[34ch] text-balance text-[20px] leading-[1.4] font-medium tracking-[-0.018em] sm:text-[22px] lg:text-[24px] lg:tracking-[-0.02em]">
            {description}
          </p>

          <div className="mt-10 max-w-140">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="bg-foreground/10 text-foreground inline-flex w-fit rounded-lg px-1.75 py-1.25 font-mono text-[10px] leading-none font-medium uppercase tracking-widest">
                {signup.statusLabel}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-bold leading-[1.2] tracking-[-0.02em] sm:text-xl">
              {signup.title}
            </h3>
            <p className="text-(--ah-fg-muted) text-sm leading-relaxed">
              {signup.description}
            </p>

            <div className="mt-4">
              <div className="@container w-full min-w-0">
                <CourseSignupPanelForm
                  fields={signup.fields}
                  submitLabel={signup.submitLabel}
                  formAction={signup.formAction}
                  formMethod={signup.formMethod ?? "post"}
                />
              </div>
              <p className="text-(--ah-fg-subtle) mt-2.5 text-[13px] leading-[1.35]">
                {signup.disclaimer}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <CourseSignupPanelFeatureCard feature={feature} />
          <CourseSignupPanelStats stats={feature.stats} />
        </div>
      </div>
    </section>
  )
}
