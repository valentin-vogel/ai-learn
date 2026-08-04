import Link from "next/link"
import { cn } from "@/lib/utils"

const defaultPrimaryNavItems: readonly SiteHeaderNavItem[] = [
  { label: "Start Here", href: "/learn", active: true },
  { label: "Skills", href: "/skills" },
  { label: "Open source", href: "/open-source" },
]

const defaultUtilityItems: readonly SiteHeaderUtilityItem[] = [
  {
    label: "Login",
    href: "/admin",
    kind: "link",
    desktopOnly: true,
  },
  {
    label: "Newsletter",
    href: "/newsletter",
    kind: "link",
    desktopOnly: true,
    cta: true,
  },
]

export type SiteHeaderNavItem = {
  readonly label: string
  readonly href: string
  readonly active?: boolean
}

type DesktopNavItemProps = {
  readonly item: SiteHeaderNavItem
}

type UtilityActionProps = {
  readonly item: SiteHeaderUtilityItem
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
  readonly primaryNavItems?: readonly SiteHeaderNavItem[]
  readonly utilityItems?: readonly SiteHeaderUtilityItem[]
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

export function Header({
  primaryNavItems = defaultPrimaryNavItems,
  utilityItems = defaultUtilityItems,
}: SiteHeaderProps = {}) {
  return (
    <header className="bg-background/90 h-(--nav-height) z-50 sticky top-0 flex w-full items-center gap-5 border-b px-4.5 backdrop-blur-md print:hidden lg:px-11">
      <span className="flex shrink-0 items-center">
        <Link
          tabIndex={-1}
          aria-label="AI Learn home"
          className="group focus-visible:ring-ring flex items-center gap-2.5 rounded-[7px] leading-none transition focus-visible:outline-none focus-visible:ring-2"
          href="/"
        >
          <span className="text-foreground text-[15.5px] font-bold leading-none tracking-[-0.01em]">
            AI Learn
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
    </header>
  )
}
