"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Instagram, Heart } from "lucide-react"

const instagramPosts = [
  { id: 1, likes: 234, comments: 18 },
  { id: 2, likes: 456, comments: 32 },
  { id: 3, likes: 189, comments: 14 },
  { id: 4, likes: 567, comments: 45 },
  { id: 5, likes: 321, comments: 27 },
  { id: 6, likes: 412, comments: 38 },
]

export function SocialSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.4em] uppercase text-primary font-sans">
            Follow Us
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mt-4 mb-6">
            @reflexsions<span className="italic text-primary">beauty</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-sans font-light leading-relaxed">
            Join our community for daily inspiration, behind-the-scenes moments, 
            and the latest beauty trends.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/reflexsionsbeauty"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-square bg-secondary/30 overflow-hidden"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground/30">
                  <Instagram size={24} className="mx-auto mb-1" />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="flex items-center gap-4 text-primary-foreground">
                  <span className="flex items-center gap-1">
                    <Heart size={16} fill="currentColor" />
                    {post.likes}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/reflexsionsbeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-primary/50 text-foreground text-sm tracking-[0.2em] uppercase hover:border-primary hover:bg-primary/10 transition-all duration-300 font-sans"
          >
            <Instagram size={18} />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
