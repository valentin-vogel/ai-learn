import type { CollectionConfig } from "payload"
import { descriptionField } from "@/lib/fields/description.field"
import { slugField } from "@/lib/fields/slug.field"
import { titleField } from "@/lib/fields/title.field"

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  fields: [
    // Added by payload: id, createdAt, updatedAt
    titleField,
    descriptionField,
    slugField,
    // Recommend some fields for pages:
  ],
}
