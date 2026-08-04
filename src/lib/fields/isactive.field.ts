import type { Field } from "payload"

export const isActiveField: Field = {
  name: "isActive",
  label: "Is Active",
  type: "checkbox",
  required: true,
  defaultValue: false,
}
