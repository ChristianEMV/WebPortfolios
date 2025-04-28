"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [visibleProjects, setVisibleProjects] = useState(4)
  const scrollRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9])

  const projects: Project[] = [
    {
      title: "Modern E-commerce Platform",
      description:
        "A full-stack e-commerce platform with advanced product filtering, cart functionality, and secure payment processing.",
      image: "/placeholder.svg?height=600&width=900",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Collaborative Task Management",
      description:
        "A real-time task management application with team workspaces, kanban boards, and progress tracking.",
      image: "/placeholder.svg?height=600&width=900",
      tags: ["React", "Socket.io", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "AI-Powered Weather Dashboard",
      description: "Smart weather app that provides personalized forecasts and historical weather data analysis.",
      image: "/placeholder.svg?height=600&width=900",
      tags: ["React", "OpenWeather API", "Chart.js", "AI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "A modern, interactive portfolio website built with Next.js and Framer Motion.",
      image: "/placeholder.svg?height=600&width=900",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Finance Management App",
      description: "Personal finance tracker with budget planning, expense categorization, and visual reports.",
      image: "/placeholder.svg?height=600&width=900",
      tags: ["React", "Redux", "Firebase", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Social Media Dashboard",
      description: "Comprehensive analytics dashboard for social media management and performance tracking.",
      image: "/placeholder.svg?height=600&width=900",
      tags: ["Vue.js", "GraphQL", "Express", "Analytics"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const categories = ["All", "Next.js", "React", "TypeScript", "Node.js"]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.tags.includes(activeCategory))

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 2, filteredProjects.length))
  }

  const scrollLeft = () => {
    const container = document.getElementById("featured-projects")
    if (container) {
      container.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    const container = document.getElementById("featured-projects")
    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section id="projects" ref={scrollRef} className="py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-60" />
      </div>

      <motion.div className="container mx-auto px-4" style={{ opacity, scale }}>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work and side projects. Each project represents my passion for creating efficient,
            user-friendly applications with modern technologies.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <div className="mb-20 relative">
          <div
            id="featured-projects"
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={index}
                  className="min-w-[350px] md:min-w-[400px] snap-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Card className="h-full overflow-hidden border-none shadow-xl bg-background/50 backdrop-blur-sm hover:shadow-2xl transition-all">
                    <div className="relative h-56 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setActiveCategory(category)
                setVisibleProjects(4)
              }}
              className={`rounded-full px-4 ${activeCategory === category ? "bg-primary text-white" : ""}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden h-full bg-gradient-to-br from-background to-muted/20 border-muted/40 hover:border-primary/20 transition-all">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="mt-12 text-center">
            <Button onClick={loadMore} variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Load More Projects
            </Button>
          </div>
        )}
      </motion.div>
    </section>
  )
}
