import { useRef, useCallback, useEffect, useState } from 'react'

export default function Hero() {
  const [windLoaded, setWindLoaded] = useState(false)
  const [auraActive, setAuraActive] = useState(false)
  const windRef = useRef(null)
  const blend = useRef(0)
  const lastTrigger = useRef(0)
  const rafId = useRef(null)

  const PEAK = 0.5
  const ATTACK = 0.12   // seconds to reach peak
  const DECAY = 1.0     // seconds to settle back

  const animate = useCallback(() => {
    const elapsed = (performance.now() - lastTrigger.current) / 1000

    if (elapsed < ATTACK) {
      blend.current = PEAK * (elapsed / ATTACK)
    } else if (elapsed < ATTACK + DECAY) {
      const t = (elapsed - ATTACK) / DECAY
      blend.current = PEAK * (1 - t * t * (3 - 2 * t))
    } else {
      blend.current = 0
    }

    if (windRef.current) {
      windRef.current.style.opacity = blend.current
    }

    rafId.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if (windLoaded) {
      rafId.current = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(rafId.current)
    }
  }, [windLoaded, animate])

  const handleMouseMove = useCallback(() => {
    lastTrigger.current = performance.now()
  }, [])

  const handleClick = useCallback((e) => {
    if (!auraActive) {
      e.preventDefault()
      setAuraActive(true)
    }
  }, [auraActive])

  const avatarRef = useRef(null)

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
    <section className="py-12 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-24 items-center">
          {/* Text */}
          <div className="animate-fade-in">
            <h1 className="font-serif text-[clamp(2.5rem,8vw,3.052rem)] font-light text-charcoal tracking-[0.02em] leading-tight mb-4">
              David Knox
            </h1>
            <p className="font-serif text-lg md:text-2xl text-wood leading-snug mb-8">
              Strategy + Technology.
              <br />
              Thoughtful strategy and technical craft, delivered with quiet precision.
            </p>
          </div>

          {/* Avatar */}
          <div className="flex justify-center items-center order-first md:order-last">
            <div className="relative" ref={avatarRef}>
              <div className={`absolute inset-0 -m-2 rounded-full bg-sky blur-xl transition-opacity duration-300 ${auraActive ? 'opacity-40' : 'opacity-12'}`} />
              <a
                href="https://www.linkedin.com/in/davidthierryknox/"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block w-44 h-44 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[3px] p-2 bg-paper no-underline focus:outline-none transition-all duration-300 ${auraActive ? 'border-sky shadow-[0_0_30px_rgba(168,184,200,0.5)]' : 'border-cloud shadow-[0_4px_20px_rgba(42,36,32,0.15)]'}`}
                aria-label="David Knox on LinkedIn"
                onMouseMove={handleMouseMove}
                onClick={handleClick}
              >
                <div className="relative w-full h-full">
                  <img
                    src="/david-knox-avatar.png"
                    alt="David Knox"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <img
                    ref={windRef}
                    src="/david-knox-avatar-wind.png"
                    alt=""
                    loading="lazy"
                    fetchPriority="low"
                    onLoad={() => setWindLoaded(true)}
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                    style={{ opacity: 0 }}
                    aria-hidden="true"
                  />
                </div>
              </a>
              {auraActive && (
                <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 md:bottom-[12%] md:left-auto md:translate-x-0 md:right-[42%] pointer-events-none">
                  <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
