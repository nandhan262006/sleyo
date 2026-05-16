"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const philosophyPoints = [
  {
    number: "01",
    title: "Artistry First",
    description: "Every stroke, every cut, every application is an act of creation. We approach beauty as artists, not technicians.",
  },
  {
    number: "02",
    title: "Personalized Experience",
    description: "Your beauty journey is uniquely yours. We listen, understand, and craft experiences tailored to your vision.",
  },
  {
    number: "03",
    title: "Sustainable Luxury",
    description: "Premium results with conscious choices. We use ethically sourced, cruelty-free products that honor both beauty and nature.",
  },
]

export function PhilosophySection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="philosophy" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Image Placeholder */}
      <motion.div 
        className="absolute inset-0 bg-secondary/20"
        style={{ y }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-muted-foreground/20 font-sans text-sm tracking-widest uppercase">
            <span className="text-6xl block mb-4 opacity-20">✦</span>
            Background Image
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Large Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.4em] uppercase text-primary font-sans">
              Our Philosophy
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mt-6 leading-tight">
              Where{" "}
              <span className="italic text-primary">passion</span>
              <br />
              meets{" "}
              <span className="italic text-accent">purpose</span>
            </h2>

            <p className="text-lg text-muted-foreground font-sans font-light leading-relaxed mt-8 max-w-lg">
              We believe that true beauty emerges when artistry, intention, and 
              care converge. Every client who walks through our doors isn&apos;t just 
              receiving a service—they&apos;re embarking on a transformative journey.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <a
                href="#about"
                className="inline-flex items-center gap-4 text-primary hover:text-foreground transition-colors font-sans tracking-widest uppercase text-sm group"
              >
                <span>Discover Our Story</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Philosophy Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                className="group relative pl-20 py-6 border-l border-border/30 hover:border-primary/50 transition-colors duration-500"
              >
                {/* Number */}
                <span className="absolute left-6 top-6 text-3xl font-light text-primary/30 group-hover:text-primary/60 transition-colors duration-500">
                  {point.number}
                </span>

                {/* Content */}
                <h3 className="text-2xl font-light mb-3 group-hover:text-primary transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-muted-foreground font-sans font-light leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Large Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <span className="text-6xl text-primary/30">&quot;</span>
            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed -mt-8">
              Beauty is the promise of happiness. We are here to help you 
              <span className="italic text-primary"> discover yours</span>.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-16 h-[1px] bg-primary/30" />
              <span className="text-sm tracking-[0.3em] uppercase text-primary font-sans">
                The Founder
              </span>
              <div className="w-16 h-[1px] bg-primary/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
