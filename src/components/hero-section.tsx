import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  backgroundImage?: string
  size?: "large" | "medium" | "small"
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText = "Explore Pola",
  ctaHref = "/about",
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImage,
  size = "medium",
}: HeroSectionProps) {
  // Map size to Tailwind height classes
  const heightClass = {
    large: "min-h-[80vh]",
    medium: "min-h-[50vh]",
    small: "min-h-[35vh]",
  }[size]

  return (
    <section className={cn("relative w-full flex items-center justify-center overflow-hidden", heightClass)}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.45_0.18_240)] via-[oklch(0.55_0.2_240)] to-[oklch(0.65_0.15_200)]" />

      {/* Background Image Overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path d="M0 120V60C240 20 480 0 720 20C960 40 1200 80 1440 60V120H0Z" fill="white" fillOpacity="0.1" />
          <path d="M0 120V80C240 40 480 20 720 40C960 60 1200 100 1440 80V120H0Z" fill="white" fillOpacity="0.2" />
          <path d="M0 120V100C240 70 480 50 720 70C960 90 1200 110 1440 100V120H0Z" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 text-center">
        <p className="text-white/80 text-sm md:text-base uppercase tracking-widest mb-4 animate-fade-in">
          {subtitle}
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8 text-pretty">{description}</p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          <Button
            asChild
            size="lg"
            className="bg-white text-[oklch(0.55_0.2_240)] hover:bg-white/90 hover:scale-105 transition-all shadow-lg px-8"
          >
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>

          {/* Secondary CTA */}
          {secondaryCtaText && secondaryCtaHref && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/20 hover:border-white transition-all px-8 bg-white/10"
            >
              <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
