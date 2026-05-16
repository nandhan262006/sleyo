"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 animated-gradient"
        style={{ scale }}
      />

      {/* Floating Glow Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-soft-pink/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Portrait Placeholder */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ y, opacity }}
      >
        <div className="relative w-full max-w-lg aspect-[3/4] mx-auto">
          {/* Placeholder for owner portrait/video */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background/80 rounded-sm overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-muted-foreground/50 font-sans text-sm tracking-widest uppercase">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full border border-border/50 flex items-center justify-center">
                  <span className="text-4xl opacity-30">✦</span>
                </div>
                Owner Portrait
              </div>
            </div>
          </div>
          
          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-primary/20 rounded-sm pointer-events-none" />
          <div className="absolute -inset-8 border border-primary/10 rounded-sm pointer-events-none" />
        </div>
      </motion.div>

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        style={{ opacity }}
      >
        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-sm md:text-base tracking-[0.4em] uppercase text-foreground font-sans font-semibold">
            Welcome to
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.1em] mb-8 text-primary"
        >
          REFLEXSIONS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground mb-4 tracking-wide italic"
        >
          Beauty crafted as an experience
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground/80 mb-12 font-sans font-light leading-relaxed"
        >
          Where artistry meets elegance. Discover transformative beauty services 
          crafted with passion, precision, and an unwavering commitment to excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="#booking"
            className="group relative px-10 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase overflow-hidden font-sans"
          >
            <span className="relative z-10">Book Appointment</span>
            <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
          
          <Link
            href="#portfolio"
            className="group relative px-10 py-4 border border-primary/50 text-foreground text-sm tracking-[0.2em] uppercase hover:border-primary transition-colors duration-300 font-sans"
          >
            Explore My Work
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-sans">Scroll</span>
          <ArrowDown size={16} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
