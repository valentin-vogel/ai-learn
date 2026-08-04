import { isActiveField, linkFields } from "@/lib/payload.utils"
import type { GlobalConfig, Tab, TabsField } from "payload"

const headerTab: Tab = {
  label: "Header",
  fields: [
    {
      name: "navLinks",
      label: "Navigation Links",
      type: "array",
      fields: linkFields,
    },
  ],
}

const footerTab: Tab = {
  label: "Footer",
  fields: [],
}

const announcementTab: Tab = {
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
    isActiveField,
  ],
}

const settingsTabsField: TabsField = {
  type: "tabs",
  tabs: [headerTab, footerTab, announcementTab],
}

export const Settings: GlobalConfig = {
  slug: "settings",
  fields: [settingsTabsField],
}
