import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ContentCardProps {
  title: string
  description: string
  image?: string
  date?: string
  category?: string
  href: string
  variant?: "default" | "featured" | "horizontal"
}

export function ContentCard({
  title,
  description,
  image,
  date,
  category,
  href,
  variant = "default",
}: ContentCardProps) {
  if (variant === "horizontal") {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50 bg-card py-0">
        <div className="flex flex-col sm:flex-row">
          {image && (
            <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          <div className="flex-1 p-6">
            {category && (
              <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">
                {category}
              </Badge>
            )}
            <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </CardTitle>
            <CardDescription className="line-clamp-2 mb-4">{description}</CardDescription>
            <div className="flex items-center justify-between">
              {date && (
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{date}</span>
                </div>
              )}
             
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card
      className={cn(
        "overflow-hidden hover:shadow-xl transition-all duration-300 group border-border/50 bg-card py-0",
        variant === "featured" && "lg:col-span-2 lg:row-span-2",
      )}
    >
      {image && (
        <div className={cn("overflow-hidden", variant === "featured" ? "h-64 lg:h-80" : "h-48")}>
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        {category && (
          <Badge variant="secondary" className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20">
            {category}
          </Badge>
        )}
        <CardTitle
          className={cn(
            "group-hover:text-primary transition-colors line-clamp-2",
            variant === "featured" ? "text-2xl" : "text-lg",
          )}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className={cn("line-clamp-3", variant === "featured" && "text-base")}>
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-0">
        {date && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        )}
        <Button asChild variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto">
         
        </Button>
      </CardFooter>
    </Card>
  )
}