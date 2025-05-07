import type { Metadata } from "next";
import {  DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import clsx from "clsx";
import "./globals.css"


export const metadata: Metadata = {
  title: "Download PC Parts",
  description: "Upgrade your PC with just a few clicks!",
};

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="PC Parts" />
      </head>
      <body className={clsx(dmSans.className,'antiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
