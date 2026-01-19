const logos = [
  { name: 'Avalara', src: '/logos/Avalara_logo_color.webp' },
  { name: 'Vertex', src: '/logos/vertex logo.png' },
  { name: 'Google Partner', src: '/logos/new-Google-Partner-logo-png-large-size.png' },
  { name: 'Oracle', src: '/logos/Oracle-Logo.jpg' },
  { name: 'Sovos', src: '/logos/sovos logo.png' },
]

export default function Work() {
  // Double the logos for seamless infinite scroll
  const doubledLogos = [...logos, ...logos]

  return (
    <section id="work" className="py-24 bg-warm-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="text-center">
          <p className="text-zissou font-medium mb-3">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Trusted by industry leaders
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Working with global organizations at the intersection of tax technology,
            compliance, and digital transformation.
          </p>
        </div>
      </div>

      {/* Scrolling logo marquee */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-warm-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-warm-white to-transparent z-10"></div>

        <div className="flex animate-marquee">
          {doubledLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
