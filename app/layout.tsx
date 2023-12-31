import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { bluuNextFont, geliatFont, ibmPlexMono } from "@/styles/fonts"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(bluuNextFont.variable, geliatFont.variable, ibmPlexMono.variable)}>
      <body className={cn("bg-background font-sans text-base text-body antialiased")}>
        <ThemeProvider attribute="class" themes={["light", "dark"]} defaultTheme="system" enableSystem>
          {children}
          {/* Gradients */}
          <svg className="block" width={0} height={0}>
            <defs>
              <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#89F9E8" />
                <stop offset="100%" stopColor="#FACB7B" />
              </linearGradient>
              <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
                <stop offset="0%" stopColor="#D87CEE" />
                <stop offset="100%" stopColor="#FACB7B" />
              </linearGradient>
              <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
                <stop offset="0%" stopColor="#9099FC" />
                <stop offset="100%" stopColor="#89F9E8" />
              </linearGradient>
              <linearGradient id="btn-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#9099FC" />
                <stop offset="100%" stopColor="#D87CEE" />
              </linearGradient>
            </defs>
          </svg>
        </ThemeProvider>
      </body>
    </html>
  )
}
