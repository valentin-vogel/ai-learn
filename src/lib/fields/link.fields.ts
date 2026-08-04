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
