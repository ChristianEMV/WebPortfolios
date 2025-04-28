"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Star, Circle, Triangle, Square } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const shapes = [
    { component: Star, top: "10%", left: "5%", size: 16, delay: 0 },
    { component: Circle, top: "20%", right: "10%", size: 20, delay: 0.2 },
    { component: Triangle, bottom: "30%", left: "15%", size: 24, delay: 0.4 },
    { component: Square, bottom: "20%", right: "5%", size: 18, delay: 0.6 },
  ]

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {shapes.map((shape, index) => {
        const ShapeComponent = shape.component
        return (
          <motion.div
            key={index}
            className="absolute text-primary/20 hidden md:block"
            style={{
              top: shape.top || "auto",
              left: shape.left || "auto",
              right: shape.right || "auto",
              bottom: shape.bottom || "auto",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.7,
              scale: 1,
              rotate: [0, 180, 360],
            }}
            transition={{
              delay: shape.delay,
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <ShapeComponent size={shape.size} />
          </motion.div>
        )
      })}

      <div className="container px-4 z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Hi, I'm Christian Vergara
          </motion.h1>

          <motion.div
            className="relative h-16 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-light">
              <span className="relative inline-flex items-center">
                <span className="text-primary text-opacity-20 mr-2">&lt;</span>
                {typedText}
                <span className="animate-blink ml-1">|</span>
                <span className="text-primary text-opacity-20 ml-2">/&gt;</span>
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Building extraordinary digital experiences with clean code and modern design. Specialized in React, Next.js,
            and cutting-edge web technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 animate-bounce cursor-pointer"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2 }}
      >
        <ArrowDown className="h-8 w-8" />
      </motion.div>

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08),transparent_65%)]" />
    </section>
  )
}
