import { IntroSection } from "@/components/intro-section/IntroSection"

export function IntroSectionExample() {
  return (
    <IntroSection
      title="Bad code is now the most expensive it has ever been."
      paragraphs={[
        "A lot of people think the rules of software development are being rewritten by AI. They think that code is cheap. That software engineering, as a discipline, is finished.",
        "Coding agents like Claude Code and Codex ship code faster than any human ever has. But without careful guidance, they make codebases worse. And the worse the codebase, the worse the AI performs. It's a vicious circle.",
        "If you can design codebases agents love, you can reap the rewards of this new era. AI Learn is for anyone who cares about the code they ship.",
      ]}
    />
  )
}
