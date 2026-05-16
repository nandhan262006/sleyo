"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    category: "Hair",
    title: "Elegant Updo",
    size: "tall",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Makeup",
    title: "Bridal Glam",
    size: "wide",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Hair",
    title: "Color Transformation",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Nails",
    title: "Artistic Design",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Bridal",
    title: "Wedding Day Ready",
    size: "tall",
    image:
      "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Makeup",
    title: "Editorial Look",
    size: "wide",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "Hair",
    title: "Balayage Magic",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "Facial",
    title: "Glow Treatment",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    category: "Bridal",
    title: "Classic Romance",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    category: "Makeup",
    title: "Natural Beauty",
    size: "tall",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 11,
    category: "Hair",
    title: "Bob Cut Perfection",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 12,
    category: "Nails",
    title: "French Elegance",
    size: "wide",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1200&auto=format&fit=crop",
  },
]

const categories = ["All", "Hair", "Makeup", "Bridal", "Nails", "Facial"]

export function PortfolioSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] =
    useState<(typeof portfolioItems)[0] | null>(null)

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.4em] uppercase text-primary font-sans">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mt-4 mb-6">
            Our <span className="italic text-primary">Gallery</span>
          </h2>

          <p className="max-w-2xl mx-auto text-muted-foreground font-sans font-light leading-relaxed">
            A curated collection of transformations, each telling a unique story
            of beauty, confidence, and artistic expression.
          </p>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm tracking-[0.15em] uppercase transition-all duration-300 font-sans ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border border-border/50 text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative group break-inside-avoid cursor-pointer overflow-hidden rounded-2xl ${
                  item.size === "tall"
                    ? "aspect-[3/4]"
                    : item.size === "wide"
                    ? "aspect-[4/3]"
                    : "aspect-square"
                }`}
                onClick={() => setSelectedItem(item)}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs tracking-[0.2em] uppercase text-primary font-sans block mb-2">
                        {item.category}
                      </span>

                      <h3 className="text-xl text-white font-light">
                        {item.title}
                      </h3>
                    </div>

                    {/* Zoom Button */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <ZoomIn size={18} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Border */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-primary/40 transition-colors duration-500 rounded-2xl" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="group relative px-12 py-4 border border-primary/50 text-foreground text-sm tracking-[0.2em] uppercase hover:border-primary transition-colors duration-300 font-sans">
            View Full Gallery

            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 80vw"
              />

              <div className="absolute inset-0 bg-black/20" />

              {/* Info */}
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-3xl font-light">
                  {selectedItem.title}
                </div>

                <div className="text-sm text-primary mt-2 tracking-widest uppercase">
                  {selectedItem.category}
                </div>
              </div>

              {/* Close */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X size={20} className="text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}