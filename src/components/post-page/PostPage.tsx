import Link from "next/link"
import type { CSSProperties, ReactNode } from "react"

import { cn } from "@/lib/utils"

type IconName =
  | "sidebarExpand"
  | "map"
  | "skills"
  | "openSource"
  | "book"
  | "roadmap"
  | "dictionary"
  | "posts"
  | "topics"
  | "search"
  | "chevronsUpDown"
  | "listView"
  | "graphView"
  | "rss"
  | "arrowRight"
  | "sun"
  | "moon"

export type PostPageSidebarItem = {
  readonly ariaLabel: string
  readonly icon: IconName
  readonly href?: string
  readonly current?: boolean
}

export type PostPageSidebarGroup = {
  readonly label: string
  readonly items: readonly PostPageSidebarItem[]
}

export type PostPageViewMode = {
  readonly ariaLabel: string
  readonly icon: IconName
  readonly active?: boolean
}

export type PostPageFilterControl = {
  readonly label: string
}

export type PostPageCardTag = {
  readonly label: string
}

export type PostPageCard = {
  readonly href: string
  readonly kind: string
  readonly date: string
  readonly title: string
  readonly description?: string
  readonly imageAlt: string
  readonly imageSrc: string
  readonly tags?: readonly PostPageCardTag[]
  readonly featured?: boolean
}

export type PostPageFooterLink = {
  readonly label: string
  readonly href: string
  readonly external?: boolean
  readonly mono?: boolean
}

export type PostPageFooterColumn = {
  readonly title: string
  readonly links: readonly PostPageFooterLink[]
}

type PostPageProps = {
  readonly searchPlaceholder: string
  readonly sidebarGroups: readonly PostPageSidebarGroup[]
  readonly filterControls: readonly PostPageFilterControl[]
  readonly sortControl: PostPageFilterControl
  readonly viewModes: readonly PostPageViewMode[]
  readonly cards: readonly PostPageCard[]
  readonly footerColumns: readonly PostPageFooterColumn[]
  readonly footerBottomLinks: readonly PostPageFooterLink[]
  readonly themeLabel: string
  readonly className?: string
}

type IconProps = {
  readonly name: IconName
  readonly className?: string
}

type SmartLinkProps = {
  readonly href: string
  readonly className?: string
  readonly children: ReactNode
  readonly ariaLabel?: string
  readonly targetBlank?: boolean
}

type SidebarItemProps = {
  readonly item: PostPageSidebarItem
}

type SidebarGroupProps = {
  readonly group: PostPageSidebarGroup
}

type FooterColumnProps = {
  readonly column: PostPageFooterColumn
}

type PostCardProps = {
  readonly card: PostPageCard
}

const sidebarItemClassName =
  "focus-visible:ring-ring flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2"

const filterButtonClassName =
  "inline-flex h-9 w-full items-center justify-between gap-2 whitespace-nowrap rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-all hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"

function Icon({ name, className }: IconProps) {
  if (name === "sidebarExpand") {
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
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <path d="M9 3v18" />
        <path d="m14 9 3 3-3 3" />
      </svg>
    )
  }

  if (name === "map") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25345 4.19584L4.02558 4.90813C3.03739 5.48137 2.54329 5.768 2.27164 6.24483C2 6.72165 2 7.30233 2 8.46368V16.6283C2 18.1542 2 18.9172 2.34226 19.3418C2.57001 19.6244 2.88916 19.8143 3.242 19.8773C3.77226 19.9719 4.42148 19.5953 5.71987 18.8421C6.60156 18.3306 7.45011 17.7994 8.50487 17.9435C8.98466 18.009 9.44231 18.2366 10.3576 18.6917L14.1715 20.588C14.9964 20.9982 15.004 21 15.9214 21H18C19.8856 21 20.8284 21 21.4142 20.4013C22 19.8026 22 18.8389 22 16.9117V10.1715C22 8.24423 22 7.2806 21.4142 6.68188C20.8284 6.08316 19.8856 6.08316 18 6.08316H15.9214C15.004 6.08316 14.9964 6.08139 14.1715 5.6712L10.8399 4.01463C9.44884 3.32297 8.75332 2.97714 8.01238 3.00117C7.27143 3.02521 6.59877 3.41542 5.25345 4.19584Z"
        />
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 3L8 17.5"
        />
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 6.5L15 20.5"
        />
      </svg>
    )
  }

  if (name === "skills") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M7 6H16.75C18.8567 6 19.91 6 20.6667 6.50559C20.9943 6.72447 21.2755 7.00572 21.4944 7.33329C22 8.08996 22 9.14331 22 11.25C22 14.7612 22 16.5167 21.1573 17.7779C20.975 18.0508 20.7666 18.3045 20.5355 18.5355M3.46447 18.5355C2 17.0711 2 14.714 2 10V6.94427C2 5.1278 2 4.21956 2.38032 3.53806C2.65142 3.05227 3.05227 2.65142 3.53806 2.38032C4.21956 2 5.1278 2 6.94427 2C8.10802 2 8.6899 2 9.19926 2.19101C10.3622 2.62712 10.8418 3.68358 11.3666 4.73313L12 6"
        />
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.25 21.25L16 19L16 16M18.25 20.5C17.8358 20.5 17.5 20.8358 17.5 21.25C17.5 21.6642 17.8358 22 18.25 22C18.6642 22 19 21.6642 19 21.25C19 20.8358 18.6642 20.5 18.25 20.5Z"
        />
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.75 21.25L8 19L8 16M5.75 20.5C6.16421 20.5 6.5 20.8358 6.5 21.25C6.5 21.6642 6.16421 22 5.75 22C5.33579 22 5 21.6642 5 21.25C5 20.8358 5.33579 20.5 5.75 20.5Z"
        />
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21.25L12 16M12 20.5C11.5858 20.5 11.25 20.8358 11.25 21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25C12.75 20.8358 12.4142 20.5 12 20.5Z"
        />
      </svg>
    )
  }

  if (name === "openSource") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <path stroke="currentColor" strokeWidth="1.5" d="M13 11L18 6" />
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          d="M19 7L17 5L19.5 3.5L20.5 4.5L19 7Z"
        />
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          d="M4.02513 8.97487C3.01416 7.96391 2.75095 6.48836 3.23548 5.23548L4.65748 6.65748H6.65748V4.65748L5.23548 3.23548C6.48836 2.75095 7.96391 3.01416 8.97487 4.02513C9.98621 5.03647 10.2493 6.51274 9.76398 7.76593L16.2341 14.236C17.4873 13.7507 18.9635 14.0138 19.9749 15.0251C20.9858 16.0361 21.2491 17.5116 20.7645 18.7645L19.3425 17.3425L17.3425 17.3425V19.3425L18.7645 20.7645C17.5116 21.2491 16.0361 20.9858 15.0251 19.9749C14.0145 18.9643 13.7511 17.4895 14.2349 16.2369L7.76312 9.76507C6.51053 10.2489 5.03571 9.98546 4.02513 8.97487Z"
        />
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          d="M12.2031 14.5L6.59903 20.1041C6.07121 20.6319 5.21546 20.6319 4.68764 20.1041L3.89592 19.3124C3.36811 18.7845 3.36811 17.9288 3.89592 17.401L9.5 11.7969"
        />
      </svg>
    )
  }

  if (name === "book") {
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
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        <path d="M6 8h2" />
        <path d="M6 12h2" />
        <path d="M16 8h2" />
        <path d="M16 12h2" />
      </svg>
    )
  }

  if (name === "roadmap") {
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
        <circle cx="6" cy="19" r="3" />
        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
        <circle cx="18" cy="5" r="3" />
      </svg>
    )
  }

  if (name === "dictionary") {
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
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        <path d="m8 13 4-7 4 7" />
        <path d="M9.1 11h5.7" />
      </svg>
    )
  }

  if (name === "posts") {
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
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
        <path d="M10 6h8v4h-8V6Z" />
      </svg>
    )
  }

  if (name === "topics") {
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
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
        <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
      </svg>
    )
  }

  if (name === "search") {
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
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }

  if (name === "chevronsUpDown") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
      </svg>
    )
  }

  if (name === "listView") {
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
        <line x1="8" x2="21" y1="6" y2="6" />
        <line x1="8" x2="21" y1="12" y2="12" />
        <line x1="8" x2="21" y1="18" y2="18" />
        <line x1="3" x2="3.01" y1="6" y2="6" />
        <line x1="3" x2="3.01" y1="12" y2="12" />
        <line x1="3" x2="3.01" y1="18" y2="18" />
      </svg>
    )
  }

  if (name === "graphView") {
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
        <circle cx="12" cy="4.5" r="2.5" />
        <path d="m10.2 6.3-3.9 3.9" />
        <circle cx="4.5" cy="12" r="2.5" />
        <path d="M7 12h10" />
        <circle cx="19.5" cy="12" r="2.5" />
        <path d="m13.8 17.7 3.9-3.9" />
        <circle cx="12" cy="19.5" r="2.5" />
      </svg>
    )
  }

  if (name === "rss") {
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
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" />
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

  if (name === "sun") {
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
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function SmartLink({
  href,
  className,
  children,
  ariaLabel,
  targetBlank,
}: SmartLinkProps) {
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={className}
        target={targetBlank ? "_blank" : undefined}
        rel={targetBlank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={className}>
      {children}
    </Link>
  )
}

function SidebarItem({ item }: SidebarItemProps) {
  if (item.href) {
    return (
      <SmartLink
        href={item.href}
        className={cn(
          sidebarItemClassName,
          item.current && "bg-accent text-accent-foreground",
        )}
        ariaLabel={item.ariaLabel}
      >
        <Icon name={item.icon} className="size-4" />
        <span className="sr-only">{item.ariaLabel}</span>
      </SmartLink>
    )
  }

  return (
    <button
      type="button"
      className={sidebarItemClassName}
      aria-label={item.ariaLabel}
    >
      <Icon name={item.icon} className="size-4" />
    </button>
  )
}

function SidebarGroup({ group }: SidebarGroupProps) {
  return (
    <div
      role="group"
      aria-label={group.label}
      className="flex flex-col items-center gap-1"
    >
      {group.items.map((item) => (
        <SidebarItem key={item.ariaLabel + item.href} item={item} />
      ))}
    </div>
  )
}

function PostCard({ card }: PostCardProps) {
  return (
    <li>
      <SmartLink
        href={card.href}
        className="border-border group relative -mt-px block border-y"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-y-px inset-x-0 opacity-0 group-hover:opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(90deg, oklch(0.92 0.05 30), oklch(0.74 0.18 50), oklch(0.82 0.12 350), oklch(0.5 0.2 260), oklch(0.85 0.1 5), oklch(0.92 0.07 145), oklch(0.74 0.18 50), oklch(0.88 0.18 95), oklch(0.62 0.22 25), oklch(0.74 0.18 45), oklch(0.82 0.12 350), oklch(0.92 0.05 30))",
            backgroundSize: "200% 200%",
          }}
        />

        <div
          aria-hidden="true"
          className="bg-background pointer-events-none absolute inset-0"
        />

        <div className="relative flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:gap-8 sm:px-14 sm:py-10">
          <div className="bg-muted relative aspect-video w-full shrink-0 overflow-hidden sm:w-60">
            <img
              alt={card.imageAlt}
              src={card.imageSrc}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          <div className="flex flex-1 flex-col gap-2.5">
            <span className="font-mono text-[11px] font-medium uppercase tracking-wider opacity-60">
              {card.kind} - {card.date}
            </span>

            <h3 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              {card.title}
            </h3>

            {card.description ? (
              <p className="text-muted-foreground text-balance text-sm leading-relaxed opacity-80 sm:text-base">
                {card.description}
              </p>
            ) : null}

            {card.tags?.length ? (
              <div className="mt-1 flex flex-wrap items-center gap-1">
                {card.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="text-muted-foreground inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold opacity-75"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="hidden sm:block">
            <span
              aria-hidden="true"
              className="relative flex h-12 w-12 shrink-0 items-center justify-center sm:h-13.5 sm:w-13.5"
            >
              <svg
                viewBox="0 0 54 54"
                className="absolute inset-0 h-full w-full"
                fill="none"
              >
                <circle
                  cx="27"
                  cy="27"
                  r="26"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/20"
                />
              </svg>
              <Icon
                name="arrowRight"
                className="relative h-4 w-4 sm:h-5 sm:w-5"
              />
            </span>
          </div>
        </div>
      </SmartLink>
    </li>
  )
}

function FooterColumn({ column }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-muted-foreground mb-4 font-mono text-[11px] font-medium leading-[1.4] tracking-normal">
        {column.title}
      </h3>
      <ul className="-my-1.25 flex flex-col items-start">
        {column.links.map((linkItem) => (
          <li key={linkItem.href + linkItem.label}>
            <SmartLink
              href={linkItem.href}
              targetBlank={linkItem.external}
              className={cn(
                "inline-block rounded-sm py-1.25 text-sm font-medium leading-snug text-(--ah-fg-muted) transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                linkItem.mono && "font-mono text-[13px] leading-[1.35]",
              )}
            >
              {linkItem.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PostPage({
  searchPlaceholder,
  sidebarGroups,
  filterControls,
  sortControl,
  viewModes,
  cards,
  footerColumns,
  footerBottomLinks,
  themeLabel,
  className,
}: PostPageProps) {
  return (
    <div
      data-slot="sidebar-wrapper"
      className={cn(
        "group/sidebar-wrapper flex min-h-0 w-full has-data-[variant=inset]:bg-background",
        className,
      )}
      style={
        {
          "--sidebar-width": "16rem",
          "--sidebar-width-icon": "3rem",
        } as CSSProperties
      }
    >
      <aside
        aria-label="Learning navigation (collapsed)"
        className="bg-sidebar top-(--nav-height) sticky hidden h-[calc(100svh-var(--nav-height))] w-12 self-start border-r py-2 md:flex md:flex-col md:items-center md:gap-1"
      >
        <button
          type="button"
          aria-label="Expand sidebar"
          aria-expanded="false"
          className="text-muted-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring flex size-8 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2"
        >
          <Icon name="sidebarExpand" className="size-4" />
        </button>

        <nav
          aria-label="Learning navigation shortcuts"
          className="flex min-h-0 flex-col items-center overflow-y-auto"
        >
          {sidebarGroups.map((group, groupIndex) => (
            <div key={group.label} className="contents">
              <SidebarGroup group={group} />
              {groupIndex < sidebarGroups.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="bg-border my-1 h-px w-6 shrink-0"
                />
              ) : null}
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex-1">
          <main className="flex min-h-[calc(100vh-var(--nav-height))] flex-col lg:flex-row">
            <div className="mx-auto flex w-full flex-col">
              <div className="bg-background/90 top-(--nav-height) z-10 flex flex-col border-y px-4 pb-4 backdrop-blur-lg sm:sticky sm:flex-row sm:items-center sm:gap-x-3 sm:border-t-0 sm:pb-0">
                <div className="w-full sm:flex-1">
                  <div className="relative flex w-full items-center">
                    <input
                      className="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring my-3 h-9 w-full rounded-md border bg-transparent py-2 pl-8 pr-3 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                      placeholder={searchPlaceholder}
                      value=""
                      readOnly
                    />
                    <Icon
                      name="search"
                      className="text-muted-foreground absolute left-3 w-4"
                    />
                  </div>
                </div>

                <div className="flex w-full items-center gap-2 sm:w-auto sm:shrink-0 sm:gap-3">
                  {filterControls.map((control) => (
                    <div
                      key={control.label}
                      className="min-w-0 flex-1 sm:w-36 sm:flex-none"
                    >
                      <button
                        type="button"
                        aria-expanded="false"
                        className={filterButtonClassName}
                      >
                        <span className="text-muted-foreground truncate text-sm font-normal">
                          {control.label}
                        </span>
                        <Icon name="chevronsUpDown" className="opacity-50" />
                      </button>
                    </div>
                  ))}

                  <div className="min-w-0 flex-1 sm:w-40 sm:flex-none">
                    <button
                      type="button"
                      aria-expanded="false"
                      className={filterButtonClassName}
                    >
                      <span className="truncate text-sm font-normal">
                        {sortControl.label}
                      </span>
                      <Icon name="chevronsUpDown" className="opacity-50" />
                    </button>
                  </div>

                  <div className="flex h-9 shrink-0 items-center rounded-md border p-0.5">
                    {viewModes.map((mode) => (
                      <button
                        key={mode.ariaLabel}
                        type="button"
                        aria-label={mode.ariaLabel}
                        aria-pressed={mode.active ? "true" : "false"}
                        className={cn(
                          "inline-flex size-9 h-full w-auto items-center justify-center rounded-md",
                          mode.active
                            ? "bg-secondary text-secondary-foreground"
                            : "hover:bg-accent hover:text-accent-foreground",
                        )}
                      >
                        <Icon name={mode.icon} className="size-4" />
                      </button>
                    ))}
                  </div>

                  <SmartLink
                    href="/rss.xml"
                    ariaLabel="RSS feed"
                    className="inline-flex h-9 shrink-0 items-center justify-center gap-1 rounded-md border bg-background px-3 py-2 text-sm font-medium shadow-xs transition-all hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon name="rss" className="text-primary w-3" />
                    <span className="hidden sm:inline">RSS</span>
                  </SmartLink>
                </div>
              </div>

              <div>
                <ul>
                  {cards.map((card) => (
                    <PostCard key={card.href} card={card} />
                  ))}
                </ul>
              </div>
            </div>
          </main>
        </div>

        <footer className="border-border w-full border-t print:hidden">
          <div className="border-border grid grid-cols-1 gap-9 border-b px-4.5 pb-8 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-11 lg:pb-6.5 lg:pt-13">
            {footerColumns.map((column) => (
              <FooterColumn key={column.title} column={column} />
            ))}
          </div>

          <div className="flex flex-col items-start gap-5 px-4.5 pb-8 pt-5 sm:flex-row sm:items-center lg:px-11 lg:pb-8.5 lg:pt-5.5">
            <nav
              aria-label="Footer"
              className="-mx-2.5 -my-1 flex flex-wrap items-center"
            >
              {footerBottomLinks.map((linkItem) => (
                <SmartLink
                  key={linkItem.href + linkItem.label}
                  href={linkItem.href}
                  className="inline-block rounded-sm px-2.5 py-1 text-[13px] leading-[1.35] text-(--ah-fg-subtle) transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {linkItem.label}
                </SmartLink>
              ))}
            </nav>

            <button
              type="button"
              className="border-input hover:bg-muted ml-0 inline-flex h-auto items-center gap-2 rounded-[9px] border bg-transparent px-3.25 py-2 text-(--ah-fg-subtle) shadow-none transition-all hover:text-foreground sm:ml-auto"
            >
              <span className="relative inline-flex size-5 shrink-0 items-center justify-center">
                <Icon
                  name="sun"
                  className="absolute size-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <Icon
                  name="moon"
                  className="absolute size-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
              </span>
              <span className="text-xs font-normal capitalize opacity-80 sm:text-sm">
                {themeLabel}
              </span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
