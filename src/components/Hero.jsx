import { useRef, useCallback, useEffect, useState } from 'react'

export default function Hero() {
  const [auraActive, setAuraActive] = useState(false)
  const avatarRef = useRef(null)

  const handleClick = useCallback(() => {
    setAuraActive((prev) => !prev)
  }, [])

  const handleDoubleClick = useCallback(() => {
    window.open('https://www.linkedin.com/in/davidthierryknox/', '_blank', 'noopener,noreferrer')
  }, [])

  useEffect(() => {
    if (!auraActive) return

    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAuraActive(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [auraActive])

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Avatar Card */}
          <div className="bento-card flex items-center justify-center py-8 md:py-12 order-first md:order-last">
            <div className="relative" ref={avatarRef}>
              <div className={`absolute inset-0 -m-2 rounded-full bg-sky blur-xl transition-opacity duration-300 ${auraActive ? 'opacity-40' : 'opacity-12'}`} />
              <div
                className={`relative block w-44 h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-[3px] p-2 bg-paper cursor-pointer transition-all duration-300 ${auraActive ? 'border-sky shadow-[0_0_30px_rgba(122,154,184,0.5)]' : 'border-cloud shadow-[0_4px_20px_rgba(35,30,26,0.15)]'}`}
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}
              >
                <img
                  src="/david-knox-headshot.jpg"
                  alt="David Knox"
                  className={`w-full h-full object-cover object-[40%_22%] rounded-full scale-110 transition-[filter] duration-500 ${auraActive ? 'grayscale' : ''}`}
                />
              </div>
            </div>
          </div>

          {/* Intro Card */}
          <div className="bento-card flex flex-col justify-center animate-fade-in">
            <h1 className="font-serif text-[clamp(2.5rem,8vw,3.5rem)] font-light text-charcoal tracking-[-0.01em] leading-tight mb-4">
              David <span className="font-bold">Knox</span>
            </h1>
            <p className="font-sans text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-sky leading-snug">
              Risk Mitigation and Strategic Foresight
            </p>
            <p className="font-serif text-base md:text-lg text-wood mt-3 leading-snug">
              First-principles thinking for a complex world
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
