import Link from "next/link"
import { Header, SocialIcons } from "@/components/lilcoderman"

const pages = [
  {
    title: "Brave New Visions",
    href: "/brave-new-visions",
    color: "bg-lc-blue",
    textColor: "text-white",
    description: "Face your fears with courage"
  },
  {
    title: "Dare to Dazzle",
    href: "/dare-to-dazzle",
    color: "bg-gradient-to-br from-lc-cyan to-lc-pink",
    textColor: "text-lc-navy",
    description: "Live with style and flair"
  },
  {
    title: "Accept Yourself (Light)",
    href: "/accept-yourself-light",
    color: "bg-lc-cream",
    textColor: "text-lc-navy",
    description: "Embrace your whole being"
  },
  {
    title: "Accept Yourself (Dark)",
    href: "/accept-yourself-dark",
    color: "bg-lc-red",
    textColor: "text-white",
    description: "Embrace your shadow"
  },
  {
    title: "The Galactic Flame",
    href: "/galactic-flame",
    color: "bg-lc-cream",
    textColor: "text-lc-purple",
    description: "Silent and deadly assassin"
  },
  {
    title: "The Deathly Dagger",
    href: "/deathly-dagger",
    color: "bg-lc-cream",
    textColor: "text-lc-red",
    description: "Unhinged chaos wielder"
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-lc-navy">
      {/* Header */}
      <Header variant="dark" className="sticky top-0 z-20 bg-lc-navy/80 backdrop-blur-sm" />
      
      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase text-white leading-[0.9] tracking-tight">
            Anime<br />
            Layouts
          </h1>
          <p className="mt-6 text-white/60 max-w-md text-sm md:text-base leading-relaxed">
            A collection of bold, anime-inspired landing page designs. Each layout captures a unique aesthetic and message.
          </p>
        </div>
      </section>
      
      {/* Grid of Pages */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className={`group relative overflow-hidden rounded-lg p-6 ${page.color} min-h-[200px] flex flex-col justify-between transition-transform hover:scale-[1.02]`}
            >
              <div>
                <h2 className={`font-display text-2xl md:text-3xl uppercase ${page.textColor}`}>
                  {page.title}
                </h2>
                <p className={`mt-2 text-sm ${page.textColor} opacity-70`}>
                  {page.description}
                </p>
              </div>
              <div className={`mt-4 text-xs uppercase tracking-wider ${page.textColor} opacity-50 group-hover:opacity-100 transition-opacity`}>
                View Design →
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="px-6 lg:px-12 py-8 border-t border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/40">
            Designed by LILCODERMAN
          </span>
          <SocialIcons variant="dark" />
        </div>
      </footer>
    </main>
  )
}
