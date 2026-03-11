import Image from "next/image"
import { Header, SocialIcons, DecorativeIcon } from "@/components/lilcoderman"

export default function BraveNewVisionsPage() {
  return (
    <main className="min-h-screen bg-lc-blue relative overflow-hidden">
      {/* Header */}
      <Header variant="dark" className="absolute top-0 left-0 right-0 z-20" />
      
      {/* Main Content */}
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 pt-20 pb-8">
        
        {/* Left Side - Typography & Badge */}
        <div className="flex-1 flex flex-col justify-center relative z-10">
          <div className="relative">
            {/* Main Headline */}
            <h1 className="font-display text-6xl md:text-7xl lg:text-[8rem] xl:text-[10rem] leading-[0.85] uppercase text-white text-shadow-3d-pink tracking-tight">
              Brave<br />
              New<br />
              Visions
            </h1>
            
            {/* Pink Badge */}
            <div className="absolute -bottom-4 left-0 md:left-8 lg:left-12">
              <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-lc-pink rounded-full flex items-center justify-center">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-lc-blue text-center leading-tight transform -rotate-12">
                  Face<br />Your<br />Fears
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Character & Body Text */}
        <div className="flex-1 flex flex-col items-end justify-center relative mt-8 lg:mt-0">
          {/* Character Image */}
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/images/characters/brave-new-visions.jpg"
              alt="Anime character with pink jacket"
              width={600}
              height={800}
              className="object-contain"
              priority
            />
          </div>
          
          {/* Body Text */}
          <div className="absolute top-4 right-0 max-w-[200px] text-right">
            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              Ever faced a dream so vivid it scared you? That&apos;s where courage meets vision. Will you step into that dream?
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer Elements */}
      <div className="absolute bottom-6 left-6 z-20">
        <SocialIcons variant="dark" />
      </div>
      
      <div className="absolute bottom-6 right-6 z-20">
        <DecorativeIcon type="dragon" className="w-10 h-10" color="#fe80a6" />
      </div>
    </main>
  )
}
