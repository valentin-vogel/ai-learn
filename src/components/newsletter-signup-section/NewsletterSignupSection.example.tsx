import { NewsletterSignupSection } from "@/components/newsletter-signup-section/NewsletterSignupSection"

export function NewsletterSignupSectionExample() {
  return (
    <NewsletterSignupSection
      title="Join over 100,200+ Developers Becoming AI Heroes"
      description="Engineering fundamentals are your biggest advantage. Learn how to leverage them and leave vibe coding behind."
      fields={[
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
      submitLabel="Subscribe"
      footerNote="No spam. Unsubscribe anytime."
    />
  )
}
