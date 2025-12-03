import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Pola" },
  { href: "/news", label: "News" },
  { href: "/announcements", label: "Announcements" },
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Events" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[oklch(0.55_0.2_240)] to-[oklch(0.45_0.18_240)] text-white">
      {/* Wave Top */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path d="M0 80V40C360 10 720 60 1080 40C1260 30 1380 10 1440 0V80H0Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">POLA</h3>
                <p className="text-xs text-white/80">Oriental Mindoro</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Gateway to paradise in Oriental Mindoro. Discover pristine beaches, rich heritage, and warm Filipino
              hospitality.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm hover:pl-2 duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">Municipal Hall, Pola, Oriental Mindoro, Philippines 5206</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/80 flex-shrink-0" />
                <span className="text-white/80 text-sm">(043) 288-1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/80 flex-shrink-0" />
                <span className="text-white/80 text-sm">info@pola.gov.ph</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/80 text-sm mb-4">Subscribe to receive news and updates about Pola.</p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
              />
              <Button className="bg-white text-[oklch(0.55_0.2_240)] hover:bg-white/90 w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Municipality of Pola, Oriental Mindoro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
