"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Sparkles, Palette, Heart, Hand, Flower2, Droplets } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Hair Styling",
    description: "From elegant updos to transformative cuts, we sculpt your hair into a masterpiece that reflects your unique personality.",
    price: "From $85",
    features: ["Precision Cuts", "Color Artistry", "Styling", "Treatments"],
  },
  {
    icon: Palette,
    title: "Makeup Artistry",
    description: "Enhancing your natural beauty with techniques perfected over years of dedicated practice and artistic vision.",
    price: "From $120",
    features: ["Natural Glam", "Editorial", "Special Events", "Lessons"],
  },
  {
    icon: Heart,
    title: "Bridal Services",
    description: "Your most beautiful day deserves the most exquisite attention. Let us craft your perfect bridal look.",
    price: "From $350",
    features: ["Bridal Hair", "Bridal Makeup", "Trial Sessions", "On-location"],
  },
  {
    icon: Hand,
    title: "Nail Artistry",
    description: "Delicate designs and luxurious care for hands that tell your story through every elegant gesture.",
    price: "From $65",
    features: ["Manicure", "Nail Art", "Gel Extensions", "Spa Treatment"],
  },
  {
    icon: Flower2,
    title: "Facial Treatments",
    description: "Rejuvenating rituals that restore your skin's natural radiance and timeless glow.",
    price: "From $95",
    features: ["Deep Cleansing", "Anti-aging", "Hydration", "Custom Facials"],
  },
  {
    icon: Droplets,
    title: "Spa Experience",
    description: "Immerse yourself in pure relaxation with our curated spa rituals designed for complete rejuvenation.",
    price: "From $150",
    features: ["Body Wraps", "Massage", "Aromatherapy", "Detox"],
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
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
            Signature Services
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mt-4 mb-6">
            Crafted <span className="italic text-primary">Excellence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-sans font-light leading-relaxed">
            Each service is a carefully choreographed experience, designed to transform 
            not just your appearance, but how you feel about yourself.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className={`relative h-full p-8 transition-all duration-500 ${
                hoveredIndex === index ? "glass glow" : "bg-secondary/20"
              }`}>
                {/* Icon */}
                <div className="relative w-14 h-14 mb-6">
                  <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    hoveredIndex === index ? "bg-primary/20" : "bg-primary/10"
                  }`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon 
                      size={24} 
                      className={`transition-colors duration-300 ${
                        hoveredIndex === index ? "text-primary" : "text-primary/70"
                      }`} 
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-light mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-sans font-light text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs tracking-wider uppercase text-muted-foreground/70 font-sans px-3 py-1 border border-border/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <span className="text-lg text-primary font-light">
                    {service.price}
                  </span>
                  <motion.span
                    animate={{ x: hoveredIndex === index ? 5 : 0 }}
                    className="text-sm tracking-widest uppercase text-muted-foreground group-hover:text-foreground transition-colors font-sans"
                  >
                    Learn More →
                  </motion.span>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#booking"
            className="inline-block px-12 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 font-sans"
          >
            Book Your Experience
          </a>
        </motion.div>
      </div>
    </section>
  )
}
