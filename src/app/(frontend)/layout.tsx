import React from "react"
import { DM_Sans, JetBrains_Mono, Source_Serif_4 } from "next/font/google"
import "./globals.css"

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
    <html lang="en">
      <body
        className={`${dmSans.variable} ${jetBrainsMono.variable} ${sourceSerif4.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
