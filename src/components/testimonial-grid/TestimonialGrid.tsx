import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type TestimonialGridItem = {
  readonly quote: string
  readonly authorName: string
  readonly authorRole: string
  readonly avatar: {
    readonly src: string
    readonly alt: string
    readonly width: number
    readonly height: number
  }
}

export type TestimonialGridLogo = {
  readonly id: string
  readonly name: string
  readonly height: number
  readonly mark: ReactNode
}

type TestimonialGridProps = {
  readonly ariaLabel: string
  readonly eyebrow: string
  readonly testimonials: readonly TestimonialGridItem[]
  readonly trustedByLabel: string
  readonly logos: readonly TestimonialGridLogo[]
  readonly className?: string
}

type TestimonialCardProps = {
  readonly testimonial: TestimonialGridItem
}

type TrustedLogoListProps = {
  readonly label: string
  readonly logos: readonly TestimonialGridLogo[]
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <li className="bg-background flex flex-col px-6.5 py-7.5">
      <figure className="flex h-full flex-col">
        <blockquote className="text-foreground mb-5 font-serif text-[18px] leading-[1.45] font-normal tracking-[-0.005em] text-pretty sm:text-[20px]">
          <p className="ah-prose-p m-0">{`“${testimonial.quote}”`}</p>
        </blockquote>

        <figcaption className="mt-auto flex items-center gap-2.75">
          {/* Remote demo avatars stay config-free without requiring Next image allowlists. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={testimonial.avatar.src}
            alt={testimonial.avatar.alt}
            width={testimonial.avatar.width}
            height={testimonial.avatar.height}
            loading="lazy"
            decoding="async"
            className="size-8.5 shrink-0 rounded-full object-cover"
          />

          <span className="flex flex-col items-start text-left leading-tight">
            <span className="text-foreground text-[13px] leading-[1.35] font-medium">
              {testimonial.authorName}
            </span>
            <span className="text-[13px] leading-[1.35] text-(--ah-fg-subtle)">
              {testimonial.authorRole}
            </span>
          </span>
        </figcaption>
      </figure>
    </li>
  )
}

function TrustedLogoList({ label, logos }: TrustedLogoListProps) {
  return (
    <section className="mt-6 flex flex-col gap-5 pb-5.5 pt-6.5 sm:flex-row sm:items-center sm:gap-8">
      <p className="text-muted-foreground font-mono text-[11px] leading-[1.4] font-medium tracking-normal sm:max-w-30 sm:flex-none">
        {label}
      </p>

      <ul
        aria-label={label}
        className="text-(--ah-fg-subtle) grid w-full grid-cols-3 place-items-center gap-x-8 gap-y-7 sm:grid-cols-6"
      >
        {logos.map((logo) => (
          <li key={logo.id} className="flex items-center">
            <div
              aria-label={logo.name}
              style={{ height: `${logo.height}px` }}
              className="flex items-center justify-center [&_svg]:h-full [&_svg]:w-auto"
            >
              {logo.mark}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function TestimonialGrid({
  ariaLabel,
  eyebrow,
  testimonials,
  trustedByLabel,
  logos,
  className,
}: TestimonialGridProps) {
  const showTabletSpacer = testimonials.length % 2 === 1

  return (
    <section
      aria-label={ariaLabel}
      className={cn(
        "border-border bg-(--ah-band) border-b px-4.5 pb-8 pt-14 sm:px-11 sm:pb-7.5 sm:pt-16",
        className,
      )}
    >
      <p className="text-muted-foreground mb-8 font-mono text-[11px] leading-[1.4] font-medium tracking-normal">
        {eyebrow}
      </p>

      <ul className="border-border bg-border grid grid-cols-1 gap-px overflow-hidden rounded-lg border sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={`${testimonial.authorName}-${testimonial.authorRole}`}
            testimonial={testimonial}
          />
        ))}

        {showTabletSpacer ? (
          <li
            aria-hidden="true"
            className="bg-background hidden sm:block lg:hidden"
          />
        ) : null}
      </ul>

      <TrustedLogoList label={trustedByLabel} logos={logos} />
    </section>
  )
}
