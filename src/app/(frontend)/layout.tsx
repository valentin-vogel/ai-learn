import { DM_Sans, JetBrains_Mono, Source_Serif_4 } from "next/font/google"
import React from "react"
import { cn } from "@/lib/utils"
import "./globals.css"
import { Footer } from "@/components/layout/footer/footer"
import { Header } from "@/components/layout/header/header"
import { ThemeProvider } from "@/components/theme-provider"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
})

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
})

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
}

export default async function RootLayout(
  props: Readonly<{ children: React.ReactNode }>,
) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-page-background relative overflow-x-hidden antialiased font-sans",
          dmSans.variable,
          jetBrainsMono.variable,
          sourceSerif4.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative mx-auto w-full max-w-364 px-2">
            <div className="bg-background border-x print:border-none">
              <Header />
              <main className="bg-background text-foreground">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
