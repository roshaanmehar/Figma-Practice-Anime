"use client"

import { cn } from "@/lib/utils"

interface PlayButtonProps {
  className?: string
}

export function PlayButton({ className }: PlayButtonProps) {
  return (
    <button 
      className={cn(
        "bg-lc-gold text-lc-navy font-display text-xl md:text-2xl px-8 py-3",
        "uppercase tracking-wider",
        "hover:bg-opacity-90 transition-all hover:scale-105",
        "shadow-lg",
        className
      )}
    >
      Play Now
    </button>
  )
}
