import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavBar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ThemeToggle />
    </main>
  )
}
