import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SectionHeader } from "@/components/section-header"
import { ContentCard } from "@/components/content-card"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, TrendingUp } from "lucide-react"

const blogPosts = [
  {
    title: "Exploring the Hidden Waterfalls of Pola",
    description:
      "Journey with us as we uncover the breathtaking waterfalls tucked away in Pola's mountainous terrain, perfect for adventure seekers and nature lovers.",
    date: "November 28, 2024",
    category: "Tourism",
    author: "Maria Santos",
    image: "/calima.jpg",
    featured: true,
  },
  {
    title: "Traditional Fishing Techniques of Pola",
    description:
      "Learn about the time-honored fishing methods passed down through generations of Pola fishermen, blending tradition with sustainability.",
    date: "November 25, 2024",
    category: "Culture",
    author: "Juan dela Cruz",
    image: "/traditional.jpg",
  },
  {
    title: "A Guide to Pola's Local Cuisine",
    description:
      "Discover the unique flavors of Pola through its local delicacies, from fresh seafood dishes to traditional Filipino recipes with a local twist.",
    date: "November 22, 2024",
    category: "Food",
    author: "Ana Reyes",
    image: "/cuisine.jpg",
  },
  {
    title: "Sustainable Farming Practices in Oriental Mindoro",
    description:
      "How local farmers are embracing eco-friendly agricultural methods to protect the environment while ensuring bountiful harvests.",
    date: "November 20, 2024",
    category: "Environment",
    author: "Pedro Gonzales",
    image: "/frming.jpg",
  },

]

const categories = ["All", "Tourism", "Culture", "Food", "Environment", "Heritage"]

const popularPosts = [
  "Top 10 Beaches to Visit in Pola",
  "Annual Fiesta: A Celebration Guide",
  "Best Snorkeling Spots Near Pola",
  "Local Handicrafts and Souvenirs",
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="Discover Pola Through Stories"
          subtitle="Our Blog"
          description="Explore articles about Pola's culture, tourism, environment, and community life written by locals and visitors alike."
          ctaText="Start Reading"
          ctaHref="#featured"
          size="medium"
        />

        {/* Featured Post */}
        {featuredPost && (
          <section id="featured" className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4">
              <SectionHeader subtitle="Featured Article" title="Editor's Pick" align="left" className="mb-8" />
              <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-all group">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto overflow-hidden">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4 bg-primary/10 text-primary">
                      {featuredPost.category}
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span>By {featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Main Content */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Blog Posts Grid */}
              <div className="lg:col-span-2">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                  <SectionHeader subtitle="Latest Posts" title="All Articles" align="left" className="mb-0" />
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search articles..." className="pl-9" />
                  </div>
                </div>

                {/* Categories */}
                <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
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

                {/* Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {regularPosts.map((post, index) => (
                    <ContentCard
                      key={index}
                      title={post.title}
                      description={post.description}
                      date={post.date}
                      category={post.category}
                      image={post.image}
                      href={`/blog/${index}`}
                    />
                  ))}
                </div>

                <div className="text-center mt-10">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Load More Articles
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Popular Posts */}
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-lg">Popular Posts</h3>
                    </div>
                    <ul className="space-y-3">
                      {popularPosts.map((post, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-start gap-3"
                          >
                            <span className="text-primary font-bold">{index + 1}.</span>
                            {post}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Categories Widget */}
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories
                        .filter((c) => c !== "All")
                        .map((category) => (
                          <a
                            key={category}
                            href="#"
                            className="flex items-center justify-between py-2 border-b border-border/50 last:border-0 text-muted-foreground hover:text-primary transition-colors text-sm"
                          >
                            <span>{category}</span>
                            <Badge variant="secondary" className="text-xs">
                              {Math.floor(Math.random() * 10) + 1}
                            </Badge>
                          </a>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="border-border/50 bg-gradient-to-br from-primary/10 to-accent/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Subscribe to Our Blog</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest articles delivered to your inbox.
                    </p>
                    <div className="space-y-2">
                      <Input placeholder="Your email address" className="bg-background" />
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
