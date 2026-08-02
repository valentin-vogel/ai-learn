import {
  SiteHeader,
  type SiteHeaderMobileAction,
  type SiteHeaderNavItem,
  type SiteHeaderUtilityItem,
} from "@/components/site-header/SiteHeader"

const primaryNavItems: readonly SiteHeaderNavItem[] = [
  { label: "Start Here", href: "/learn", active: true },
  { label: "Skills", href: "/skills" },
  { label: "Open source", href: "/open-source" },
  { label: "Courses", href: "/courses" },
]

const utilityItems: readonly SiteHeaderUtilityItem[] = [
  { label: "Search", kind: "button" },
  { label: "Newsletter", href: "/newsletter", kind: "link", desktopOnly: true },
  { label: "Log in", href: "/login", kind: "link" },
  {
    label: "Get the free course",
    href: "/skills/subscribe",
    kind: "link",
    desktopOnly: true,
    cta: true,
  },
]

const mobileActions: readonly SiteHeaderMobileAction[] = [
  { ariaLabel: "Search", kind: "search" },
  {
    ariaLabel: "Subscribe to the newsletter",
    kind: "newsletter",
    href: "/newsletter",
  },
  {
    ariaLabel: "Open menu",
    kind: "menu",
    expanded: false,
    controls: "mobile-menu-panel",
  },
]

export function SiteHeaderExample() {
  return (
    <SiteHeader
      brand={{
        href: "/",
        imageSrc: "/valentin-vogel-navigation-avatar@2x.png",
        imageAlt: "",
        imageWidth: 124,
        imageHeight: 124,
        labelPrefix: "AI",
        label: "Hero",
      }}
      primaryNavItems={primaryNavItems}
      utilityItems={utilityItems}
      mobileActions={mobileActions}
    />
  )
}
