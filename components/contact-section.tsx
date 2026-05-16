"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Elegance Avenue, Suite 500",
    subvalue: "Beverly Hills, CA 90210",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (310) 555-0123",
    href: "tel:+13105550123",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@reflexsions.com",
    href: "mailto:hello@reflexsions.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 9AM - 8PM",
    subvalue: "Sat: 10AM - 6PM",
  },
]

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
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
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mt-4 mb-6">
            Visit <span className="italic text-primary">Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-sans font-light leading-relaxed">
            We&apos;d love to welcome you to our sanctuary. Reach out to us 
            through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group glass p-6 hover:glow transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon size={20} className="text-primary" />
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-primary font-sans block mb-2">
                  {info.label}
                </span>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-lg font-light hover:text-primary transition-colors block"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-lg font-light block">{info.value}</span>
                )}
                {info.subvalue && (
                  <span className="text-sm text-muted-foreground font-sans block mt-1">
                    {info.subvalue}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px]"
          >
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-secondary/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground/50 font-sans tracking-widest uppercase">
                  <MapPin size={48} className="mx-auto mb-4 opacity-30" />
                  <span className="text-sm">Google Maps Embed</span>
                </div>
              </div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-primary/10 pointer-events-none" />
          </motion.div>
        </div>

        {/* Social Links & WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-16 border-t border-border/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-sm tracking-widest uppercase text-muted-foreground font-sans">
                Connect With Us
              </span>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/13105550123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-sm tracking-[0.15em] uppercase font-sans hover:bg-[#128C7E] transition-colors duration-300"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
