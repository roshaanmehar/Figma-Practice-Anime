import Image from "next/image"
import { Header, SocialIcons, WeaponCard, PlayButton } from "@/components/lilcoderman"

export default function DeathlyDaggerPage() {
  return (
    <main className="min-h-screen bg-lc-cream relative overflow-hidden">
      {/* Header */}
      <Header variant="light" className="absolute top-0 left-0 right-0 z-20" />
      
      {/* Main Content */}
      <div className="min-h-screen flex flex-col lg:flex-row items-stretch px-0 pt-16">
        
        {/* Left Side - Japanese Text & Character */}
        <div className="flex-1 flex items-center justify-center relative bg-gradient-to-br from-lc-cream to-lc-cream-dark p-6 lg:p-12">
          {/* Japanese Vertical Text */}
          <div className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2">
            <span className="font-jp text-5xl md:text-6xl lg:text-7xl xl:text-8xl writing-vertical text-lc-red/20 font-bold">
              不安定
            </span>
          </div>
          
          {/* Character */}
          <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md ml-12 lg:ml-16">
            <Image
              src="/images/characters/deathly-dagger.jpg"
              alt="The Deathly Dagger - armored anime character with sword"
              width={400}
              height={600}
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Right Side - Card Info */}
        <div className="flex-1 flex flex-col justify-between p-6 lg:p-12 bg-lc-cream">
          {/* Weapon Card */}
          <div className="flex-1 flex items-center">
            <WeaponCard
              title="The Deathly Dagger"
              stats={[
                "Bloodlust Edge",
                "Chaotic Strikes",
                "Venomous Blades"
              ]}
              description="The Psycho Killer— unhinged and terrifying, wielding madness like a blade against the night."
            />
          </div>
          
          {/* Bottom Row - CTA & Social */}
          <div className="flex items-end justify-between mt-8">
            <PlayButton />
            <SocialIcons variant="light" />
          </div>
        </div>
      </div>
    </main>
  )
}
