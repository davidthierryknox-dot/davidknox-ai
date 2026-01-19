const posts = [
  {
    title: 'The Strategic Optionality of AI',
    excerpt: 'The real question isn\'t whether to adopt AI—it\'s how to preserve strategic optionality while you do. Here\'s what the patterns reveal across dozens of implementations.',
    category: 'Strategic Innovation',
    date: 'Jan 2026',
    featured: true,
    link: '#',
  },
  {
    title: 'Innovation Without Execution Is Just Imagination',
    excerpt: 'Lessons from real transformations: the gap between strategic vision and tangible outcomes, and what separates organizations that close it.',
    category: 'Practical Wisdom',
    date: 'Coming soon',
    featured: false,
    link: '#',
  },
  {
    title: 'Building Custom AI Skills',
    excerpt: 'How I built open-source Claude Skills to extend AI capabilities. A practitioner\'s view on moving from hype to results.',
    category: 'Tool Building',
    date: 'Coming soon',
    featured: false,
    link: 'https://github.com/davidthierryknox-dot/claude-skills',
  },
]

const insights = [
  {
    quote: 'The interesting question is never "should we use AI?" but rather "what strategic options does this create or foreclose?"',
    context: 'On AI strategy',
  },
  {
    quote: 'Complexity isn\'t the enemy. Unclear thinking about complexity is.',
    context: 'On transformation',
  },
]

export default function Writing() {
  return (
    <section id="writing" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-zissou font-medium mb-3">Writing</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Insights & Ideas
            </h2>
          </div>
        </div>

        {/* Featured insight */}
        <div className="mb-12 p-8 bg-navy rounded-2xl text-white">
          <blockquote className="font-display text-xl md:text-2xl leading-relaxed mb-4">
            "{insights[0].quote}"
          </blockquote>
          <p className="text-white/60 text-sm">{insights[0].context}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className={`group bg-warm-white rounded-xl border border-sand overflow-hidden card-hover ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {post.featured && (
                <div className="h-2 bg-gradient-to-r from-zissou to-mustard"></div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-zissou bg-zissou/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate">{post.date}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-navy mb-3 group-hover:text-zissou transition-colors">
                  <a href={post.link} target={post.link.startsWith('http') ? '_blank' : undefined} rel={post.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {post.title}
                  </a>
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Second insight */}
        <div className="mt-12 p-6 border-l-4 border-mustard bg-warm-white rounded-r-xl">
          <blockquote className="font-display text-lg text-navy leading-relaxed mb-2">
            "{insights[1].quote}"
          </blockquote>
          <p className="text-slate text-sm">{insights[1].context}</p>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Stay in the loop
          </h3>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Occasional insights on strategy, technology, and the patterns that connect them.
            No spam, just substance.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-zissou"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-mustard text-navy font-semibold rounded-lg hover:bg-mustard/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
