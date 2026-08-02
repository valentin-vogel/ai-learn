import { AnnouncementBanner } from "@/components/announcement-banner/AnnouncementBanner"

export function AnnouncementBannerExample() {
  return (
    <AnnouncementBanner
      badges={[
        {
          id: "new",
          label: "New",
        },
      ]}
      linkHref="/skills-writing-great-skills"
      linkLabel="The /writing-great-skills Skill"
    />
  )
}
