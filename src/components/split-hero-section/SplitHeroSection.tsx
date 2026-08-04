import Image from "next/image"
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

type HeroVisual = {
  readonly src: string
  readonly alt: string
  readonly width: number
  readonly height: number
  readonly sizes?: string
}

type SplitHeroSectionProps = {
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly primaryAction: HeroAction
  readonly secondaryAction: HeroAction
  readonly stats: readonly HeroStat[]
  readonly visual: HeroVisual
  readonly className?: string
}

type HeroActionLinkProps = {
  readonly action: HeroAction
  readonly variant: "primary" | "secondary"
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
  if (variant === "primary") {
    return (
      <Link
        href={action.href}
        className="bg-accent-fill text-accent-fill-foreground hover:bg-accent-fill-hover focus-visible:ring-ring inline-flex h-11.5 w-fit items-center rounded-[9px] px-5 text-[15px] font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        {action.label}
      </Link>
    )
  }

  return (
    <Link
      href={action.href}
      className="font-medium border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-secondary focus-visible:ring-ring group inline-flex h-11.5 w-fit items-center gap-2 rounded-[9px] border px-5 text-[15px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      {action.label}
      <ArrowRightIcon />
    </Link>
  )
}

type HeroStatItemProps = {
  readonly stat: HeroStat
}

function HeroStatItem({ stat }: HeroStatItemProps) {
  return (
    <div className="flex min-w-0 flex-col sm:flex-1 sm:basis-0">
      <dt className="sr-only">{stat.label}</dt>
      <dd className="font-mono text-2xl font-medium leading-none tracking-[-0.02em] sm:text-[26px]">
        {stat.value}
      </dd>
      <p
        className="font-mono text-[11px] font-medium uppercase leading-[1.35] tracking-[0.12em] text-muted-foreground mt-1.5"
        aria-hidden="true"
      >
        {stat.label}
      </p>
    </div>
  )
}

export function SplitHeroSection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats,
  visual,
  className,
}: SplitHeroSectionProps) {
  return (
    <header
      id="hero"
      className={cn(
        "border-border relative grid w-full grid-cols-1 items-stretch border-b md:min-h-130 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none overflow-hidden sm:hidden"
      >
        <canvas
          className="block h-full w-full absolute inset-0"
          width={1}
          height={1}
          tabIndex={-1}
        />
        <div className="bg-linear-to-b from-transparent via-background/70 to-background absolute inset-0" />
      </div>

      <div className="relative z-10 flex flex-col justify-center px-4.5 pb-14 pt-35 sm:px-11 sm:pb-18 sm:pt-22">
        <div>
          <p className="font-mono text-[11px] font-medium uppercase leading-[1.4] tracking-[0.16em] text-foreground/70 dark:text-foreground/65 mb-3">
            {eyebrow}
          </p>
          <h1 className="text-[2.75rem] font-bold leading-none tracking-[-0.04em] sm:text-[3.5rem] lg:text-[4.75rem] lg:leading-[0.96] lg:tracking-[-0.042em] mb-5.5 text-balance font-sans">
            {title}
          </h1>
          <p className="text-[17px] font-normal leading-[1.45] sm:text-[19px] lg:text-[21px] max-w-[34ch] text-pretty opacity-70">
            {description}
          </p>
        </div>

        <div className="mt-8.5 flex flex-wrap items-center gap-2.5">
          <HeroActionLink action={primaryAction} variant="primary" />
          <HeroActionLink action={secondaryAction} variant="secondary" />
        </div>

        <dl className="border-border mt-11 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t pt-6.5 sm:flex sm:gap-x-8.5">
          {stats.map((stat) => (
            <HeroStatItem key={stat.id} stat={stat} />
          ))}
        </dl>
      </div>

      <div className="relative w-full items-center justify-center hidden min-h-80 sm:flex">
        <div className="pointer-events-none absolute inset-0 flex select-none items-end justify-center overflow-hidden">
          <div className="bg-linear-to-l to-background absolute inset-0 z-10 h-full w-full from-transparent via-transparent" />
          <canvas
            className="block h-full w-full absolute inset-0"
            width={683}
            height={717}
            tabIndex={-1}
          />
          <Image
            src={visual.src}
            alt={visual.alt}
            width={visual.width}
            height={visual.height}
            sizes={visual.sizes ?? "(min-width: 768px) 50vw, 100vw"}
            className="relative z-20 h-full max-h-140 w-auto translate-y-px object-contain object-bottom"
          />
        </div>
      </div>
    </header>
  )
}
