import Image from "next/image"
import { Header, SocialIcons, DecorativeIcon } from "@/components/lilcoderman"

export default function DareToDazzlePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-lc-cyan to-lc-pink relative overflow-hidden">
      {/* Header */}
      <Header variant="light" className="absolute top-0 left-0 right-0 z-20" />
      
      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 pt-20 pb-8 relative">
        
        {/* Large Typography with Character Overlay */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Main Headline - Letterpress Effect */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] leading-[0.9] uppercase text-white/30 tracking-tight text-center mix-blend-overlay">
            Dare To<br />
            Dazzle
          </h1>
          
          {/* Character Image - Overlapping */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-sm md:max-w-md lg:max-w-lg z-10">
            <Image
              src="/images/characters/dare-to-dazzle.jpg"
              alt="Stylish anime character in blue jacket"
              width={500}
              height={700}
              className="object-contain mx-auto"
              priority
            />
          </div>
        </div>
        
        {/* Left Body Text */}
        <div className="absolute left-6 lg:left-12 bottom-1/4 max-w-[180px]">
          <p className="text-xs text-lc-navy/70 leading-relaxed">
            Everyone shares the same ultimate fate. So why not live it up in style and bow out with flair?
          </p>
        </div>
        
        {/* Right Tagline */}
        <div className="absolute right-6 lg:right-12 bottom-1/4 text-right">
          <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-lc-navy">
            Whatever you do,<br />
            do it with style.
          </p>
        </div>
      </div>
      
      {/* Footer Elements */}
      <div className="absolute bottom-6 left-6 z-20">
        <SocialIcons variant="light" />
      </div>
      
      <div className="absolute bottom-6 right-6 z-20">
        <DecorativeIcon type="asterisk" className="w-8 h-8" color="#3341e9" />
      </div>
    </main>
  )
}
