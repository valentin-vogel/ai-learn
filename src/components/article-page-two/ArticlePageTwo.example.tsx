import { ArticlePageTwo } from "@/components/article-page-two/ArticlePageTwo"

const tocItems = [
  {
    id: "why-traditional-testing",
    label: "Why Traditional Testing Isn't Enough",
    href: "#why-traditional-testing",
    current: true,
  },
  { id: "go-deeper", label: "Go deeper", href: "#go-deeper", withArrow: true },
  { id: "manual-qa", label: "Manual QA Is Not Enough", href: "#manual-qa" },
  { id: "evals", label: "Evals", href: "#evals" },
  { id: "types", label: "Three Types Of Evals", href: "#types" },
  {
    id: "improve",
    label: "How Do I Improve My Evals Over Time?",
    href: "#improve",
  },
  { id: "run", label: "How Do I Run Evals?", href: "#run" },
  { id: "practice", label: "How Evals Work In Practice", href: "#practice" },
  { id: "stupid", label: "It's The Evals, Stupid", href: "#stupid" },
  { id: "course", label: "Upcoming course", href: "#course", withArrow: true },
  { id: "next", label: "Up next", href: "#up-next" },
] as const

const shareItems = [
  {
    id: "x",
    label: "Share on X",
    icon: "x" as const,
    href: "https://x.com/",
  },
  {
    id: "bluesky",
    label: "Share on Bluesky",
    icon: "bluesky" as const,
    href: "https://localhost/test",
  },
  {
    id: "linkedin",
    label: "Share on LinkedIn",
    icon: "linkedin" as const,
    href: "https://linkedin.com",
  },
  {
    id: "copy",
    label: "Copy URL",
    icon: "copy" as const,
  },
] as const

export function ArticlePageTwoExample() {
  return (
    <ArticlePageTwo
      progressLabel="06 / 07"
      meta="The AI Engineer Roadmap · 8 min read"
      title="Your App Is Only As Good As Its Evals"
      description="How do you know if your AI application is hallucinating? How do you ensure it's outputting what you want it to? Evals are the answer."
      author={{
        name: "Valentin",
        avatarSrc: "https://localhost/BAVMn6DY0.jpg",
      }}
      primaryAction={{ id: "subscribe", label: "Subscribe" }}
      secondaryActions={[
        { id: "copy-page", label: "Copy page", icon: "copy" },
        { id: "share", label: "Share", icon: "share" },
        {
          id: "next-lesson",
          label: "Next lesson",
          icon: "arrowRight",
          href: "/how-to-improve-your-llm-powered-app",
        },
      ]}
      mobileTocLabel="On this page"
      tocTitle="On this page"
      tocItems={tocItems}
      content={
        <>
          <p className="ah-prose-p">
            As we discussed in our previous article, building with LLMs requires
            a fundamental shift in how you think about software development.
          </p>
          <p className="ah-prose-p">
            The key tool for managing this uncertainty is evals. Evals are the
            AI engineer&apos;s unit tests.
          </p>

          <h2 id="why-traditional-testing" className="scroll-mt-18">
            <a
              className="text-inherit! w-full font-semibold no-underline"
              href="#why-traditional-testing"
            >
              Why Traditional Testing Isn&apos;t Enough
            </a>
          </h2>

          <p className="ah-prose-p">
            Traditional software testing relies on deterministic relationships
            between inputs and outputs.
          </p>

          <div className="my-6 flex w-full items-center justify-center rounded-lg border bg-white py-10 dark:bg-transparent">
            <div className="w-full max-w-4xl rounded border p-4 text-center text-sm text-muted-foreground">
              Diagram placeholder from snippet
            </div>
          </div>

          <h2 id="manual-qa" className="scroll-mt-18">
            <a
              className="text-inherit! w-full font-semibold no-underline"
              href="#manual-qa"
            >
              Manual QA Is Not Enough
            </a>
          </h2>

          <p className="ah-prose-p">
            In probabilistic systems, any change can affect the entire system.
            You need measurable feedback loops.
          </p>

          <h2 id="evals" className="scroll-mt-18">
            <a
              className="text-inherit! w-full font-semibold no-underline"
              href="#evals"
            >
              Evals
            </a>
          </h2>

          <p className="ah-prose-p">
            The key is automation. We need to evaluate our app every time we
            make a change.
          </p>

          <div className="my-6 rounded-xl border border-primary/30 bg-primary/5 p-6">
            <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-primary">
              Ready to go deeper?
            </span>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              AI Coding Crash Course
            </h3>
            <p className="mt-2 text-base text-foreground/80">
              Not out yet. Join the waitlist and hear the moment it ships.
            </p>
            <a
              href="/workshops/ai-coding-crash-course"
              className="bg-accent-fill text-accent-fill-foreground hover:bg-accent-fill-hover mt-4 inline-flex h-11.5 items-center gap-2 rounded-[9px] px-5 text-[15px] font-bold"
            >
              Learn more
            </a>
          </div>
        </>
      }
      shareTitle="Share"
      shareItems={shareItems}
      previousLabel="Previous"
      previousHref="/the-ai-engineer-mindset"
      previousTitle="The AI Engineer Mindset"
      nextLabel="Up next · lesson 07"
      nextHref="/how-to-improve-your-llm-powered-app"
      nextTitle="17 Techniques For Improving Your LLM-Powered App"
      loginHref="/login"
    />
  )
}
