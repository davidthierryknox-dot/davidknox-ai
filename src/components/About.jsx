export default function About() {
  return (
    <section id="about" className="py-4 md:py-6">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="bento-card reveal">
          <div className="max-w-3xl">
            <h2 className="font-serif text-[clamp(1.75rem,5vw,2.441rem)] font-semibold text-charcoal tracking-[-0.01em] leading-snug mb-6">
              About
            </h2>
            <div className="prose text-wood">
              <p>
                I&apos;m a systems-thinker by instinct and drawn to messy problems where big ideas, data, and human decision-making collide.
              </p>
              <p>
                I&apos;m skeptical of easy answers and hype, preferring first-principles thinking, evidence, and clear trade-offs.
              </p>
              <p>
                Above all, I care about helping reduce confusion and encourage confident action, with pragmatism over theory and accountability over abstraction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
