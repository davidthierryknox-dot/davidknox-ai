export default function Hero() {
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
                className="relative block w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[3px] border-cloud p-2 bg-paper no-underline focus:outline-none focus:ring-2 focus:ring-sky/40 shadow-[0_4px_20px_rgba(42,36,32,0.15)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                aria-label="David Knox on LinkedIn"
              >
                <img
                  src="/david-knox-avatar.png"
                  alt="David Knox"
                  className="w-full h-full object-cover rounded-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
