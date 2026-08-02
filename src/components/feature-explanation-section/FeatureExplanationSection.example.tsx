import {
  FeatureExplanationSection,
  type FeatureExplanationPoint,
} from "@/components/feature-explanation-section/FeatureExplanationSection"

const points: readonly FeatureExplanationPoint[] = [
  {
    title: "The problem",
    description:
      "An agent is only as good as the process you give it. Left to guess, it writes plausible code that quietly rots the codebase.",
  },
  {
    title: "The fix",
    description:
      "A skill encodes one good habit (grilling a plan, writing a spec, reviewing a diff), so the agent runs it the same way every time.",
  },
  {
    title: "Why it compounds",
    description:
      "Skills form a chain. Each one's output is the next one's input, so the whole workflow gets better as you tune single steps.",
  },
]

const platforms = ["Claude Code", "Cursor", "Codex", "Amp", "Copilot"] as const

export function FeatureExplanationSectionExample() {
  return (
    <FeatureExplanationSection
      eyebrow="What is a skill?"
      title="Skills are small, sharp instructions you hand your coding agent so it works the way a senior engineer would."
      description="Install the ones you want, type a slash command, and the agent follows a process you actually trust."
      points={points}
      supportTitle="Works in whatever agent you already use"
      supportDescription="Skills are plain files, not a lock-in platform."
      platforms={platforms}
      ctaLabel="Install"
      ctaHref="#install"
    />
  )
}
