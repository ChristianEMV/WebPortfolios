"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"]

  const scrollToSection = (section: string) => {
    const sectionId = section.toLowerCase()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-xl md:text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary">&#123;</span> DEV <span className="text-primary">&#125;</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item, i) => (
              <motion.div
                key={item}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(item)}
                  className="text-foreground/80 hover:text-primary"
                >
                  {item}
                </Button>
              </motion.div>
            ))}

          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col space-y-6 text-center">
            {navItems.map((item) => (
              <Button key={item} variant="ghost" size="lg" onClick={() => scrollToSection(item)} className="text-xl">
                {item}
              </Button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}
