"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Instagram, ChevronRight, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, name: "GitHub", href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", href: "#" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", href: "#" },
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", href: "#" },
    { icon: <Mail className="h-5 w-5" />, name: "Email", href: "mailto:hello@alexchen.dev" },
  ]

  return (
    <footer className="pt-20 border-t border-muted/30 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl bg-[radial-gradient(circle_at_center_bottom,rgba(var(--primary-rgb),0.08),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">&#123;</span> DEV <span className="text-primary">&#125;</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Building extraordinary digital experiences with clean code and modern design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="hover:text-primary transition-colors"
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Web Applications
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Code Review
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>San Francisco, CA</p>
              <p>
                <a href="mailto:hello@alexchen.dev" className="hover:text-primary transition-colors">
                  hello@alexchen.dev
                </a>
              </p>
              <p>
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-muted/30 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">© {currentYear} Alex Chen. All rights reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
