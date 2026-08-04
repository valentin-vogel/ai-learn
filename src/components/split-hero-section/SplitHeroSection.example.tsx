import { SplitHeroSection } from "@/components/split-hero-section/SplitHeroSection"

export function SplitHeroSectionExample() {
  return (
    <SplitHeroSection
      eyebrow="Real AI Engineering by Valentin Vogel"
      title="Engineering fundamentals are not obsolete."
      description="They are your biggest advantage. AI Hero is the engineering process for working with coding agents, from an idea to shipped, reviewed code."
      primaryAction={{
        label: "Start the free 7-day course",
        href: "/skills/subscribe",
      }}
      secondaryAction={{
        label: "Browse the skills",
        href: "/skills",
      }}
      stats={[
        {
          id: "developers-learning",
          value: "100,000+",
          label: "Developers learning",
        },
        {
          id: "trained-in-cohorts",
          value: "8,500+",
          label: "Trained in cohorts",
        },
        {
          id: "free-skills",
          value: "21",
          label: "Free skills",
        },
      ]}
      visual={{
        src: "/landing/valentin-vogel-left@2x.png",
        alt: "Instructor portrait",
        width: 349,
        height: 374,
      }}
    />
  )
}
