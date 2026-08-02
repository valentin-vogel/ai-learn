import { cn } from "@/lib/utils"

export type NewsletterSignupField = {
  readonly id: string
  readonly label: string
  readonly name: string
  readonly type?: string
  readonly placeholder: string
  readonly required?: boolean
}

export type NewsletterSignupSectionProps = {
  readonly title: string
  readonly description: string
  readonly fields: readonly NewsletterSignupField[]
  readonly submitLabel: string
  readonly footerNote: string
  readonly className?: string
}

type NewsletterFieldInputProps = {
  readonly field: NewsletterSignupField
}

function NewsletterFieldInput({ field }: NewsletterFieldInputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={field.id}
        className="mb-2 block text-sm font-medium leading-none text-foreground"
      >
        {field.label}
      </label>
      <input
        id={field.id}
        name={field.name}
        type={field.type ?? "text"}
        placeholder={field.placeholder}
        required={field.required}
        className="flex h-12 w-full rounded-[9px] border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-(--ah-fg-faint) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
    </div>
  )
}

export function NewsletterSignupSection({
  title,
  description,
  fields,
  submitLabel,
  footerNote,
  className,
}: NewsletterSignupSectionProps) {
  return (
    <section
      aria-label="Newsletter sign-up"
      className={cn("flex w-full flex-col items-center px-5", className)}
    >
      <div className="w-full max-w-180 rounded-lg border border-border bg-(--ah-band) px-6 py-6 sm:px-8 sm:py-7.5">
        <h1 className="text-[1.3125rem] font-bold leading-[1.15] tracking-[-0.02em] text-balance font-sans text-foreground sm:text-[1.5rem] sm:tracking-[-0.022em]">
          {title}
        </h1>
        <p className="mt-2 max-w-[56ch] text-sm leading-relaxed text-pretty text-(--ah-fg-muted)">
          {description}
        </p>

        <div className="not-prose mt-5">
          <form className="grid w-full grid-cols-1 gap-2.5 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)_auto]">
            {fields.map((field) => (
              <NewsletterFieldInput key={field.id} field={field} />
            ))}
            <button
              type="submit"
              className="inline-flex h-12.5 items-center justify-center rounded-[9px] border-0 bg-accent-fill px-4.5 text-sm font-bold text-accent-fill-foreground transition hover:bg-accent-fill-hover md:h-11"
            >
              {submitLabel}
            </button>
          </form>

          <p className="mt-3 font-mono text-xs font-medium text-(--ah-fg-faint)">
            {footerNote}
          </p>
        </div>
      </div>
    </section>
  )
}
