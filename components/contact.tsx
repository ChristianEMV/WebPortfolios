"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Form submitted:", formData)
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "hello@alexchen.dev",
      link: "mailto:hello@alexchen.dev",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "https://maps.google.com/?q=San+Francisco,+CA",
    },
  ]

  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, name: "GitHub", link: "#" },
    { icon: <Linkedin className="h-6 w-6" />, name: "LinkedIn", link: "#" },
    { icon: <Twitter className="h-6 w-6" />, name: "Twitter", link: "#" },
    { icon: <Instagram className="h-6 w-6" />, name: "Instagram", link: "#" },
  ]

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05),transparent_70%)]" />

      <motion.div className="container mx-auto px-4" style={{ opacity, y }}>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out to me directly or fill out the form and
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-background/50 backdrop-blur-sm shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-primary/10 rounded-full blur-xl" />

              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-background/80"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-background/80"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                      className="bg-background/80"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                      className="resize-none bg-background/80"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="border-none bg-background/50 backdrop-blur-sm shadow-xl overflow-hidden relative">
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />

              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      href={item.link}
                      key={index}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        className="p-3 rounded-lg bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                      >
                        {social.icon}
                        <span className="sr-only">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-gradient-to-br from-primary/80 to-purple-600/80 text-white shadow-xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
                <p className="mb-6 text-white/80">
                  I'm currently available for freelance projects, full-time positions, or consulting work. If you have a
                  project that needs creative direction, I'd love to hear about it!
                </p>
                <Button className="bg-white text-primary hover:bg-white/90" size="lg">
                  View My Resume
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
