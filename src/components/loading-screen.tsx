"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-[oklch(0.55_0.2_240)] via-[oklch(0.75_0.12_220)] to-white">
      <div className="flex flex-col items-center gap-8">
        {/* Animated Pola Logo */}
        <div className="relative">
          <div className="text-4xl md:text-5xl font-bold text-white tracking-wider">POLA</div>
          <div className="text-sm md:text-base text-white/80 text-center mt-1">Oriental Mindoro</div>
        </div>

        {/* Wave Animation */}
        <div className="flex items-end gap-1 h-12">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-3 md:w-4 bg-white/90 rounded-full wave-animation wave-animation-delay-${i}`}
              style={{
                height: `${20 + i * 8}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
          {[...Array(5)].map((_, i) => (
            <div
              key={i + 5}
              className={`w-3 md:w-4 bg-white/90 rounded-full wave-animation`}
              style={{
                height: `${52 - i * 8}px`,
                animationDelay: `${(i + 5) * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <div className="shimmer-bg text-white/90 px-6 py-2 rounded-full text-sm">Discovering Paradise...</div>
      </div>
    </div>
  )
}
