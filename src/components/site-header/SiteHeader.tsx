import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export type SiteHeaderBrand = {
  readonly href: string
  readonly imageSrc: string
  readonly imageAlt: string
  readonly imageWidth: number
  readonly imageHeight: number
  readonly labelPrefix: string
  readonly label: string
}

export type SiteHeaderNavItem = {
  readonly label: string
  readonly href: string
  readonly active?: boolean
}

export type SiteHeaderUtilityItem = {
  readonly label: string
  readonly href?: string
  readonly kind: "button" | "link"
  readonly desktopOnly?: boolean
  readonly cta?: boolean
}

export type SiteHeaderMobileAction = {
  readonly ariaLabel: string
  readonly kind: "search" | "newsletter" | "menu"
  readonly href?: string
  readonly expanded?: boolean
  readonly controls?: string
}

type SiteHeaderProps = {
  readonly brand: SiteHeaderBrand
  readonly primaryNavItems: readonly SiteHeaderNavItem[]
  readonly utilityItems: readonly SiteHeaderUtilityItem[]
  readonly mobileActions: readonly SiteHeaderMobileAction[]
  readonly className?: string
}

type DesktopNavItemProps = {
  readonly item: SiteHeaderNavItem
}

type UtilityActionProps = {
  readonly item: SiteHeaderUtilityItem
}

type MobileActionProps = {
  readonly action: SiteHeaderMobileAction
}

function DesktopNavItem({ item }: DesktopNavItemProps) {
  return (
    <li className="flex items-center">
      <Link
        href={item.href}
        className="group/nav-item focus-visible:ring-ring text-(--ah-fg-muted) relative flex items-center rounded-[7px] focus-visible:outline-none focus-visible:ring-2"
      >
        <span
          data-active={item.active ? "" : undefined}
          className={cn(
            "inline-flex items-center rounded-[7px] px-3 py-1.75 text-[13.5px] leading-none transition-colors duration-200 group-hover/nav-item:bg-foreground/6 group-hover/nav-item:text-foreground group-data-[state=open]/nav-item:bg-foreground/6 group-data-[state=open]/nav-item:text-foreground data-active:bg-foreground/10 data-active:text-foreground",
            item.active && "font-medium",
          )}
        >
          <span className="wrap-break-word whitespace-normal text-balance">
            {item.label}
          </span>
        </span>
      </Link>
    </li>
  )
}

function UtilityAction({ item }: UtilityActionProps) {
  const className = cn(
    "text-[color:var(--ah-fg-muted)] hover:text-foreground focus-visible:ring-ring inline-flex items-center rounded-[6px] text-[13px] leading-none transition-colors focus-visible:outline-none focus-visible:ring-2",
    item.cta &&
      "bg-accent-fill text-accent-fill-foreground hover:bg-accent-fill-hover min-w-[152px] justify-center rounded-[8px] px-3.5 py-2 font-bold",
  )

  if (item.kind === "button") {
    return (
      <li
        className={cn(
          "flex items-center",
          item.desktopOnly && "hidden lg:flex",
        )}
      >
        <button type="button" className={className}>
          {item.label}
        </button>
      </li>
    )
  }

  return (
    <li
      className={cn("flex items-center", item.desktopOnly && "hidden lg:flex")}
    >
      <Link href={item.href ?? "#"} className={className}>
        {item.label}
      </Link>
    </li>
  )
}

function SearchIcon() {
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
      className="size-5"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function NewsletterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 8h8m-8 4h8m-8 4h4m8-8h1c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56v8a2 2 0 1 1-4 0V8Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 3H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v6c0 2.828 0 4.243.879 5.121C3.757 21 5.172 21 8 21h12a2 2 0 0 1-2-2V9c0-2.828 0-4.243-.879-5.121C16.243 3 14.828 3 12 3Z"
      />
    </svg>
  )
}

function MenuIcon() {
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
      className="size-5"
      aria-hidden="true"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function MobileAction({ action }: MobileActionProps) {
  let icon: React.ReactNode
  if (action.kind === "search") {
    icon = <SearchIcon />
  } else if (action.kind === "newsletter") {
    icon = <NewsletterIcon />
  } else {
    icon = <MenuIcon />
  }

  const className =
    "text-foreground opacity-70 hover:bg-foreground/6 hover:opacity-100 focus-visible:ring-ring flex size-9 items-center justify-center rounded-[7px] transition focus-visible:outline-none focus-visible:ring-2 dark:opacity-60 dark:hover:opacity-100"

  if (action.href) {
    return (
      <Link
        aria-label={action.ariaLabel}
        href={action.href}
        className={className}
      >
        {icon}
      </Link>
    )
  }

  return (
    <button
      className={className}
      type="button"
      aria-label={action.ariaLabel}
      aria-expanded={action.expanded}
      aria-controls={action.controls}
    >
      {icon}
    </button>
  )
}

export function SiteHeader({
  brand,
  primaryNavItems,
  utilityItems,
  mobileActions,
  className,
}: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "bg-background/90 h-(--nav-height) z-50 sticky top-0 flex w-full items-center gap-5 border-b px-4.5 backdrop-blur-md print:hidden lg:px-11",
        className,
      )}
    >
      <span className="flex shrink-0 items-center">
        <Link
          tabIndex={-1}
          aria-label="AI Hero home"
          className="group focus-visible:ring-ring flex items-center gap-2.5 rounded-[7px] leading-none transition focus-visible:outline-none focus-visible:ring-2"
          href={brand.href}
        >
          <Image
            alt={brand.imageAlt}
            width={brand.imageWidth}
            height={brand.imageHeight}
            className="h-(--nav-height) w-auto shrink-0 object-contain object-bottom"
            src={brand.imageSrc}
          />
          <span className="text-foreground text-[15.5px] font-bold leading-none tracking-[-0.01em]">
            <span className="font-mono">{brand.labelPrefix}</span>
            {brand.label}
          </span>
        </Link>
      </span>

      <nav
        className="hidden items-center lg:flex"
        aria-label="Primary navigation"
      >
        <ul className="flex items-center gap-0.5">
          {primaryNavItems.map((item) => (
            <DesktopNavItem key={item.href} item={item} />
          ))}
        </ul>
      </nav>

      <nav
        className="ml-auto hidden items-center lg:flex"
        aria-label="User navigation"
      >
        <ul className="flex items-center gap-4.5">
          {utilityItems.map((item) => (
            <UtilityAction key={item.label + item.href} item={item} />
          ))}
        </ul>
      </nav>

      <div className="ml-auto flex items-center gap-0.5 lg:hidden">
        {mobileActions.map((action) => (
          <MobileAction key={action.ariaLabel + action.kind} action={action} />
        ))}
      </div>
    </header>
  )
}
