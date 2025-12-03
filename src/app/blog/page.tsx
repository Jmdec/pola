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
    description: "Journey with us as we uncover the breathtaking waterfalls tucked away in Pola's mountainous terrain, perfect for adventure seekers and nature lovers.",
    date: "November 28, 2024",
    category: "Tourism",
    author: "Maria Santos",
    image: "/calima.jpg",
    featured: true,
  },
  {
    title: "Traditional Fishing Techniques of Pola",
    description: "Learn about the time-honored fishing methods passed down through generations of Pola fishermen, blending tradition with sustainability.",
    date: "November 25, 2024",
    category: "Culture",
    author: "Juan dela Cruz",
    image: "/traditional.jpg",
  },
  {
    title: "A Guide to Pola's Local Cuisine",
    description: "Discover the unique flavors of Pola through its local delicacies, from fresh seafood dishes to traditional Filipino recipes with a local twist.",
    date: "November 22, 2024",
    category: "Food",
    author: "Ana Reyes",
    image: "/cuisine.jpg",
  },
  {
    title: "Sustainable Farming Practices in Oriental Mindoro",
    description: "How local farmers are embracing eco-friendly agricultural methods to protect the environment while ensuring bountiful harvests.",
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
      <HeroSection
        title="Blog & Stories"
        description="Discover stories, insights, and updates from the heart of Pola, Oriental Mindoro" subtitle={""}      />

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 text-white">
              <Badge className="mb-3 md:mb-4 bg-blue-600 hover:bg-blue-700">
                {featuredPost.category}
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-base md:text-lg text-gray-200 mb-3 md:mb-4 max-w-3xl line-clamp-2 md:line-clamp-none">
                {featuredPost.description}
              </p>
              <p className="text-sm md:text-base text-gray-300">
                By {featuredPost.author} • {featuredPost.date}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Blog Posts Grid */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-5 md:py-6 w-full"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {regularPosts.map((post, index) => (
                <ContentCard
                  key={index}
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  category={post.category} href={""}                />
              ))}
            </div>

            <div className="text-center pt-4 md:pt-8">
              <Button size="lg" variant="outline" className="w-full md:w-auto">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 md:space-y-8">
            {/* Popular Posts */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-lg md:text-xl">Popular Posts</h3>
                </div>
                <ul className="space-y-3 md:space-y-4">
                  {popularPosts.map((post, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs md:text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-sm md:text-base text-gray-700 hover:text-blue-600 cursor-pointer line-clamp-2">
                        {post}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Categories Widget */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="font-bold text-lg md:text-xl mb-4 md:mb-6">Categories</h3>
                <div className="space-y-2 md:space-y-3">
                  {categories
                    .filter((c) => c !== "All")
                    .map((category) => (
                      <div
                        key={category}
                        className="flex items-center justify-between p-2 md:p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <span className="text-sm md:text-base text-gray-700">{category}</span>
                        <Badge variant="secondary" className="text-xs md:text-sm">
                          {Math.floor(Math.random() * 10) + 1}
                        </Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
              <CardContent className="p-4 md:p-6">
                <h3 className="font-bold text-lg md:text-xl mb-2">Subscribe to Our Blog</h3>
                <p className="text-sm md:text-base text-blue-100 mb-4 md:mb-6">
                  Get the latest articles delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
