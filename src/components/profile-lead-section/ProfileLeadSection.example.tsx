import { ProfileLeadSection } from "@/components/profile-lead-section/ProfileLeadSection"

export function ProfileLeadSectionExample() {
  return (
    <ProfileLeadSection
      title="Hi, I'm Valentin Vogel"
      paragraphs={[
        "Before creating AI Learn, I created Total TypeScript, the industry standard course for learning TS. I was a member of the XState core team, and a developer advocate at Vercel.",
        "I'm building AI Learn to make the secrets of the AI Engineer available to everyone.",
      ]}
      image={{
        src: "/landing/valentin-vogel@2x.png",
        alt: "Valentin Vogel",
        width: 473,
        height: 520,
      }}
      signup={{
        title: "Join 100,000+ developers learning to code with AI",
        description:
          "Start with the free email course: seven lessons, tied to real work, with a repeatable agent workflow at the end.",
        submitLabel: "Start the free course",
        disclaimer:
          "Seven daily lessons, then my regular updates. Unsubscribe any time.",
        fields: [
          {
            id: "first_name",
            label: "First Name",
            name: "first_name",
            type: "text",
            placeholder: "Name",
          },
          {
            id: "email",
            label: "Email*",
            name: "email",
            type: "email",
            placeholder: "you@example.com",
            required: true,
          },
        ],
      }}
    />
  )
}
