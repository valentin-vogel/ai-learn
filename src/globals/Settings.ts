import type { GlobalConfig } from "payload"

export const Settings: GlobalConfig = {
  slug: "settings",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Header",
          fields: [],
        },
        {
          label: "Footer",
          fields: [],
        },
        {
          label: "Announcement",
          fields: [
            {
              name: "message",
              label: "Message",
              type: "text",
              required: true,
            },
            {
              name: "type",
              label: "Type",
              type: "select",
              required: true,
              defaultValue: "info",
              options: [
                {
                  label: "Info",
                  value: "info",
                },
                {
                  label: "New",
                  value: "new",
                },
                {
                  label: "Updated",
                  value: "updated",
                },
              ],
            },
            {
              name: "isActive",
              label: "Is Active",
              type: "checkbox",
              required: true,
              defaultValue: false,
            },
          ],
        },
      ],
    },
  ],
}
