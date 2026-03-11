import Image from "next/image"
import { Header, SocialIcons, ScrollIndicator, DecorativeIcon } from "@/components/lilcoderman"

export default function AcceptYourselfDarkPage() {
  return (
    <main className="min-h-screen bg-lc-red relative overflow-hidden">
      {/* Header with Biohazard Icon */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4">
        <span className="text-xs font-medium tracking-widest uppercase text-white">
          LILCODERMAN
        </span>
        <div className="flex items-center gap-4">
          <DecorativeIcon type="biohazard" className="w-6 h-6" color="#ffffff" />
          <button className="p-2 hover:opacity-70 transition-opacity text-white" aria-label="Open menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 pt-20 pb-8">
        
        {/* Left Side - Typography */}
        <div className="flex-1 flex flex-col justify-center relative z-10">
          <div className="relative">
            {/* Main Headline with inline decorative elements */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] leading-[0.95] uppercase text-white tracking-tight">
              Accept
              <DecorativeIcon type="biohazard" className="inline-block w-8 h-8 md:w-10 md:h-10 mx-2 align-middle" color="#ffffff" />
              Your<br />
              Whole
              <DecorativeIcon type="diamond" className="inline-block w-8 h-8 md:w-10 md:h-10 mx-2 align-middle" color="#ffffff" />
              Self
            </h1>
          </div>
          
          {/* Body Text */}
          <div className="mt-8 max-w-[220px]">
            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              Everyone carries a shadow, and acknowledging it is the path to wholeness. Embrace the full spectrum of your being.
            </p>
          </div>
        </div>
        
        {/* Right Side - Character */}
        <div className="flex-1 flex items-center justify-center relative mt-8 lg:mt-0">
          <div className="relative w-full max-w-md lg:max-w-lg">
            <Image
              src="/images/characters/accept-yourself.jpg"
              alt="Contemplative anime character"
              width={500}
              height={700}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Footer Elements */}
      <div className="absolute bottom-6 left-6 z-20">
        <SocialIcons variant="dark" />
      </div>
      
      <div className="absolute bottom-6 right-6 z-20">
        <ScrollIndicator variant="dark" />
      </div>
    </main>
  )
}
