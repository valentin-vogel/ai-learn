import type { Field } from "payload"

export const seoFields: Field[] = [
  {
    name: "title",
    label: "Title",
    type: "text",
    required: true,
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    required: true,
  },
  {
    name: "image",
    label: "Image",
    type: "upload",
    relationTo: "media",
    required: true,
  },
]
