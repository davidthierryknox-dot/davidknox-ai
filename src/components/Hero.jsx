import { useRef, useCallback, useEffect } from 'react'

export default function Hero() {
  const imgRef = useRef(null)
  const lastX = useRef(0)
  const lastTime = useRef(0)
  const wind = useRef(0)
  const windTarget = useRef(0)
  const rafId = useRef(null)

  // Animate wind with gentle decay — the hair settles like it would in still air
  const animate = useCallback(() => {
    // Ease toward target, then let target decay to zero
    wind.current += (windTarget.current - wind.current) * 0.06
    windTarget.current *= 0.96

    // Only apply transform if there's meaningful movement
    if (imgRef.current && Math.abs(wind.current) > 0.01) {
      const skew = wind.current * 0.8
      const rotate = wind.current * 0.3
      const scaleX = 1 + Math.abs(wind.current) * 0.003
      imgRef.current.style.transform =
        `rotate(${rotate}deg) skewX(${skew}deg) scaleX(${scaleX})`
    } else if (imgRef.current) {
      imgRef.current.style.transform = ''
    }

    rafId.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    rafId.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId.current)
  }, [animate])

  const handleMouseMove = useCallback((e) => {
    const now = Date.now()
    const dt = now - lastTime.current

    if (dt > 0 && lastTime.current > 0) {
      const dx = e.clientX - lastX.current
      const velocity = dx / dt // pixels per ms

      const force = Math.max(-2, Math.min(2, velocity * 5))
      windTarget.current = force
    }

    lastX.current = e.clientX
    lastTime.current = now
  }, [])

  const handleMouseLeave = useCallback(() => {
    // Wind dies down naturally — no abrupt stop
    lastTime.current = 0
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
                onMouseLeave={handleMouseLeave}
              >
                <img
                  ref={imgRef}
                  src="/david-knox-avatar.png"
                  alt="David Knox"
                  className="w-full h-full object-cover rounded-full"
                  style={{ transformOrigin: '50% 85%', willChange: 'transform' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
