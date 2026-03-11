"use client"

import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeaderProps {
  variant?: "dark" | "light"
  className?: string
}

export function Header({ variant = "dark", className }: HeaderProps) {
  const textColor = variant === "dark" ? "text-white" : "text-lc-navy"
  
  return (
    <header className={cn("flex items-center justify-between w-full px-6 py-4", className)}>
      <span className={cn("text-xs font-medium tracking-widest uppercase", textColor)}>
        LILCODERMAN
      </span>
      <button 
        className={cn("p-2 hover:opacity-70 transition-opacity", textColor)}
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>
    </header>
  )
}
