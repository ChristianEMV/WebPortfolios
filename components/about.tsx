"use client";

import { Button } from "@/components/ui/button";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  CalendarClock,
  Coffee,
  Code,
  Globe,
  Briefcase,
  GraduationCap,
  Microchip,
} from "lucide-react";

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const experienceItems = [
    {
      year: "Present",
      title: "Practitioner",
      company: "Beecker",
      description:
        "The APIBI web application was successfully migrated to a new infrastructure, and the BeeJob mobile app was developed with enhanced functionality and an improved user experience.",
      icon: <Code className="h-5 w-5" />,
    },
    {
      year: "2023 - 2025",
      title: "Engineering",
      company: "Software Development and Management",
      description:
        "Ingeniería en Desarrollo y Gestión de Software. Enfoque en arquitectura de software eficiente, estructurada y reutilizable. Diseño de interfaces de usuario en diversas tecnologías. Conocimiento en metodologías de trabajo como Scrum, Kanban y DevOps.",
      icon: <Microchip className="h-5 w-5" />,
    },
    {
      year: "2021 - 2023",
      title: "Higher Technician",
      company: "Multiplatform Software Development.",
      description:
        "Técnico Superior Universitario en Desarrollo de Software (Multiplataforma) de septiembre 2021 a agosto 2023. Experiencia en desarrollo de aplicaciones web (Angular, NodeJS, React) y móviles (Kotlin, React Native). Manejo de bases de datos SQL y NoSQL (MySQL, MongoDB, Firebase) y conocimiento en IoT. Habilidades en investigación, resolución de problemas y nivel de inglés B1. Familiaridad con herramientas de Adobe como Illustrator, Photoshop y XD.",
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ];

  const stats = [
    {
      value: "100+",
      label: "Cups of Coffee",
      icon: <Coffee className="h-5 w-5" />,
    },
  ];

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute -left-10 -top-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="relative" style={{ y, opacity }}>
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20" />
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Full Stack Developer & UI Designer
            </h3>

            <p className="text-muted-foreground mb-6">
              I am a proactive cross-platform software developer with experience
              in frontend web development and mobile applications. I use
              technologies such as React, React Native, Angular, and Vue, and I
              stay up to date with the latest industry trends.
            </p>

            <p className="text-muted-foreground mb-8">
              I enjoy collaborating in multidisciplinary teams and value
              effective communication to achieve goals. I seek opportunities to
              grow professionally and contribute to the success of
              organizations. I am particularly interested in innovative projects
              that challenge my skills and allow me to learn continuously.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-none shadow-md bg-gradient-to-b from-background to-muted/30"
                >
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="text-primary mb-2">{stat.icon}</div>
                    <span className="text-2xl font-bold">{stat.value}</span>
                    <span className="text-xs text-muted-foreground">
                      {stat.label}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
            Experience Timeline
          </h3>

          <div className="relative border-l-2 border-primary/30 ml-4 md:mx-auto max-w-2xl">
            {experienceItems.map((item, index) => (
              <motion.div
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[11px] bg-background p-1 border-2 border-primary rounded-full">
                  {item.icon}
                </div>
                <Card className="ml-8 relative overflow-visible">
                  <div className="absolute -left-2 top-4 transform rotate-45 w-4 h-4 bg-background border-l border-b" />
                  <CardContent className="p-6">
                    <div className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary mb-2">
                      {item.year}
                    </div>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <h5 className="text-muted-foreground mb-2">
                      {item.company}
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
