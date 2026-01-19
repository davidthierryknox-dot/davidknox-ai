import { useState } from 'react'

export default function Hero() {
  const [easterEgg, setEasterEgg] = useState(false)

  return (
    <section className="min-h-[70vh] flex items-center pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col items-start gap-8">
          {/* Profile + Name row */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setEasterEgg(!easterEgg)}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-sand shadow-md cursor-pointer focus:outline-none focus:ring-4 focus:ring-zissou/30 transition-transform hover:scale-105 active:scale-95 flex-shrink-0"
              aria-label="Toggle profile photo"
            >
              <img
                src={easterEgg ? "/profile-easter-egg.jpg" : "/profile.jpg"}
                alt="David Knox"
                className="w-full h-full object-cover"
              />
            </button>
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy">
                David Knox
              </h1>
              <p className="text-slate mt-1">
                Strategy & Technology
              </p>
            </div>
          </div>

          {/* Brief bio */}
          <p className="text-lg md:text-xl text-navy/80 max-w-2xl leading-relaxed">
            I'm a systems-minded Connector at the cross-roads of strategy and emerging technology. I have helped organizations navigate complexity and empowered them to design what comes next.
          </p>
        </div>
      </div>
    </section>
  )
}
