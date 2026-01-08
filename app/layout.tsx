import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Jasmine Camasura | Frontend & Full Stack Developer",
  description:
    "Computer Science graduate (Summa Cum Laude, Class Valedictorian) specializing in React, Next.js, and MERN stack development. Seeking remote frontend or full-stack developer roles. Strong fundamentals, proven adaptability, and hands-on experience with Ruby on Rails.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased dark`}>
      <head>
        <link rel="icon" type="image/jpeg" href="/dev-headshot.jpg" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
