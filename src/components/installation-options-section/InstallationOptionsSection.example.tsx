import {
  InstallationOptionsSection,
  type InstallationOptionsCommandCard,
  type InstallationOptionsRepoCard,
} from "@/components/installation-options-section/InstallationOptionsSection"

const repoCard: InstallationOptionsRepoCard = {
  ariaLabel: "View valentin-vogel/skills on GitHub, 199,735 stars",
  starsLabel: "199,735",
  repositoryLabel: "valentin-vogel/skills",
  ctaLabel: "View on GitHub ->",
  href: "https://github.com/valentin-vogel/skills",
}

const commandCards: readonly InstallationOptionsCommandCard[] = [
  {
    id: "skills",
    title: "Install the skills",
    description:
      "Pick the skills and agents you use. The installer writes editable files into your project.",
    command: "npx skills@latest add valentin-vogel/skills",
    copyAriaLabel: "Copy install the skills install command",
    icon: "cycle",
    footerRow: {
      leadingText: "Update with",
      emphasizedText: "npx skills update",
      trailingLink: {
        label: "Skills.sh",
        href: "https://www.skills.sh/valentin-vogel/skills",
      },
    },
  },
  {
    id: "claude",
    title: "Claude Code",
    description:
      "Install the complete set as a managed, read-only plugin from the official marketplace.",
    command: "claude plugins install mattpocock-skills",
    copyAriaLabel: "Copy claude code install command",
    icon: "claude",
    footerRow: {
      leadingText: "Updates automatically",
      trailingLink: {
        label: "Plugin docs",
        href: "https://code.claude.com/docs/en/plugins",
      },
    },
  },
]

export function InstallationOptionsSectionExample() {
  return (
    <InstallationOptionsSection
      heading="Install the skills and get to work"
      description="Install the skills you want into the agents you use. Everything is MIT licensed and lives in one repo."
      repoCard={repoCard}
      optionsAriaLabel="Skill installation options"
      commandCards={commandCards}
      mobilePluginLink={{
        label: "Using Claude Code? Install as a plugin",
        href: "https://code.claude.com/docs/en/plugins",
      }}
      compatibilityTitle="Works with any agent"
      compatibilityLine="Claude Code · Cursor · Codex · Copilot · 21 skills · MIT"
    />
  )
}
