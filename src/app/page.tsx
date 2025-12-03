import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SectionHeader } from "@/components/section-header"
import { FeatureCard } from "@/components/feature-card"
import { ContentCard } from "@/components/content-card"
import { StatCard } from "@/components/stat-card"
import { LoadingScreen } from "@/components/loading-screen"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Palmtree, Church, Wheat, Music, MapPin, Users, Landmark, Ship, ArrowRight } from "lucide-react"

const highlights = [
  {
    title: "Pristine Beaches",
    description:
      "Experience crystal-clear waters and white sand beaches perfect for swimming, snorkeling, and relaxation.",
    icon: <Palmtree className="w-6 h-6" />,
    image: "/tropical-beach-clear-water-white-sand-philippines.jpg",
  },
  {
    title: "Rich Heritage",
    description: "Discover centuries-old churches, ancestral homes, and historical landmarks that tell Pola's story.",
    icon: <Church className="w-6 h-6" />,
    image: "/old-spanish-church-philippines-heritage.jpg",
  },
  {
    title: "Agricultural Abundance",
    description: "Explore lush farmlands producing rice, coconut, and tropical fruits that sustain local communities.",
    icon: <Wheat className="w-6 h-6" />,
    image: "/rice-fields-agriculture-tropical-philippines.jpg",
  },
  {
    title: "Vibrant Culture",
    description: "Experience colorful festivals, traditional dances, and warm Filipino hospitality year-round.",
    icon: <Music className="w-6 h-6" />,
    image: "/filipino-festival-colorful-celebration-dancers.jpg",
  },
]

const latestNews = [
  {
    title: "Pola Beach Resort Receives National Tourism Award",
    description: "The municipality's flagship beach resort has been recognized for sustainable tourism practices.",
    date: "November 28, 2024",
    category: "Tourism",
    image: "/beach-resort-award-ceremony.jpg",
  },
  {
    title: "New Road Infrastructure Project Completed",
    description: "The provincial road connecting Pola to neighboring municipalities has been fully renovated.",
    date: "November 25, 2024",
    category: "Infrastructure",
    image: "/road-construction-philippines-completed.jpg",
  },
  {
    title: "Agricultural Fair Showcases Local Produce",
    description: "Farmers from across Oriental Mindoro gather to display their best harvests and products.",
    date: "November 22, 2024",
    category: "Agriculture",
    image: "/agricultural-fair-farmers-market-vegetables.jpg",
  },
]

const upcomingEvents = [
  {
    title: "Pola Foundation Day 2024",
    description: "Join us in celebrating the founding anniversary of our beloved municipality.",
    date: "December 15, 2024",
    category: "Festival",
     image: "/oil.jpg",
  },
  {
    title: "Beach Cleanup Drive",
    description: "Community initiative to preserve our beautiful coastline for future generations.",
    date: "December 8, 2024",
    category: "Environment",
    image: "/oil.jpg" // added image property
  },
];


export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        {/* Hero Section */}
          <HeroSection
          title="Welcome to Pola, Oriental Mindoro"
          subtitle="Gateway to Paradise"
          description="Discover pristine beaches, rich cultural heritage, and the warmth of Filipino hospitality in one of the Philippines' hidden gems."
          ctaText="Explore Pola"
          ctaHref="/about"
          secondaryCtaText="View Events"
          secondaryCtaHref="/events"
          size="large"
          backgroundImage="/beautiful-beach-sunset-philippines-aerial-view.jpg"
        />

        {/* Quick Stats */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 -mt-20 relative z-20">
              <StatCard value="50K+" label="Population" icon={<Users className="w-6 h-6" />} />
              <StatCard value="15+" label="Barangays" icon={<MapPin className="w-6 h-6" />} />
              <StatCard value="12" label="Heritage Sites" icon={<Landmark className="w-6 h-6" />} />
              <StatCard value="5" label="Beach Resorts" icon={<Ship className="w-6 h-6" />} />
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Discover"
              title="What Makes Pola Special"
              description="From breathtaking natural wonders to rich cultural traditions, Pola offers unforgettable experiences for every visitor."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <FeatureCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Destination */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">Featured Destination</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  Pola Beach — Where Paradise Meets Tranquility
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Stretching along the eastern coast of Oriental Mindoro, Pola Beach offers miles of pristine shoreline
                  with crystal-clear waters and powdery white sand. Whether you seek adventure or relaxation, our
                  beaches provide the perfect escape from the everyday hustle.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Crystal-clear waters perfect for swimming",
                    "Vibrant marine life for snorkeling",
                    "Stunning sunrise and sunset views",
                    "Beachfront accommodations available",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/about">Learn More About Pola</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img src="/beautiful-beach-sunset-philippines-aerial-view.jpg" alt="Pola Beach" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-background hidden md:block">
                  <img
                    src="/snorkeling-underwater-coral-reef-fish.jpg"
                    alt="Underwater activities"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <SectionHeader subtitle="Stay Informed" title="Latest News & Updates" align="left" className="mb-0" />
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/news" className="flex items-center gap-2">
                  View All News <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestNews.map((news, index) => (
                <ContentCard
                  key={index}
                  title={news.title}
                  description={news.description}
                  date={news.date}
                  category={news.category}
                  image={news.image}
                  href="/news"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <SectionHeader subtitle="Mark Your Calendar" title="Upcoming Events" align="left" className="mb-6" />
                <p className="text-muted-foreground mb-6">
                  Join us in celebrating Pola's vibrant community through festivals, gatherings, and special events
                  throughout the year.
                </p>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/events" className="flex items-center gap-2">
                    View All Events <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="lg:col-span-2 space-y-4">
                {upcomingEvents.map((event, index) => (
                  <ContentCard
                    key={index}
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    category={event.category}
                    href="/events"
                    variant="horizontal"
                    image={`/placeholder.svg?height=200&width=300&query=${event.category === "Festival" ? "Filipino festival celebration" : "beach cleanup volunteers"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[oklch(0.55_0.2_240)] to-[oklch(0.45_0.18_240)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Explore Pola?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Plan your visit today and discover why Pola is one of Oriental Mindoro's most treasured destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.55_0.2_240)] hover:bg-white/90">
                <Link href="/about">Learn About Pola</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/20 bg-white/10"
              >
                <Link href="/events">View Events</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
