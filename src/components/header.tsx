"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/announcements", label: "Announcements" },
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Events" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[oklch(0.55_0.2_240)] via-[oklch(0.65_0.15_220)] to-[oklch(0.75_0.12_220)] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-white tracking-wide">POLA</span>
              <span className="text-[10px] md:text-xs text-white/80 -mt-1">Oriental Mindoro</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "px-4 py-2 text-sm font-medium text-white/90 rounded-md transition-all duration-200",
                        "hover:bg-white/20 hover:text-white hover:scale-105",
                        pathname === item.href && "bg-white/25 text-white",
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button - Desktop */}
          <Button
            asChild
            className="hidden lg:flex bg-white text-[oklch(0.55_0.2_240)] hover:bg-white/90 hover:scale-105 transition-all shadow-md"
          >
            <Link href="/about">Explore Pola</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-gradient-to-b from-[oklch(0.55_0.2_240)] to-[oklch(0.75_0.12_220)] border-none"
            >
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-white" />
                    <span className="text-xl font-bold text-white">POLA</span>
                  </div>
                </div>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-4 py-3 text-base font-medium text-white/90 rounded-lg transition-all",
                        "hover:bg-white/20 hover:text-white hover:pl-6",
                        pathname === item.href && "bg-white/25 text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Button
                  asChild
                  className="mt-4 bg-white text-[oklch(0.55_0.2_240)] hover:bg-white/90"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/about">Explore Pola</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
