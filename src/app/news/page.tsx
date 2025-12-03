import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SectionHeader } from "@/components/section-header"
import { ContentCard } from "@/components/content-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

const newsArticles = [
  {
    title: "Pola Beach Resort Receives National Tourism Award",
    description:
      "The municipality's flagship beach resort has been recognized for its sustainable tourism practices and excellent guest services, marking a significant milestone for local tourism.",
    date: "November 28, 2024",
    category: "Tourism",
    image: "/beautiful-beach-sunset-philippines-aerial-view.jpg",
    featured: true,
  },
  {
    title: "New Road Infrastructure Project Completed",
    description:
      "The provincial road connecting Pola to neighboring municipalities has been fully renovated, improving transportation and commerce in the region.",
    date: "November 25, 2024",
    category: "Infrastructure",
    image: "/road-construction-philippines-completed.jpg",
  },
  {
    title: "Agricultural Fair Showcases Local Produce",
    description:
      "Farmers from across Oriental Mindoro gathered to display their best harvests and products at the annual agricultural fair held in Pola.",
    date: "November 22, 2024",
    category: "Agriculture",
    image: "/agricultural-fair-farmers-market-vegetables.jpg",
  },
  {
    title: "LGU Launches Free Health Services Program",
    description:
      "The local government unit has initiated a comprehensive health services program providing free medical consultations and medicines to residents.",
    date: "November 20, 2024",
    category: "Health",
    image: "/health.jpg",
  },
  {
    title: "Youth Sports Festival Attracts Participants Region-wide",
    description:
      "Over 500 young athletes participated in the annual youth sports festival, competing in various sporting events and fostering camaraderie.",
    date: "November 18, 2024",
    category: "Sports",
    image: "/sports.jpg",
  },
  {
    title: "Fishermen's Cooperative Reports Record Harvest",
    description:
      "The Pola Fishermen's Cooperative announced a record-breaking catch this season, attributed to sustainable fishing practices and favorable weather.",
    date: "November 15, 2024",
    category: "Fisheries",
    image: "/fish.jpg",
  },
  {
    title: "New Library Opens in Town Center",
    description:
      "A modern public library equipped with computers and digital resources has opened its doors, providing educational opportunities for all ages.",
    date: "November 12, 2024",
    category: "Education",
    image: "/library.jpg",
  },
  {
    title: "Solar-Powered Street Lights Installed",
    description:
      "Environmentally-friendly solar street lights have been installed along major roads, improving safety and reducing energy costs.",
    date: "November 10, 2024",
    category: "Environment",
    image: "/streetlight.jpg",
  },
]

const categories = ["All", "Tourism", "Infrastructure", "Agriculture", "Health", "Sports", "Education", "Environment"]

export default function NewsPage() {
  const featuredNews = newsArticles.find((article) => article.featured)
  const regularNews = newsArticles.filter((article) => !article.featured)

  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="Latest News from Pola"
          subtitle="Stay Informed"
          description="Keep up with the latest developments, achievements, and stories from our vibrant community."
          ctaText="Subscribe to Updates"
          ctaHref="#newsletter"
          size="medium"
        />

        {/* Search and Filter */}
        <section className="py-8 bg-background border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={category === "All" ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap px-4 py-2"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search news..." className="pl-9" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews && (
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <SectionHeader subtitle="Featured Story" title="Top News This Week" align="left" className="mb-8" />
              <ContentCard
                title={featuredNews.title}
                description={featuredNews.description}
                date={featuredNews.date}
                category={featuredNews.category}
                image={featuredNews.image}
                href="/news/featured"
                variant="featured"
              />
            </div>
          </section>
        )}

        {/* All News */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader subtitle="Recent Updates" title="All News Articles" align="left" className="mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNews.map((article, index) => (
                <ContentCard
                  key={index}
                  title={article.title}
                  description={article.description}
                  date={article.date}
                  category={article.category}
                  image={article.image}
                  href={`/news/${index}`}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section
          id="newsletter"
          className="py-16 md:py-24 bg-gradient-to-br from-[oklch(0.55_0.2_240)] to-[oklch(0.45_0.18_240)] text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              Subscribe to our newsletter and receive the latest news from Pola directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
              />
              <Button className="bg-white text-[oklch(0.55_0.2_240)] hover:bg-white/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
