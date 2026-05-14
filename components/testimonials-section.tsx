"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sophia Williams",
    role: "Bridal Client",
    content: "My wedding day was absolutely perfect thanks to REFLEXSIONS. The attention to detail, the calming atmosphere, and the stunning results exceeded all my expectations. I felt like the most beautiful version of myself.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emma Richardson",
    role: "Regular Client",
    content: "I&apos;ve been coming here for two years now, and every visit feels like a retreat. The team understands exactly what I need, often before I do. It&apos;s not just a salon—it&apos;s an experience.",
    rating: 5,
  },
  {
    id: 3,
    name: "Isabella Chen",
    role: "Special Events",
    content: "For my anniversary dinner, I wanted to feel extraordinary. The makeup and styling were flawless. My husband couldn&apos;t stop complimenting me all evening. Truly transformative!",
    rating: 5,
  },
  {
    id: 4,
    name: "Charlotte Davis",
    role: "Bridal Party",
    content: "Our entire bridal party was pampered to perfection. The coordination was seamless, and everyone looked stunning. The photos turned out beautifully. Highly recommend!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mt-4 mb-6">
            Client <span className="italic text-primary">Stories</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-sans font-light leading-relaxed">
            Every transformation tells a story. Here are some words from those 
            who&apos;ve experienced the REFLEXSIONS difference.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Testimonial Card */}
          <div className="relative glass glow p-8 md:p-12 text-center">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Quote size={20} className="text-primary-foreground" />
            </div>

            {/* Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="pt-4"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-foreground/90">
                &quot;{testimonials[currentIndex].content}&quot;
              </p>

              {/* Author */}
              <div className="flex flex-col items-center gap-2">
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-2">
                  <span className="text-xl opacity-30">✦</span>
                </div>
                <h4 className="text-lg font-medium">{testimonials[currentIndex].name}</h4>
                <span className="text-sm tracking-widest uppercase text-primary font-sans">
                  {testimonials[currentIndex].role}
                </span>
              </div>
            </motion.div>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-primary/30" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-primary/30" />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20 pt-16 border-t border-border/20"
        >
          <div className="text-center">
            <span className="text-4xl md:text-5xl font-light text-primary">500+</span>
            <p className="text-sm tracking-widest uppercase text-muted-foreground font-sans mt-2">Happy Clients</p>
          </div>
          <div className="text-center">
            <span className="text-4xl md:text-5xl font-light text-primary">8+</span>
            <p className="text-sm tracking-widest uppercase text-muted-foreground font-sans mt-2">Years Experience</p>
          </div>
          <div className="text-center">
            <span className="text-4xl md:text-5xl font-light text-primary">15+</span>
            <p className="text-sm tracking-widest uppercase text-muted-foreground font-sans mt-2">Awards Won</p>
          </div>
          <div className="text-center">
            <span className="text-4xl md:text-5xl font-light text-primary">100%</span>
            <p className="text-sm tracking-widest uppercase text-muted-foreground font-sans mt-2">Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
