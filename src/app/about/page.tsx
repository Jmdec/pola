import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SectionHeader } from "@/components/section-header"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  MapPin,
  Calendar,
  TrendingUp,
  Fish,
  Wheat,
  Building,
  Mountain,
  Landmark,
  GraduationCap,
} from "lucide-react"

const stats = [
  { value: "52,847", label: "Population (2020 Census)", icon: <Users className="w-6 h-6" /> },
  { value: "15", label: "Barangays", icon: <MapPin className="w-6 h-6" /> },
  { value: "1902", label: "Year Founded", icon: <Calendar className="w-6 h-6" /> },
  { value: "278.5 km²", label: "Land Area", icon: <Mountain className="w-6 h-6" /> },
]

const economyData = [
  {
    title: "Agriculture",
    description:
      "Rice, coconut, corn, and root crops form the backbone of Pola's agricultural sector, employing over 60% of the local workforce.",
    icon: <Wheat className="w-8 h-8" />,
  },
  {
    title: "Fisheries",
    description:
      "Coastal fishing and aquaculture provide livelihood for many families, with rich marine resources in surrounding waters.",
    icon: <Fish className="w-8 h-8" />,
  },
  {
    title: "Commerce",
    description:
      "Growing retail and service sectors support the local economy, with the town center serving as a commercial hub.",
    icon: <Building className="w-8 h-8" />,
  },
  {
    title: "Tourism",
    description:
      "Eco-tourism and beach destinations are emerging as significant contributors to local economic growth.",
    icon: <TrendingUp className="w-8 h-8" />,
  },
]

const landmarks = [
  
  {
    name: "Pola Beach",
    description:
      "A stunning stretch of coastline known for its clear waters and pristine sand, perfect for swimming and relaxation.",
    image: "/beach-coastline-philippines-clear-water.jpg",
  },
  {
    name: "Mt. Halcon View",
    description: "Scenic viewpoints offering glimpses of Mt. Halcon, one of the highest peaks in the Philippines.",
    image: "/mountain-view-landscape-philippines-sunrise.jpg",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
   <HeroSection
  title="About Pola, Oriental Mindoro"
  subtitle="Discover Our Story"
  description="Learn about the history, geography, economy, and cultural heritage that make Pola a unique destination in the Philippines."
  ctaText="Explore Our Heritage"
  ctaHref="#heritage"
  size="medium"
  backgroundImage="heritage.jpg" // <-- use backgroundImage instead of image
/>


        {/* Quick Stats */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 -mt-16 relative z-20">
              {stats.map((stat, index) => (
                <StatCard key={index} value={stat.value} label={stat.label} icon={stat.icon} />
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <SectionHeader
                  subtitle="Our History"
                  title="A Legacy of Resilience and Growth"
                  align="left"
                  className="mb-6"
                />
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Pola's history dates back to the Spanish colonial era when it was established as a small fishing and
                    farming community along the eastern coast of Mindoro Island. The town was officially founded in 1902
                    during the American colonial period.
                  </p>
                  <p className="leading-relaxed">
                    Throughout the years, Pola has grown from a quiet coastal settlement into a thriving municipality.
                    The town played a significant role during World War II and has since developed into an important
                    agricultural and fishing hub in Oriental Mindoro.
                  </p>
                  <p className="leading-relaxed">
                    Today, Pola stands as a testament to the resilience and industrious spirit of its people, preserving
                    its cultural heritage while embracing modern development and sustainable tourism.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img src="/heritage.jpg" alt="Historical Pola" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Geography Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img src="/aerial-view-coastal-town-mountains-philippines-min.jpg" alt="Pola Geography" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <SectionHeader
                  subtitle="Geography"
                  title="Where Mountains Meet the Sea"
                  align="left"
                  className="mb-6"
                />
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Pola is strategically located along the northeastern coast of Oriental Mindoro, facing the Verde
                    Island Passage, one of the world's most biodiverse marine corridors.
                  </p>
                  <p className="leading-relaxed">
                    The municipality features a diverse landscape that includes coastal plains ideal for agriculture,
                    rolling hills perfect for livestock grazing, and mountainous terrain that provides scenic vistas and
                    watershed protection.
                  </p>
                  <p className="leading-relaxed">
                    With approximately 278.5 square kilometers of land area and a coastline stretching several
                    kilometers, Pola offers both mountain and beach experiences for visitors and residents alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Economy Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Local Economy"
              title="Driving Growth and Prosperity"
              description="Pola's economy is built on diverse sectors that provide livelihoods for thousands of families."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {economyData.map((item, index) => (
                <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage & Landmarks */}
        <section id="heritage" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Heritage & Landmarks"
              title="Notable Places to Visit"
              description="Explore the historical sites and natural wonders that define Pola's unique character."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {landmarks.map((landmark, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-border/50 bg-card hover:shadow-xl transition-all group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                      <img
                        src={landmark.image || "/placeholder.svg"}
                        alt={landmark.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="flex-1 p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <Landmark className="w-5 h-5 text-primary" />
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">Heritage Site</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{landmark.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{landmark.description}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[oklch(0.55_0.2_240)] to-[oklch(0.45_0.18_240)] text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Education in Pola</h2>
            <p className="text-white/90 max-w-3xl mx-auto mb-6 text-lg leading-relaxed">
              Pola is home to numerous educational institutions, from elementary schools to high schools, ensuring
              quality education for the youth. The municipality continues to invest in educational infrastructure and
              programs to prepare future generations for success.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold">20+</div>
                <div className="text-white/80 text-sm">Elementary Schools</div>
              </div>
              <div>
                <div className="text-4xl font-bold">5</div>
                <div className="text-white/80 text-sm">High Schools</div>
              </div>
              <div>
                <div className="text-4xl font-bold">95%</div>
                <div className="text-white/80 text-sm">Literacy Rate</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
