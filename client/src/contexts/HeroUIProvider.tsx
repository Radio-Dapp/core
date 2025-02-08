import { HeroUIProvider as HeroProvider } from '@heroui/react'
import { ThemeProvider } from "next-themes";
import { useHref, useNavigate } from "react-router";

export default function HeroUIProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <HeroProvider navigate={navigate} useHref={useHref}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </HeroProvider>
  )
}