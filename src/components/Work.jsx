const projects = [
  {
    title: 'Claude Skills',
    description: 'Open-source custom skills for Claude AI, enabling extended capabilities and specialized workflows.',
    tags: ['AI', 'Open Source', 'Automation'],
    link: 'https://github.com/davidthierryknox-dot/claude-skills',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Strategic Consulting',
    description: 'Helping organizations navigate digital transformation and AI adoption with clarity and purpose.',
    tags: ['Strategy', 'Transformation', 'Advisory'],
    link: '#contact',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Innovation Advisory',
    description: 'Guiding R&D and product teams on emerging technology integration and future-proofing strategies.',
    tags: ['Innovation', 'R&D', 'Technology'],
    link: '#contact',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-zissou font-medium mb-3">Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            What I build & how I help
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            From open-source tools to strategic advisory, I focus on creating tangible
            value at the intersection of technology and business strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target={project.link.startsWith('http') ? '_blank' : undefined}
              rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group block bg-cream rounded-xl border border-sand p-6 card-hover"
            >
              <div className="text-zissou mb-4 group-hover:text-mustard transition-colors">
                {project.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-navy mb-2 group-hover:text-zissou transition-colors">
                {project.title}
              </h3>
              <p className="text-slate text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-navy/60 bg-sand/50 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
