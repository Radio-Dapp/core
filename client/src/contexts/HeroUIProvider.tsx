import { HeroUIProvider as HeroProvider } from '@heroui/react'
import { ThemeProvider } from "next-themes";

export default function HeroUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <HeroProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </HeroProvider>
  )
}