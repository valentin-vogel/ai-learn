import type { Field } from "payload"

export const slugField: Field = {
  name: "slug",
  label: "Slug",
  type: "text",
  required: true,
  unique: true,
  index: true,

  validate(value: unknown) {
    if (typeof value !== "string" || !value.trim()) {
      return "A slug is required."
    }

    const slug = value.trim().toLowerCase()

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      return "Use lowercase letters, numbers, and hyphens only."
    }

    return true
  },
}
