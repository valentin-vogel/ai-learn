import Image from "next/image"

import { cn } from "@/lib/utils"

type ProfileLeadImage = {
  readonly src: string
  readonly alt: string
  readonly width: number
  readonly height: number
  readonly sizes?: string
}

type ProfileLeadField = {
  readonly id: string
  readonly label: string
  readonly name: string
  readonly type: "text" | "email"
  readonly placeholder: string
  readonly required?: boolean
}

type ProfileLeadSignupCard = {
  readonly title: string
  readonly description: string
  readonly submitLabel: string
  readonly disclaimer: string
  readonly fields: readonly ProfileLeadField[]
  readonly formAction?: string
  readonly formMethod?: "get" | "post"
}

type ProfileLeadSectionProps = {
  readonly title: string
  readonly paragraphs: readonly string[]
  readonly image: ProfileLeadImage
  readonly signup: ProfileLeadSignupCard
  readonly className?: string
}

type ProfileLeadCopyProps = {
  readonly paragraphs: readonly string[]
}

type ProfileLeadFormProps = {
  readonly fields: readonly ProfileLeadField[]
  readonly submitLabel: string
  readonly formAction?: string
  readonly formMethod: "get" | "post"
}

function ProfileLeadCopy({ paragraphs }: ProfileLeadCopyProps) {
  return (
    <div className="text-[16.5px] leading-[1.68] sm:text-[17.5px] flex max-w-[58ch] flex-col gap-3.5 text-pretty text-(--ah-fg-body) [&>p]:m-0! [&>p:last-child]:text-foreground [&>p:last-child]:font-medium">
      {paragraphs.map((paragraph, index) => (
        <p key={paragraph.slice(0, 24) + "-" + index} className="ah-prose-p">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

function ProfileLeadForm({
  fields,
  submitLabel,
  formAction,
  formMethod,
}: ProfileLeadFormProps) {
  return (
    <form
      action={formAction}
      method={formMethod}
      data-sr-convertkit-subscribe-form=""
      className="[&_button]:bg-accent-fill [&_button]:text-accent-fill-foreground [&_button]:hover:bg-accent-fill-hover [&_input]:border-border [&_input]:bg-background [&_input]:text-foreground [&_input]:placeholder:text-(--ah-fg-faint) grid w-full grid-cols-1 gap-2.25 desk:grid-cols-[minmax(0,130px)_minmax(0,1fr)_auto] [&_button]:col-span-1 [&_button]:h-12.5 desk:[&_button]:h-[46px] [&_button]:rounded-[9px] [&_button]:border-0 [&_button]:px-4.5 [&_button]:text-sm [&_button]:font-bold [&_input]:h-12 desk:[&_input]:h-[46px] [&_input]:min-w-0 [&_input]:rounded-[9px] [&_input]:border [&_input]:px-3.5 [&_input]:text-sm [&_label]:hidden"
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
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:outline-hidden flex w-full border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-12 rounded-[9px] desk:h-11"
          />
        </div>
      ))}

      <button
        type="submit"
        data-slot="button"
        data-sr-button="default"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs has-[>svg]:px-4 bg-accent-fill text-accent-fill-foreground hover:bg-accent-fill-hover relative h-12.5 cursor-pointer rounded-[9px] px-5 text-[15px] font-bold desk:h-11"
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

export function ProfileLeadSection({
  title,
  paragraphs,
  image,
  signup,
  className,
}: ProfileLeadSectionProps) {
  return (
    <section className={cn("border-border border-b", className)}>
      <div className="grid w-full grid-cols-1 items-center lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="bg-muted/30 pointer-events-none relative flex w-full select-none items-end justify-center overflow-hidden px-8 pt-8 lg:min-h-105 lg:px-0 lg:pt-0">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={image.sizes ?? "(min-width: 768px) 400px, 70vw"}
            className="relative z-20 h-auto w-full max-w-95 mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]"
          />
        </div>

        <div className="px-4.5 pb-14 pt-8 sm:px-11 lg:py-16">
          <div className="flex flex-col gap-4.5">
            <h2 className="text-[1.625rem] font-bold leading-[1.1] tracking-[-0.026em] sm:text-[2rem] lg:text-[2.375rem] lg:leading-[1.05] lg:tracking-[-0.03em] max-w-[54ch] font-sans">
              {title}
            </h2>
            <ProfileLeadCopy paragraphs={paragraphs} />
          </div>

          <div className="mt-8.5 empty:mt-0">
            <section className="border-border rounded-lg border bg-(--ah-band) px-6 py-6 sm:px-7 sm:py-6.5">
              <h3 className="text-[1.3125rem] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[1.5rem] sm:tracking-[-0.022em] mb-1.5 text-balance font-sans">
                {signup.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5 max-w-[52ch] text-pretty text-(--ah-fg-muted)">
                {signup.description}
              </p>

              <div className="flex w-full flex-col items-start gap-0">
                <ProfileLeadForm
                  fields={signup.fields}
                  submitLabel={signup.submitLabel}
                  formAction={signup.formAction}
                  formMethod={signup.formMethod ?? "post"}
                />
                <p className="inline-flex items-center justify-center mt-3 gap-0 font-mono text-[11.5px] leading-[1.4] text-(--ah-fg-subtle) opacity-100 [&_svg]:hidden">
                  <span>{signup.disclaimer}</span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
