import { HeroWithFormSection } from "@/components/hero-with-form-section/HeroWithFormSection"

export function HeroWithFormSectionExample() {
  return (
    <HeroWithFormSection
      eyebrow="AI Skills for Real Engineers"
      title="A practical skill system for engineers who want to use AI without giving up their standards."
      description="Install the ones you want, then type a slash command. The system stays editable, composable, and grounded in engineering judgment."
      primaryAction={{
        label: "Start the email course",
        href: "/skills/subscribe",
      }}
      secondaryAction={{
        label: "Browse the skills",
        href: "/skills",
      }}
      stats={[
        {
          id: "github-stars",
          value: "199,735",
          label: "GitHub stars",
        },
        {
          id: "free-skills",
          value: "21",
          label: "Free skills",
        },
        {
          id: "install-count",
          value: "100k+",
          label: "Installations",
        },
      ]}
      supportingTitle="Learn how I actually engineer with these"
      supportingDescription="A free email course on the practices these skills came out of: the judgement calls that keep the output at your standard, not just the commands."
      formFields={[
        {
          id: "first_name",
          label: "First Name",
          name: "first_name",
          placeholder: "Name",
          type: "text",
        },
        {
          id: "email",
          label: "Email*",
          name: "email",
          placeholder: "you@example.com",
          type: "email",
          required: true,
        },
      ]}
      submitLabel="Start the email course"
      footerNote="No spam. Unsubscribe any time."
    />
  )
}
