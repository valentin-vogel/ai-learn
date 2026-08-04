import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type IconName =
  | "copy"
  | "share"
  | "arrowRight"
  | "menu"
  | "chevronRight"
  | "x"
  | "bluesky"
  | "linkedin"

export type ArticlePageTwoAuthor = {
  readonly name: string
  readonly avatarSrc: string
  readonly avatarAlt?: string
}

export type ArticlePageTwoAction = {
  readonly id: string
  readonly label: string
  readonly icon?: IconName
  readonly href?: string
}

export type ArticlePageTwoTocItem = {
  readonly id: string
  readonly label: string
  readonly href: string
  readonly current?: boolean
  readonly withArrow?: boolean
}

export type ArticlePageTwoShareItem = {
  readonly id: string
  readonly label: string
  readonly icon: "x" | "bluesky" | "linkedin" | "copy"
  readonly href?: string
}

export type ArticlePageTwoProps = {
  readonly progressLabel: string
  readonly meta: string
  readonly title: string
  readonly description: string
  readonly author: ArticlePageTwoAuthor
  readonly primaryAction: ArticlePageTwoAction
  readonly secondaryActions: readonly ArticlePageTwoAction[]
  readonly mobileTocLabel: string
  readonly tocTitle: string
  readonly tocItems: readonly ArticlePageTwoTocItem[]
  readonly content: ReactNode
  readonly shareTitle: string
  readonly shareItems: readonly ArticlePageTwoShareItem[]
  readonly previousLabel: string
  readonly previousHref: string
  readonly previousTitle: string
  readonly nextLabel: string
  readonly nextHref: string
  readonly nextTitle: string
  readonly loginHref: string
  readonly className?: string
}

type ActionButtonProps = {
  readonly action: ArticlePageTwoAction
}

type ShareLinkProps = {
  readonly item: ArticlePageTwoShareItem
}

function Icon({
  name,
  className,
}: {
  readonly name: IconName
  readonly className?: string
}) {
  if (name === "copy") {
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
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
    )
  }

  if (name === "share") {
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
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
      </svg>
    )
  }

  if (name === "menu") {
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
        <line x1="21" x2="3" y1="6" y2="6" />
        <line x1="15" x2="3" y1="12" y2="12" />
        <line x1="17" x2="3" y1="18" y2="18" />
      </svg>
    )
  }

  if (name === "chevronRight") {
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
        <path d="m9 18 6-6-6-6" />
      </svg>
    )
  }

  if (name === "arrowRight") {
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

  if (name === "x") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 16 16"
        fill="none"
        className={className}
      >
        <path
          d="M9.52373 6.77569L15.4811 0H14.0699L8.89493 5.88203L4.7648 0H0L6.24693 8.89552L0 16H1.4112L6.87253 9.78704L11.2352 16H16M1.92053 1.04127H4.08853L14.0688 15.0099H11.9003"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (name === "bluesky") {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 64 57"
        fill="none"
        className={className}
      >
        <path
          fill="currentColor"
          d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805ZM50.127 3.805C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745Z"
        />
      </svg>
    )
  }

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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function ActionButton({ action }: ActionButtonProps) {
  const className =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[9px] border px-4 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground"

  const content = (
    <>
      {action.icon ? <Icon name={action.icon} className="size-4" /> : null}
      <span>{action.label}</span>
    </>
  )

  if (action.href) {
    return (
      <Link href={action.href} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className={className}>
      {content}
    </button>
  )
}

function TocList({
  items,
}: {
  readonly items: readonly ArticlePageTwoTocItem[]
}) {
  return (
    <ul className="flex flex-col">
      {items.map((item) => (
        <li key={item.id} className="flex">
          <a
            className={cn(
              "focus-visible:ring-ring flex w-full items-center gap-1.5 border-l py-1.5 pl-3.25 text-[13px] leading-[1.4] transition-colors wrap-anywhere hover:text-foreground focus-visible:outline-none focus-visible:ring-2",
              item.current
                ? "border-l-accent-fill text-primary"
                : "text-(--ah-fg-subtle)",
            )}
            href={item.href}
            aria-current={item.current ? "location" : undefined}
          >
            <span className="min-w-0">{item.label}</span>
            {item.withArrow ? (
              <Icon
                name="arrowRight"
                className="mt-px size-3 shrink-0 opacity-50"
              />
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  )
}

function ShareLink({ item }: ShareLinkProps) {
  const className =
    "focus-visible:ring-ring flex size-8 items-center justify-center rounded-sm border text-(--ah-fg-muted) transition-colors hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2"

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        title={item.label}
        className={className}
      >
        <span className="sr-only">{item.label}</span>
        <Icon name={item.icon} className="size-4" />
      </a>
    )
  }

  return (
    <button type="button" title={item.label} className={className}>
      <span className="sr-only">{item.label}</span>
      <Icon name={item.icon} className="size-4" />
    </button>
  )
}

export function ArticlePageTwo({
  progressLabel,
  meta,
  title,
  description,
  author,
  primaryAction,
  secondaryActions,
  mobileTocLabel,
  tocTitle,
  tocItems,
  content,
  shareTitle,
  shareItems,
  previousLabel,
  previousHref,
  previousTitle,
  nextLabel,
  nextHref,
  nextTitle,
  loginHref,
  className,
}: ArticlePageTwoProps) {
  return (
    <article
      className={cn(
        "[&>*+*]:border-border relative flex h-full flex-col [&>*+*]:-mt-px [&>*+*]:border-t",
        className,
      )}
    >
      <div className="bg-card dark:bg-transparent">
        <div className="relative flex flex-col justify-center px-4.5 pb-10 pt-10 sm:px-11 md:pb-12 md:pt-12">
          <div className="mb-4 flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span className="inline-flex w-fit rounded-lg border border-border px-1.75 py-1.25 font-mono text-[10px] font-medium uppercase leading-none tracking-widest text-foreground">
              {progressLabel}
            </span>
            <span className="font-mono text-[12px] font-normal leading-[1.4] text-muted-foreground">
              {meta}
            </span>
          </div>

          <h1 className="text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.03em] sm:text-[2.5rem] lg:text-[2.75rem] lg:leading-[1.04] lg:tracking-[-0.034em]">
            {title}
          </h1>

          <p className="mt-4 max-w-[48ch] text-pretty text-[17px] font-normal leading-[1.55] text-(--ah-fg-muted) sm:text-[18.5px]">
            {description}
          </p>

          <div className="mt-7 flex w-full flex-wrap items-center justify-between gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground [&_img]:w-8">
                <img
                  src={author.avatarSrc}
                  alt={author.avatarAlt ?? author.name}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-foreground">{author.name}</span>
                </div>
              </div>
              <ActionButton action={primaryAction} />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {secondaryActions.map((action) => (
                <ActionButton key={action.id} action={action} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <details className="group md:hidden">
        <summary className="flex cursor-pointer list-none items-center gap-2.5 px-8 py-3.5 [&::-webkit-details-marker]:hidden">
          <Icon name="menu" className="size-4 shrink-0 opacity-60" />
          <span className="text-sm font-medium leading-snug">
            {mobileTocLabel}
          </span>
          <Icon
            name="chevronRight"
            className="group-[[open]]:rotate-90 ml-auto size-4 shrink-0 opacity-60 transition-transform motion-reduce:transition-none"
          />
        </summary>

        <nav aria-label={tocTitle} className="px-8 pb-5">
          <TocList items={tocItems} />
        </nav>
      </details>

      <div className="md:grid md:grid-cols-[minmax(0,1fr)_232px]">
        <div className="px-4.5 pb-16 pt-10 sm:px-11 md:pb-20 md:pt-14">
          <article className="prose prose-hr:border-border dark:prose-invert prose-a:text-primary sm:prose-lg lg:prose-lg mx-auto max-w-[70ch] [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
            {content}
          </article>
        </div>

        <aside className="hidden border-l md:block">
          <div className="sticky top-(--nav-height) flex max-h-[calc(100vh-var(--nav-height))] flex-col gap-6 overflow-auto px-5 pb-8 pt-5">
            <nav aria-label={tocTitle}>
              <p className="mb-3 font-mono text-[11px] font-medium leading-[1.4] tracking-normal text-muted-foreground">
                {tocTitle}
              </p>
              <TocList items={tocItems} />
            </nav>

            <div className="border-t pt-5">
              <p className="mb-2.5 font-mono text-[11px] font-medium leading-[1.4] tracking-normal text-muted-foreground">
                {shareTitle}
              </p>
              <div className="flex gap-2">
                {shareItems.map((item) => (
                  <ShareLink key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="flex w-full flex-col gap-2.5 px-4.5 py-8 sm:px-11 md:hidden">
        <p className="font-mono text-[11px] font-medium leading-[1.4] tracking-normal text-muted-foreground">
          {shareTitle}
        </p>
        <div className="flex gap-2">
          {shareItems.map((item) => (
            <ShareLink key={item.id} item={item} />
          ))}
        </div>
      </div>

      <nav
        id="up-next"
        aria-label="Lesson navigation"
        className="scroll-mt-(--nav-height) border-border bg-border grid grid-cols-1 gap-px md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
      >
        <Link
          className="bg-background focus-visible:ring-ring group flex flex-col justify-center px-4.5 py-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset sm:px-11"
          href={previousHref}
        >
          <span className="mb-2.5 font-mono text-[11px] font-medium leading-[1.4] tracking-normal text-muted-foreground">
            {previousLabel}
          </span>
          <span className="text-pretty text-base font-medium leading-snug text-(--ah-fg-muted) transition-colors group-hover:text-foreground">
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
              className="ease-out-quart mr-1.5 inline-block size-4 shrink-0 align-[-0.15em] transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
              aria-hidden="true"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            {previousTitle}
          </span>
        </Link>

        <Link
          className="focus-visible:ring-ring group flex items-center gap-5 bg-(--ah-band) px-4.5 py-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset sm:px-11"
          href={nextHref}
        >
          <span className="min-w-0">
            <span className="mb-2.5 block font-mono text-[11px] font-medium leading-[1.4] tracking-normal text-primary">
              {nextLabel}
            </span>
            <span className="block text-pretty text-[1.3125rem] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[1.5rem] sm:tracking-[-0.022em]">
              {nextTitle}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="text-background dark:bg-accent-fill dark:text-accent-fill-foreground bg-foreground ease-out-quart ml-auto flex size-11 flex-none items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
          >
            <Icon name="arrowRight" className="size-5" />
          </span>
        </Link>
      </nav>

      <div className="dark:text-muted-foreground bg-background flex w-full items-center justify-center gap-1 px-5 py-4 text-center text-sm sm:text-base">
        <Link
          target="_blank"
          className="hover:text-foreground inline-flex items-center gap-1.5 text-center underline"
          href={loginHref}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M7.5 17c2.332-2.442 6.643-2.557 9 0m-2.005-7.5c0 1.38-1.12 2.5-2.503 2.5a2.502 2.502 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.502 2.502 0 0 1 2.503 2.5Z"
            />
          </svg>
          Log in
        </Link>
        <span>to save progress.</span>
      </div>
    </article>
  )
}
