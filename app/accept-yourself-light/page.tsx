import Image from "next/image"
import { Header, SocialIcons, ScrollIndicator, DecorativeIcon } from "@/components/lilcoderman"

export default function AcceptYourselfLightPage() {
  return (
    <main className="min-h-screen bg-lc-cream relative overflow-hidden">
      {/* Header */}
      <Header variant="light" className="absolute top-0 left-0 right-0 z-20" />
      
      {/* Main Content */}
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 pt-20 pb-8">
        
        {/* Left Side - Typography */}
        <div className="flex-1 flex flex-col justify-center relative z-10">
          <div className="relative">
            {/* Main Headline with inline decorative elements */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] leading-[0.95] uppercase text-lc-navy tracking-tight">
              Accept
              <DecorativeIcon type="diamond" className="inline-block w-8 h-8 md:w-10 md:h-10 mx-2 align-middle" color="#734edc" />
              Your<br />
              Whole
              <DecorativeIcon type="diamond" className="inline-block w-8 h-8 md:w-10 md:h-10 mx-2 align-middle" color="#734edc" />
              Self
            </h1>
          </div>
          
          {/* Body Text */}
          <div className="mt-8 max-w-[220px]">
            <p className="text-xs md:text-sm text-lc-navy/70 leading-relaxed">
              Everyone carries a shadow, and acknowledging it is the path to wholeness. Embrace the full spectrum of your being.
            </p>
          </div>
        </div>
        
        {/* Right Side - Character */}
        <div className="flex-1 flex items-center justify-center relative mt-8 lg:mt-0">
          <div className="relative w-full max-w-md lg:max-w-lg">
            <Image
              src="/images/characters/accept-yourself.jpg"
              alt="Contemplative anime character in light clothing"
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
        <SocialIcons variant="light" />
      </div>
      
      <div className="absolute bottom-6 right-6 z-20">
        <ScrollIndicator variant="light" />
      </div>
    </main>
  )
}
