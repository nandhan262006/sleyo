"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"

export function FloatingElements() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Cursor Glow Effect - Hidden on mobile */}
      <motion.div
        className="cursor-glow hidden lg:block"
        animate={{
          x: cursorPosition.x,
          y: cursorPosition.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Floating WhatsApp Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.a
            href="https://wa.me/13105550123"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={24} />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  )
}
