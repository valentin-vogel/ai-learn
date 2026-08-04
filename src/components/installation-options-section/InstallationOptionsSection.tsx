import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type InstallationOptionsActionLink = {
  readonly label: string
  readonly href: string
}

export type InstallationOptionsRepoCard = {
  readonly ariaLabel: string
  readonly starsLabel: string
  readonly repositoryLabel: string
  readonly ctaLabel: string
  readonly href: string
}

export type InstallationOptionsCommandRowLink = {
  readonly label: string
  readonly href: string
}

export type InstallationOptionsCommandRow = {
  readonly leadingText: string
  readonly emphasizedText?: string
  readonly trailingLink?: InstallationOptionsCommandRowLink
}

export type InstallationOptionsCommandCard = {
  readonly id: string
  readonly title: string
  readonly description?: string
  readonly command: string
  readonly copyAriaLabel: string
  readonly icon: "cycle" | "claude"
  readonly footerRow: InstallationOptionsCommandRow
}

type InstallationOptionsSectionProps = {
  readonly sectionId?: string
  readonly headingId?: string
  readonly heading: string
  readonly description: string
  readonly repoCard: InstallationOptionsRepoCard
  readonly optionsAriaLabel: string
  readonly commandCards: readonly InstallationOptionsCommandCard[]
  readonly mobilePluginLink?: InstallationOptionsActionLink
  readonly compatibilityTitle: string
  readonly compatibilityLine: string
  readonly className?: string
}

type IconFrameProps = {
  readonly children: ReactNode
}

type CommandCardProps = {
  readonly card: InstallationOptionsCommandCard
}

type ExternalAnchorProps = {
  readonly href: string
  readonly label: string
  readonly className?: string
}

function StarIcon() {
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
      className="text-primary size-3.5 shrink-0 fill-current"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function CopyIcon() {
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
      className="ease-out-quart absolute size-3.5 transition-all duration-300 motion-reduce:transition-none scale-100 opacity-100"
      aria-hidden="true"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

function CheckIcon() {
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
      className="ease-out-quart absolute size-3.5 transition-all duration-300 motion-reduce:transition-none scale-50 opacity-0"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ExternalIcon() {
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
      className="size-3"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

function CycleIcon() {
  return (
    <span
      className="ah-agent-cycle relative block size-3.75"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="absolute inset-0 size-full"
      >
        <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
      </svg>
    </span>
  )
}

function ClaudeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-3.75"
      aria-hidden="true"
    >
      <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
    </svg>
  )
}

function IconFrame({ children }: IconFrameProps) {
  return (
    <span
      aria-hidden="true"
      className="border-border inline-flex size-7 flex-none items-center justify-center rounded-[6px] border text-(--ah-fg-body)"
    >
      {children}
    </span>
  )
}

function ExternalAnchor({ href, label, className }: ExternalAnchorProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {label}
      <ExternalIcon />
    </a>
  )
}

function CommandCard({ card }: CommandCardProps) {
  const headerIcon = card.icon === "cycle" ? <CycleIcon /> : <ClaudeIcon />

  return (
    <div className="flex min-w-0 flex-col">
      <div className="mb-2.5 flex items-center gap-2.5">
        <IconFrame>{headerIcon}</IconFrame>
        <p className="text-base font-bold leading-[1.3] tracking-[-0.018em] text-foreground">
          {card.title}
        </p>
      </div>

      {card.description ? (
        <p className="text-sm leading-relaxed mb-3.5 hidden text-(--ah-fg-muted) @[940px]:block">
          {card.description}
        </p>
      ) : null}

      <div className="border-border bg-muted focus-within:ring-ring dark:bg-card flex w-full flex-wrap items-center gap-x-3 gap-y-2.5 rounded-[9px] border px-3.5 py-3 focus-within:ring-2 focus-within:ring-offset-0">
        <span
          aria-hidden="true"
          className="font-mono text-xs font-medium flex-none select-none text-(--ah-fg-faint)"
        >
          $
        </span>

        <code
          aria-label={`${card.title} install command`}
          className="font-mono font-medium text-foreground/90 min-w-0 flex-1 select-all whitespace-nowrap bg-transparent text-[11.5px] sm:text-xs"
        >
          {card.command}
        </code>

        <button
          type="button"
          aria-label={card.copyAriaLabel}
          className="focus-visible:ring-ring ease-out-quart flex h-7.5 w-full flex-none items-center justify-center rounded-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none min-[380px]:ml-auto min-[380px]:w-7.5 bg-accent-fill/[0.14] text-primary hover:bg-accent-fill/25"
        >
          <span aria-live="polite" aria-atomic="true" className="sr-only" />
          <span className="relative inline-flex size-3.5 items-center justify-center">
            <CopyIcon />
            <CheckIcon />
          </span>
        </button>
      </div>

      <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <span className="font-mono text-[12px] font-normal leading-[1.4] tracking-normal text-muted-foreground">
          {card.footerRow.leadingText}
          {card.footerRow.emphasizedText ? (
            <span className="text-(--ah-fg-body)">
              {" "}
              {card.footerRow.emphasizedText}
            </span>
          ) : null}
        </span>

        {card.footerRow.trailingLink ? (
          <ExternalAnchor
            href={card.footerRow.trailingLink.href}
            label={card.footerRow.trailingLink.label}
            className="text-[13px] leading-[1.35] hover:text-foreground focus-visible:ring-ring ml-auto inline-flex items-center gap-1 text-(--ah-fg-subtle) transition-colors focus-visible:outline-none focus-visible:ring-2"
          />
        ) : null}
      </div>
    </div>
  )
}

export function InstallationOptionsSection({
  sectionId = "install",
  headingId = "skills-install-heading",
  heading,
  description,
  repoCard,
  optionsAriaLabel,
  commandCards,
  mobilePluginLink,
  compatibilityTitle,
  compatibilityLine,
  className,
}: InstallationOptionsSectionProps) {
  const [primaryCard, secondaryCard] = commandCards

  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      className={cn(
        "border-border scroll-mt-(--nav-height) border-b bg-(--ah-band)",
        className,
      )}
    >
      <div className="@container px-4.5 pb-12.5 pt-12 sm:px-11">
        <div className="@[1080px]:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] @[1080px]:gap-x-10 grid grid-cols-1 gap-y-10">
          <div className="flex min-w-0 flex-col items-start">
            <h2
              id={headingId}
              className="text-2xl font-bold leading-[1.08] tracking-[-0.028em] sm:text-[1.75rem] lg:text-[2.125rem] lg:leading-[1.06] lg:tracking-[-0.03em] mb-3 text-balance"
            >
              {heading}
            </h2>

            <p className="text-[16.5px] leading-[1.68] sm:text-[17.5px] mb-7 max-w-[52ch] text-balance text-(--ah-fg-muted)">
              {description}
            </p>

            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label={repoCard.ariaLabel}
              className="border-input bg-background hover:border-foreground/25 focus-visible:ring-ring flex w-full max-w-130 items-center gap-2.5 rounded-[9px] border px-4 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              href={repoCard.href}
            >
              <StarIcon />
              <span className="font-mono text-[13px] leading-[1.35] font-medium">
                {repoCard.starsLabel}
              </span>
              <span className="font-mono text-[13px] leading-[1.35] min-w-0 truncate text-(--ah-fg-subtle)">
                {repoCard.repositoryLabel}
              </span>
              <span className="text-[13px] leading-[1.35] ml-auto whitespace-nowrap text-(--ah-fg-subtle)">
                {repoCard.ctaLabel}
              </span>
            </a>
          </div>

          <section
            aria-label={optionsAriaLabel}
            className="flex flex-col border-border min-w-0 border-t pt-10 @[1080px]:border-t-0 @[1080px]:pt-0"
          >
            {primaryCard ? <CommandCard card={primaryCard} /> : null}

            {secondaryCard ? (
              <div className="border-border mt-6.5 hidden border-t pt-6.5 @[560px]:block">
                <CommandCard card={secondaryCard} />
              </div>
            ) : null}

            {mobilePluginLink ? (
              <ExternalAnchor
                href={mobilePluginLink.href}
                label={mobilePluginLink.label}
                className="font-mono text-[12px] font-normal leading-[1.4] tracking-normal text-muted-foreground border-border hover:text-foreground focus-visible:ring-ring mt-5.5 inline-flex items-center gap-1.5 border-t pt-5.5 transition-colors focus-visible:outline-none focus-visible:ring-2 @[560px]:hidden"
              />
            ) : null}

            <div className="border-border mt-6.5 border-t pt-5">
              <p className="text-base font-bold leading-[1.3] tracking-[-0.018em] text-foreground">
                {compatibilityTitle}
              </p>
              <p className="font-mono text-[12px] font-normal leading-[1.4] tracking-normal text-muted-foreground mt-1.5">
                {compatibilityLine}
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
