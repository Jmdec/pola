import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"

const upcomingEvents = [
  {
    title: "Pola Foundation Day 2024",
    description:
      "Join us in celebrating the founding anniversary of our beloved municipality with parades, cultural performances, and community festivities.",
    date: "December 15, 2024",
    time: "8:00 AM - 10:00 PM",
    location: "Municipal Plaza",
    category: "Festival",
    attendees: 5000,
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Community Beach Cleanup Drive",
    description:
      "Help preserve our beautiful coastline by joining this volunteer-driven environmental initiative. All supplies provided.",
    date: "December 8, 2024",
    time: "6:00 AM - 12:00 PM",
    location: "Pola Beach",
    category: "Environment",
    attendees: 200,
    image: "/oil.jpg",
  },
  {
    title: "Christmas Lantern Festival",
    description:
      "Witness the spectacular display of traditional Filipino parols as communities compete for the most creative lantern designs.",
    date: "December 20, 2024",
    time: "6:00 PM - 10:00 PM",
    location: "Town Center",
    category: "Cultural",
    attendees: 3000,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Agricultural Trade Fair",
    description:
      "Showcase of local agricultural products, farm equipment, and sustainable farming techniques. Free entry for all.",
    date: "December 22, 2024",
    time: "8:00 AM - 5:00 PM",
    location: "Municipal Grounds",
    category: "Trade Fair",
    attendees: 1500,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "New Year's Eve Countdown",
    description:
      "Ring in 2025 with live music, fireworks, and festivities at the Municipal Plaza. Fun for the whole family!",
    date: "December 31, 2024",
    time: "9:00 PM - 1:00 AM",
    location: "Municipal Plaza",
    category: "Celebration",
    attendees: 8000,
    image: "/placeholder.svg?height=300&width=400",
  },
]

const pastEvents = [
  {
    title: "Coconut Festival 2024",
    date: "October 15, 2024",
    category: "Festival",
  },
  {
    title: "Youth Sports Festival",
    date: "September 20, 2024",
    category: "Sports",
  },
  {
    title: "Environmental Summit",
    date: "August 10, 2024",
    category: "Conference",
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Festival":
      return "bg-orange-100 text-orange-700"
    case "Environment":
      return "bg-green-100 text-green-700"
    case "Cultural":
      return "bg-purple-100 text-purple-700"
    case "Trade Fair":
      return "bg-blue-100 text-blue-700"
    case "Celebration":
      return "bg-pink-100 text-pink-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

export default function EventsPage() {
  const featuredEvent = upcomingEvents.find((event) => event.featured)
  const regularEvents = upcomingEvents.filter((event) => !event.featured)

  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="Events & Festivals in Pola"
          subtitle="Mark Your Calendar"
          description="Experience the vibrant community spirit through festivals, gatherings, and special events that bring Pola together."
          ctaText="View Calendar"
          ctaHref="#events"
          size="medium"
        />

        {/* Featured Event */}
        {featuredEvent && (
          <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4">
              <SectionHeader subtitle="Featured Event" title="Don't Miss This!" align="left" className="mb-8" />
              <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-all group">
                <div className="grid lg:grid-cols-2">
                  <div className="h-64 lg:h-auto overflow-hidden">
                    <img
                      src={featuredEvent.image || "/placeholder.svg"}
                      alt={featuredEvent.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 lg:p-8 flex flex-col justify-center">
                    <Badge className={`w-fit mb-4 ${getCategoryColor(featuredEvent.category)}`}>
                      {featuredEvent.category}
                    </Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">{featuredEvent.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featuredEvent.description}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>{featuredEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>{featuredEvent.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>{featuredEvent.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Users className="w-5 h-5 text-primary" />
                        <span>{featuredEvent.attendees.toLocaleString()}+ expected attendees</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Register Now</Button>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* All Events */}
        <section id="events" className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Events Grid */}
              <div className="lg:col-span-2">
                <SectionHeader subtitle="Coming Up" title="Upcoming Events" align="left" className="mb-8" />
                <div className="space-y-6">
                  {regularEvents.map((event, index) => (
                    <Card key={index} className="overflow-hidden border-border/50 hover:shadow-lg transition-all group">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="flex-1 p-6">
                          <Badge className={`w-fit mb-3 ${getCategoryColor(event.category)}`}>{event.category}</Badge>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {event.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {event.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </span>
                          </div>
                          <Button variant="ghost" className="text-primary p-0 h-auto hover:text-primary/80">
                            View Details <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Calendar Widget */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Event Calendar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square bg-secondary/50 rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">Calendar Widget</p>
                    </div>
                    <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                      View Full Calendar
                    </Button>
                  </CardContent>
                </Card>

                {/* Past Events */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Past Events</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {pastEvents.map((event, index) => (
                      <div key={index} className="py-2 border-b border-border/50 last:border-0">
                        <p className="font-medium text-foreground text-sm">{event.title}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-muted-foreground">{event.date}</span>
                          <Badge variant="outline" className="text-xs">
                            {event.category}
                          </Badge>
                        </div>
                      </div>
                    ))}
                    <Button variant="link" className="text-primary p-0 h-auto text-sm">
                      View All Past Events →
                    </Button>
                  </CardContent>
                </Card>

                {/* Submit Event */}
                <Card className="border-border/50 bg-gradient-to-br from-primary/10 to-accent/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Host an Event?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Submit your community event for inclusion in our calendar.
                    </p>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Submit Event
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[oklch(0.55_0.2_240)] to-[oklch(0.45_0.18_240)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              Never miss an event in Pola. Subscribe to our event notifications and be the first to know about upcoming
              activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[oklch(0.55_0.2_240)] hover:bg-white/90">Subscribe to Events</Button>
              <Button variant="outline" className="border-white/50 text-white hover:bg-white/20 bg-white/10">
                Download Calendar
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
