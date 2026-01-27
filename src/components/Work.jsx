const logos = [
  { name: 'Avalara', src: '/logos/Avalara_logo_color.webp', height: 'h-10 md:h-12' },
  { name: 'Vertex', src: '/logos/vertex logo.png', height: 'h-5 md:h-6' },
  { name: 'Google Partner', src: '/logos/new-Google-Partner-logo-png-large-size.png', height: 'h-16 md:h-20' },
  { name: 'Oracle', src: '/logos/Oracle-Logo.jpg', height: 'h-12 md:h-14' },
  { name: 'Sovos', src: '/logos/sovos logo.png', height: 'h-5 md:h-6' },
]

export default function Work() {
  return (
    <section id="work" className="py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-zissou font-medium">Work</p>
      </div>

      {/* Centered logos */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center"
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
