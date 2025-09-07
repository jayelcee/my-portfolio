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
  title: "Jasmine Camasura - Full Stack Web Developer",
  description:
    "Portfolio of Jasmine Camasura, a fresh Computer Science graduate specializing in full-stack web development with React, Next.js, and modern tech stacks.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased dark`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
