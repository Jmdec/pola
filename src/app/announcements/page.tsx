import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, Calendar, Download, ExternalLink, Megaphone, FileText } from "lucide-react"

const announcements = [
  {
    title: "Notice of Public Hearing: Municipal Budget 2025",
    description:
      "All residents are invited to attend the public hearing for the proposed municipal budget for fiscal year 2025. Your input is valuable in shaping our community's future.",
    date: "December 5, 2024",
    type: "Public Hearing",
    priority: "high",
    department: "Municipal Budget Office",
  },
  {
    title: "Schedule of Tax Payment Deadlines",
    description:
      "Reminder to all property owners regarding the quarterly deadlines for real property tax payments. Avoid penalties by paying on time.",
    date: "December 3, 2024",
    type: "Reminder",
    priority: "medium",
    department: "Municipal Treasurer's Office",
  },
  {
    title: "Water Service Interruption Notice",
    description:
      "Scheduled maintenance will affect water supply in Barangays 1-5 on December 10, 2024, from 6:00 AM to 6:00 PM. Please store sufficient water.",
    date: "December 2, 2024",
    type: "Advisory",
    priority: "high",
    department: "Municipal Water District",
  },
  {
    title: "Senior Citizen ID Renewal Program",
    description:
      "All senior citizens are reminded to renew their IDs at the OSCA office. Bring necessary documents for faster processing.",
    date: "November 30, 2024",
    type: "Notice",
    priority: "low",
    department: "OSCA",
  },
  {
    title: "Business Permit Renewal Guidelines 2025",
    description:
      "Business owners are advised to start renewing their permits. Early renewal discounts available until January 15, 2025.",
    date: "November 28, 2024",
    type: "Guidelines",
    priority: "medium",
    department: "Business Permits and Licensing Office",
  },
  {
    title: "Community Health Day Announcement",
    description:
      "Free medical, dental, and eye checkups will be available at the Municipal Health Center on December 15, 2024. First come, first served basis.",
    date: "November 25, 2024",
    type: "Event",
    priority: "medium",
    department: "Municipal Health Office",
  },
]

const officialDocuments = [
  { name: "Municipal Ordinance No. 2024-15", date: "November 20, 2024" },
  { name: "Executive Order No. 45", date: "November 15, 2024" },
  { name: "Resolution No. 2024-082", date: "November 10, 2024" },
  { name: "Annual Investment Plan 2025", date: "November 5, 2024" },
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-700 border-red-200"
    case "medium":
      return "bg-amber-100 text-amber-700 border-amber-200"
    default:
      return "bg-green-100 text-green-700 border-green-200"
  }
}

export default function AnnouncementsPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="Official Announcements"
          subtitle="Community Updates"
          description="Stay informed about official notices, advisories, and important announcements from the Municipal Government of Pola."
          ctaText="View Latest Notice"
          ctaHref="#announcements"
          size="medium"
        />

        {/* Important Notice Banner */}
        <section className="py-4 bg-amber-50 border-b border-amber-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 text-amber-800">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">
                <strong>Important:</strong> Public hearing for Municipal Budget 2025 scheduled on December 5, 2024 at
                9:00 AM at the Municipal Session Hall.
              </p>
            </div>
          </div>
        </section>

        {/* Main Announcements */}
        <section id="announcements" className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Announcements List */}
              <div className="lg:col-span-2 space-y-6">
                <SectionHeader
                  subtitle="Latest Updates"
                  title="Municipal Announcements"
                  align="left"
                  className="mb-6"
                />
                {announcements.map((announcement, index) => (
                  <Card key={index} className="border-border/50 hover:shadow-lg transition-all">
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline" className={getPriorityColor(announcement.priority)}>
                          {announcement.priority === "high"
                            ? "Urgent"
                            : announcement.priority === "medium"
                              ? "Important"
                              : "General"}
                        </Badge>
                        <Badge variant="secondary">{announcement.type}</Badge>
                      </div>
                      <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{announcement.description}</p>
                      <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {announcement.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Megaphone className="w-4 h-4" />
                            {announcement.department}
                          </span>
                        </div>
                        
                      </div>
                    </CardContent>
                  </Card>
                ))}
            
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Official Documents */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <FileText className="w-5 h-5 text-primary" />
                      Official Documents
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {officialDocuments.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                      >
                        <div>
                          <p className="text-sm font-medium text-foreground">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">{doc.date}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="text-primary">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                    <Button variant="link" className="text-primary p-0 h-auto">
                      View All Documents →
                    </Button>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="border-border/50 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-lg">Need Assistance?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      For inquiries about announcements or official documents, please contact:
                    </p>
                    <div className="text-sm">
                      <p className="font-medium text-foreground">Municipal Information Office</p>
                      <p className="text-muted-foreground">Tel: (043) 288-1234</p>
                      <p className="text-muted-foreground">Email: info@pola.gov.ph</p>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Contact Us
                    </Button>
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
