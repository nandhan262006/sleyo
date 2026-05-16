"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, Clock, User, Phone, MessageSquare, Sparkles } from "lucide-react"

const services = [
  "Hair Styling",
  "Makeup Artistry",
  "Bridal Services",
  "Nail Artistry",
  "Facial Treatment",
  "Spa Experience",
]

export function BookingSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Replace with your form endpoint (Formspree, EmailJS, etc.)
    // Example: await fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(formData) })
    await new Promise((r) => setTimeout(r, 800)) // Simulate network
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", phone: "", service: "", date: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="booking" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.4em] uppercase text-primary font-sans">
            Book Now
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mt-4 mb-6">
            Begin Your <span className="italic text-primary">Journey</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-sans font-light leading-relaxed">
            Ready to experience transformative beauty? Reserve your appointment 
            and let us craft an experience tailored just for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Booking Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Info Card */}
            <div className="glass glow p-8">
              <h3 className="text-2xl font-light mb-6 flex items-center gap-3">
                <Sparkles size={24} className="text-primary" />
                Why Book With Us
              </h3>
              
              <ul className="space-y-4 font-sans font-light text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Personalized consultation before every service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Premium products from world-renowned brands</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Complimentary beverages and relaxation amenities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Flexible rescheduling up to 24 hours before</span>
                </li>
              </ul>
            </div>

            {/* Operating Hours */}
            <div className="glass p-8">
              <h3 className="text-2xl font-light mb-6 flex items-center gap-3">
                <Clock size={24} className="text-primary" />
                Operating Hours
              </h3>
              
              <div className="space-y-3 font-sans font-light">
                <div className="flex justify-between text-muted-foreground">
                  <span>Monday - Friday</span>
                  <span className="text-foreground">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Saturday</span>
                  <span className="text-foreground">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Sunday</span>
                  <span className="text-foreground">By Appointment</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass glow p-8 md:p-10 space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 font-sans text-sm ${
                    focusedField === "name" || formData.name
                      ? "-top-2 text-xs text-primary bg-card px-2"
                      : "top-4 text-muted-foreground"
                  }`}
                >
                  Your Name
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-4 bg-input/50 border border-border/50 focus:border-primary outline-none transition-colors font-sans text-foreground"
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 font-sans text-sm ${
                    focusedField === "phone" || formData.phone
                      ? "-top-2 text-xs text-primary bg-card px-2"
                      : "top-4 text-muted-foreground"
                  }`}
                >
                  Phone Number
                </label>
                <div className="relative">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-4 bg-input/50 border border-border/50 focus:border-primary outline-none transition-colors font-sans text-foreground"
                    required
                  />
                </div>
              </div>

              {/* Service Select */}
              <div className="relative">
                <label className="block text-xs text-primary font-sans mb-2 tracking-wider uppercase">
                  Select Service
                </label>
                <div className="relative">
                  <Sparkles size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-input/50 border border-border/50 focus:border-primary outline-none transition-colors font-sans text-foreground appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Choose a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date Field */}
              <div className="relative">
                <label className="block text-xs text-primary font-sans mb-2 tracking-wider uppercase">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-input/50 border border-border/50 focus:border-primary outline-none transition-colors font-sans text-foreground"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-xs text-primary font-sans mb-2 tracking-wider uppercase">
                  Special Requests
                </label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-4 top-4 text-muted-foreground" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 bg-input/50 border border-border/50 focus:border-primary outline-none transition-colors font-sans text-foreground resize-none"
                    placeholder="Tell us about your vision..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              {submitted ? (
                <div className="w-full py-4 bg-primary/20 border border-primary/50 text-primary text-sm tracking-[0.2em] uppercase font-sans text-center">
                  ✦ Request Received — We will contact you shortly ✦
                </div>
              ) : (
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase font-sans hover:bg-primary/90 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Request Appointment"}
                </motion.button>
              )}

              <p className="text-xs text-center text-muted-foreground font-sans">
                We&apos;ll contact you within 24 hours to confirm your booking.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
