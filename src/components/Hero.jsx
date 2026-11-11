export default function Hero() {
  return (
    <section className="py-3">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bento-card flex items-center justify-center py-8 md:py-12 order-first md:order-last">
            <img
              src="/david-knox-headshot.jpg"
              alt="David Knox"
              className="w-44 h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover object-[40%_22%] rounded-full"
            />
          </div>
          <div className="bento-card flex flex-col justify-center">
            <h1 className="font-sans text-[clamp(2.5rem,8vw,3.5rem)] font-semibold text-charcoal tracking-normal leading-[1.15] mb-4">
              David Knox
            </h1>
            <p className="font-sans text-sm md:text-base font-semibold text-sky leading-normal">
              Risk Mitigation and Strategic Foresight
            </p>
            <p className="font-serif text-base md:text-lg text-wood mt-3 leading-normal">
              First-principles thinking for a complex world
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
