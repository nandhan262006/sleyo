"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Facebook, Mail, ArrowUp } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Hair Styling", href: "#services" },
    { label: "Makeup Artistry", href: "#services" },
    { label: "Bridal Services", href: "#services" },
    { label: "Nail Artistry", href: "#services" },
    { label: "Facial Treatments", href: "#services" },
    { label: "Spa Experience", href: "#services" },
  ],
  company: [
    { label: "Our Story", href: "#about" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-20 border-t border-border/20">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-light tracking-[0.15em]">REFLEXSIONS</span>
            </Link>
            <p className="text-muted-foreground font-sans font-light leading-relaxed mb-6">
              Where artistry meets elegance. Crafting transformative beauty experiences since 2015.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="mailto:hello@reflexsions.com"
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-primary font-sans mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground font-sans font-light hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-primary font-sans mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground font-sans font-light hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-primary font-sans mb-6">
              Stay Inspired
            </h4>
            <p className="text-muted-foreground font-sans font-light mb-4">
              Subscribe for exclusive offers and beauty tips.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-input/50 border border-border/50 focus:border-primary outline-none transition-colors font-sans text-sm"
              />
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-sans hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-sans">
            © {new Date().getFullYear()} REFLEXSIONS. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground font-sans hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground font-sans hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
