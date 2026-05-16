import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BookingSection } from "@/components/booking-section"
import { SocialSection } from "@/components/social-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Personal Story Section */}
      <StorySection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Gallery */}
      <PortfolioSection />

      {/* Brand Philosophy */}
      <PhilosophySection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Booking Section */}
      <BookingSection />

      {/* Instagram/Social Section */}
      <SocialSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Elements (Cursor glow, WhatsApp button, Noise overlay) */}
      <FloatingElements />
    </main>
  )
}
