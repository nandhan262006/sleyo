"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const timelineEvents = [
  {
    year: "2015",
    title: "The Beginning",
    description: "A dream sparked in a small studio, fueled by passion for transformative beauty and the art of making every client feel extraordinary.",
  },
  {
    year: "2018",
    title: "First Studio",
    description: "Opened our first dedicated space, a sanctuary where beauty meets artistry. Every corner designed to inspire confidence and elegance.",
  },
  {
    year: "2021",
    title: "Award Recognition",
    description: "Honored with prestigious industry awards, recognizing our commitment to excellence and innovative approach to luxury beauty services.",
  },
  {
    year: "Today",
    title: "A Legacy of Beauty",
    description: "Continuing to craft exceptional experiences, one client at a time. Your beauty journey is our greatest masterpiece.",
  },
]

export function StorySection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/30 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm tracking-[0.4em] uppercase text-primary font-sans">
            The Journey
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mt-4 mb-6">
            My <span className="italic text-primary">Story</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-sans font-light leading-relaxed">
            Every great journey begins with a single step. Mine started with a brush, 
            a vision, and an unwavering belief that beauty is the ultimate form of self-expression.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Portrait Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Portrait Placeholder */}
            <div className="relative aspect-[4/5] bg-secondary/30 overflow-hidden">
              <Image
                src="/story-portrait.png"
                alt="Beauty artist story portrait"
                fill
                className="object-cover"
                priority
              />
              
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -right-8 md:right-8 max-w-xs glass p-6 glow"
            >
              <p className="text-lg italic text-foreground leading-relaxed">
                &quot;Beauty is not about perfection. It&apos;s about celebrating the unique artistry within each person.&quot;
              </p>
              <span className="block mt-4 text-sm text-primary font-sans tracking-widest uppercase">
                — The Founder
              </span>
            </motion.div>

            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-primary/10 -z-10" />
          </motion.div>

          {/* Timeline Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  className="relative pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-background border-2 border-primary">
                    <div className="absolute inset-1 rounded-full bg-primary" />
                  </div>

                  {/* Year */}
                  <span className="text-sm tracking-[0.3em] uppercase text-primary font-sans">
                    {event.year}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-light mt-2 mb-3">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground font-sans font-light leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
