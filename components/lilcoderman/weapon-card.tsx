"use client"

import { cn } from "@/lib/utils"

interface WeaponCardProps {
  title: string
  stats: string[]
  description: string
  className?: string
}

export function WeaponCard({ title, stats, description, className }: WeaponCardProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="text-xs uppercase tracking-widest text-lc-navy/60">
        Weapon of Choice
      </div>
      
      <h3 className="font-display text-2xl md:text-3xl uppercase text-lc-navy leading-tight">
        {title}
      </h3>
      
      <ul className="flex flex-col gap-1">
        {stats.map((stat, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-lc-navy/80">
            <span className="w-2 h-2 bg-lc-purple rounded-full" />
            {stat}
          </li>
        ))}
      </ul>
      
      <p className="text-sm text-lc-navy/70 leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  )
}
