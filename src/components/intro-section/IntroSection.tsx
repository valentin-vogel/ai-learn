import { cn } from "@/lib/utils"

type IntroSectionProps = {
  readonly title: string
  readonly paragraphs: string[]
  readonly className?: string
}

type IntroCopyProps = {
  readonly paragraphs: string[]
}

function IntroCopy({ paragraphs }: IntroCopyProps) {
  return (
    <div className="flex max-w-[62ch] flex-col gap-5 text-pretty text-(--ah-fg-body) text-[16.5px] leading-[1.68] sm:text-[17.5px] [&>p]:m-0! [&>p:last-child]:font-medium [&>p:last-child]:text-foreground">
      {paragraphs.map((paragraph, index) => (
        <p key={`${paragraph.slice(0, 24)}-${index}`} className="ah-prose-p">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export function IntroSection({
  title,
  paragraphs,
  className,
}: IntroSectionProps) {
  return (
    <section className={cn("border-b border-border", className)}>
      <div className="grid grid-cols-1 gap-8 px-4.5 py-14 sm:px-11 sm:pb-18 sm:pt-19 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-16">
        <div className="flex flex-col gap-5">
          <h2 className="font-sans text-[1.75rem] leading-[1.1] font-bold tracking-[-0.026em] text-balance sm:text-[2.0625rem] lg:text-[2.5rem] lg:leading-[1.08] lg:tracking-[-0.03em]">
            {title}
          </h2>
        </div>

        <IntroCopy paragraphs={paragraphs} />
      </div>
    </section>
  )
}
