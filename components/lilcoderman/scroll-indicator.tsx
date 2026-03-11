"use client"

import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScrollIndicatorProps {
  variant?: "dark" | "light"
  className?: string
}

export function ScrollIndicator({ variant = "dark", className }: ScrollIndicatorProps) {
  const borderColor = variant === "dark" ? "border-white" : "border-lc-navy"
  const iconColor = variant === "dark" ? "text-white" : "text-lc-navy"
  
  return (
    <button 
      className={cn(
        "w-10 h-10 rounded-full border-2 flex items-center justify-center",
        "hover:scale-110 transition-transform",
        borderColor,
        className
      )}
      aria-label="Scroll down"
    >
      <ArrowDown className={cn("w-4 h-4", iconColor)} />
    </button>
  )
}
