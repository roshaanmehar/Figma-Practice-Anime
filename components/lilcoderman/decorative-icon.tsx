"use client"

import { cn } from "@/lib/utils"

interface DecorativeIconProps {
  type: "asterisk" | "biohazard" | "dragon" | "diamond"
  className?: string
  color?: string
}

function AsteriskIcon({ className, color }: { className?: string; color?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill={color || "currentColor"} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" 
        stroke={color || "currentColor"} 
        strokeWidth="2" 
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

function BiohazardIcon({ className, color }: { className?: string; color?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill={color || "currentColor"} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M11.939 14c0 .173 .048 .351 .056 .533l-1.46 2.53a7.03 7.03 0 0 1 -3.167 -1.882a6.97 6.97 0 0 1 -1.675 -3.181h2.307a4.02 4.02 0 0 0 3.939 2" fill="none" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.073 9.995c-.178 .002 -.356 .017 -.532 .045l-1.468 -2.543a6.97 6.97 0 0 1 3.875 -.472a7.03 7.03 0 0 1 3.202 1.645l-1.838 1.322a4.03 4.03 0 0 0 -3.239 .003" fill="none" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.018 12.013c-.003 .178 -.02 .357 -.05 .534l2.54 1.468a6.97 6.97 0 0 0 .472 -3.875a7.03 7.03 0 0 0 -1.645 -3.202l-1.322 1.838a4.03 4.03 0 0 0 .005 3.237" fill="none" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 2a10 10 0 1 0 10 10a10 10 0 0 0 -10 -10" fill="none" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DragonIcon({ className, color }: { className?: string; color?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 48 48" 
      fill={color || "currentColor"} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 4C20 4 16 8 16 12C16 16 20 20 24 20C28 20 32 16 32 12C32 8 28 4 24 4ZM12 16C8 20 4 28 8 36C12 44 24 44 24 44C24 44 36 44 40 36C44 28 40 20 36 16C32 12 28 16 24 20C20 16 16 12 12 16Z" 
        fill="none" 
        stroke={color || "currentColor"} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DiamondIcon({ className, color }: { className?: string; color?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill={color || "currentColor"} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 2L12 22M2 12L22 12" stroke={color || "currentColor"} strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  )
}

export function DecorativeIcon({ type, className, color }: DecorativeIconProps) {
  const iconMap = {
    asterisk: AsteriskIcon,
    biohazard: BiohazardIcon,
    dragon: DragonIcon,
    diamond: DiamondIcon,
  }
  
  const IconComponent = iconMap[type]
  
  return (
    <div className={cn("inline-flex", className)}>
      <IconComponent className="w-full h-full" color={color} />
    </div>
  )
}
