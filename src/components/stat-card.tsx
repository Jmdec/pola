import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  value: string
  label: string
  icon?: React.ReactNode
  className?: string
}

export function StatCard({ value, label, icon, className }: StatCardProps) {
  return (
    <Card className={cn("border-border/50 bg-card hover:shadow-lg transition-all duration-300", className)}>
      <CardContent className="p-6 text-center">
        {icon && (
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</div>
        <div className="text-muted-foreground text-sm">{label}</div>
      </CardContent>
    </Card>
  )
}
