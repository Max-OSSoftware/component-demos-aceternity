import React from 'react'
import { cn } from "@/lib/utils"

// Separate Cards component
const Cards = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {children}
    </div>
  )
}

// Page component
export default function CardDemo3() {
  return (
    <div className="container mx-auto py-8">
      <Cards>
        {/* Your card content here */}
        <div className="bg-card text-card-foreground rounded-lg shadow-sm p-4">Card 1</div>
        <div className="bg-card text-card-foreground rounded-lg shadow-sm p-4">Card 2</div>
        <div className="bg-card text-card-foreground rounded-lg shadow-sm p-4">Card 3</div>
        <div className="bg-card text-card-foreground rounded-lg shadow-sm p-4">Card 4</div>
      </Cards>
    </div>
  )
}