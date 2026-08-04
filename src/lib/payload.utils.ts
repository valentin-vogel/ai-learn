import type { Field } from "payload"

export const linkFields: Field[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
  },
  {
    name: "url",
    label: "Url",
    type: "text",
    required: true,
  },
]

export const isActiveField: Field = {
  name: "isActive",
  label: "Is Active",
  type: "checkbox",
  required: true,
  defaultValue: false,
}

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
