import {
  CourseSignupPanel,
  type CourseSignupPanelFeature,
  type CourseSignupPanelField,
  type CourseSignupPanelSignup,
} from "@/components/course-signup-panel/CourseSignupPanel"

const fields: readonly CourseSignupPanelField[] = [
  {
    id: "first_name_courses_waitlist",
    label: "First Name",
    name: "first_name",
    type: "text",
    placeholder: "Name",
  },
  {
    id: "email_courses_waitlist",
    label: "Email*",
    name: "email",
    type: "email",
    placeholder: "you@example.com",
    required: true,
  },
]

const signup: CourseSignupPanelSignup = {
  statusLabel: "Waitlist open",
  title: "Be first in line for the next cohort",
  description:
    "Enrollment closes between cohorts and seats go to the waitlist. Join and you get the dates the moment they are set, plus what you need for budget approval.",
  submitLabel: "Join the waitlist",
  disclaimer: "No spam. Unsubscribe anytime.",
  fields,
}

const feature: CourseSignupPanelFeature = {
  title: "AI Coding for Real Engineers",
  href: "/cohorts/ai-coding-for-real-engineers-m0k0w",
  linkLabel: "More info",
  image: {
    src: "https://localhost/fh5sosv36pw0ogibmc0p.jpg",
    alt: "",
    width: 1200,
    height: 675,
    sizes: "(min-width: 1000px) 40vw, 100vw",
  },
  stats: [
    {
      label: "Engineers trained",
      value: "8,500+",
    },
    {
      label: "Format",
      value: "Async lessons + live office hours",
    },
  ],
}

export function CourseSignupPanelExample() {
  return (
    <CourseSignupPanel
      id="join"
      eyebrow="Cohort-based course"
      title="AI Coding for Real Engineers"
      description="A two-week cohort for developers who want to use AI coding tools on real production-style work: context gathering, planning, steering, feedback loops, AFK agents, and human-in-the-loop review."
      signup={signup}
      feature={feature}
    />
  )
}
