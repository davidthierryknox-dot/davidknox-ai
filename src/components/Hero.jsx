import { useRef, useCallback, useEffect, useState } from 'react'

export default function Hero() {
  const [windLoaded, setWindLoaded] = useState(false)
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

  return (
    <section className="py-12 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Text */}
          <div className="animate-fade-in">
            <h1 className="font-serif text-[clamp(2.5rem,8vw,3.052rem)] font-light text-charcoal tracking-[0.02em] leading-tight mb-4">
              David Knox
            </h1>
            <p className="font-serif text-xl md:text-2xl text-wood leading-snug mb-8">
              Strategy + Technology.
              <br />
              Thoughtful strategy and technical craft, delivered with quiet precision.
            </p>
          </div>

          {/* Avatar */}
          <div className="flex justify-center items-center order-first md:order-last">
            <div className="relative">
              <div className="absolute inset-0 -m-2 rounded-full bg-sky opacity-12 blur-xl" />
              <a
                href="https://www.linkedin.com/in/davidthierryknox/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[3px] border-cloud p-2 bg-paper no-underline focus:outline-none focus:ring-2 focus:ring-sky/40 shadow-[0_4px_20px_rgba(42,36,32,0.15)]"
                aria-label="David Knox on LinkedIn"
                onMouseMove={handleMouseMove}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
