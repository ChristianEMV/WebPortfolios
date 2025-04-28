"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Database,
  Globe,
  Layout,
  type LucideIcon,
  Settings,
  Smartphone,
  Layers,
  Terminal,
  Figma,
  GitBranch,
  Zap,
  BarChart,
  Server,
} from "lucide-react"

type SkillCategory = {
  title: string
  icon: LucideIcon
  skills: {
    name: string
    level: number
  }[]
}

export function Skills() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: Layout,
      skills: [
        { name: "React/Next.js/Vite.js", level: 75 },
        { name: "Angular", level: 40 },
        { name: "React Native", level: 60 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 70 },
        { name: "HTML/CSS", level: 98 },
      ],
    },
    {
      title: "Backend",
      icon: Settings,
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Spring", level: 70 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 60 },
      ],
    },
    {
      title: "Tools & Others",
      icon: GitBranch,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 40 },
        { name: "CI/CD", level: 82 },
        { name: "Jenkins", level: 30 },
        { name: "AWS", level: 50 },
        { name: "Postman", level: 80 },
      ],
    },
  ]

  const technologies = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Zap },
    { name: "TypeScript", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "MySQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Figma", icon: Figma },
    { name: "Docker", icon: Settings },
    { name: "AWS", icon: Globe },
    { name: "Git", icon: GitBranch },
    { name: "Java", icon: Terminal },
    { name: "React Native", icon: Smartphone },
    { name: "LucidChart", icon: Layers },
    { name: "Postman", icon: BarChart },
  ]

  return (
    <section id="skills" ref={ref} className="py-32 relative">
      {/* Background elements */}
      <div className="absolute w-full h-full inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
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
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With a strong foundation in both frontend and backend technologies, I bring a comprehensive skill set to
            create exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skill progress bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-background to-muted/30 border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 -mt-10 -mr-10 bg-primary/10 rounded-full blur-xl" />

                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>

                    <div className="space-y-5 relative">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Technologies grid */}
        <h3 className="text-2xl font-semibold text-center mb-10">Technologies I Work With</h3>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => {
            const TechIcon = tech.icon
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-muted hover:border-primary/30 hover:bg-primary/5 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
              >
                <TechIcon className="h-8 w-8 mb-2 text-primary" />
                <span className="text-xs text-center">{tech.name}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

