export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <p className="text-zissou font-medium mb-4 animate-fade-in-up">
              Strategy + Technology
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6 animate-fade-in-up animate-delay-100">
              Bridging strategic thinking with emerging technology
            </h1>
            <p className="text-lg text-slate leading-relaxed mb-8 animate-fade-in-up animate-delay-200">
              I help organizations navigate complexity at the intersection of
              strategy and innovation. From AI implementation to digital transformation,
              I focus on creating clarity where others see chaos.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-medium hover:bg-navy/90 transition-colors"
              >
                View my work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy px-6 py-3 rounded-lg font-medium hover:bg-navy hover:text-white transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-up">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-zissou/20 to-mustard/20 overflow-hidden border-4 border-warm-white shadow-xl">
                {/* Placeholder - replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-sand/50">
                  <span className="text-6xl font-display font-bold text-navy/20">DK</span>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-mustard/30 rounded-xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-zissou/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
