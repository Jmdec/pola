import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({ title, subtitle, description, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 md:mb-12", align === "center" && "text-center", className)}>
      {subtitle && <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">{subtitle}</p>}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">{title}</h2>
      {description && <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">{description}</p>}
    </div>
  )
}
