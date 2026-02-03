const logos = [
  { name: 'Fat Tire Tours', src: '/logos/fat-tire-logo.png', height: 'h-14 md:h-18' },
  { name: 'Penn Cycle', src: '/logos/penn-cycle.png', height: 'h-10 md:h-14' },
  { name: 'Oracle', src: '/logos/Oracle-Logo.png', height: 'h-12 md:h-14' },
  { name: 'Sovos', src: '/logos/sovos-logo.png', height: 'h-5 md:h-6' },
  { name: 'Google Partner', src: '/logos/new-Google-Partner-logo-png-large-size.png', height: 'h-16 md:h-20' },
  { name: 'Avalara', src: '/logos/Avalara_logo_color.webp', height: 'h-10 md:h-12' },
  { name: 'Vertex', src: '/logos/vertex-logo.png', height: 'h-5 md:h-6' },
]

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 mb-10">
        <h2 className="font-serif text-[2.441rem] font-normal text-charcoal tracking-[0.02em] leading-snug">
          Work
        </h2>
      </div>

      {/* Centered logos */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className={`${logo.height} w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
