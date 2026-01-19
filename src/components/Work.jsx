const logos = [
  { name: 'Avalara', src: '/logos/Avalara_logo_color.webp', height: 'h-10 md:h-12' },
  { name: 'Vertex', src: '/logos/vertex logo.png', height: 'h-5 md:h-6' },
  { name: 'Google Partner', src: '/logos/new-Google-Partner-logo-png-large-size.png', height: 'h-16 md:h-20' },
  { name: 'Oracle', src: '/logos/Oracle-Logo.jpg', height: 'h-12 md:h-14' },
  { name: 'Sovos', src: '/logos/sovos logo.png', height: 'h-5 md:h-6' },
]

export default function Work() {
  // Double the logos for seamless infinite scroll
  const doubledLogos = [...logos, ...logos]

  return (
    <section id="work" className="py-16 bg-warm-white overflow-hidden">
      {/* Scrolling logo marquee */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-warm-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-warm-white to-transparent z-10"></div>

        <div className="flex items-center animate-marquee">
          {doubledLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className={`${logo.height} w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
