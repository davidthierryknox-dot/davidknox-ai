const values = [
  {
    title: 'Clarity',
    description: 'Making the complex understandable',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'Pushing boundaries with purpose',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description: 'Honest, evidence-based guidance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Impact',
    description: 'Focused on meaningful outcomes',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-3">
            <p className="text-zissou font-medium mb-3">About</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
              Strategic clarity meets technological possibility
            </h2>
            <div className="prose text-slate">
              <p>
                I work at the intersection of strategy and technology, helping leaders
                make informed decisions that shape the future. With a background spanning
                consulting, technology implementation, and innovation strategy, I bring
                a unique perspective to complex challenges.
              </p>
              <p>
                My approach is grounded in evidence and practicality. I believe innovation
                without execution is just imagination. That&apos;s why I focus on bridging
                the gap between strategic vision and tangible outcomes.
              </p>
              <p>
                Whether it&apos;s AI adoption, digital transformation, or organizational
                change, the real question isn&apos;t whether to move forward&mdash;it&apos;s
                how to preserve strategic optionality while you do.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="lg:col-span-2">
            <p className="text-slate font-medium mb-6 text-sm uppercase tracking-wide">
              Core Values
            </p>
            <div className="space-y-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex items-start gap-4 p-4 bg-cream rounded-xl border border-sand/50 card-hover"
                >
                  <div className="text-zissou mt-0.5">{value.icon}</div>
                  <div>
                    <h3 className="font-semibold text-navy">{value.title}</h3>
                    <p className="text-sm text-slate">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
