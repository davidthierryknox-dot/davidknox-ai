const posts = [
  {
    title: 'The Real Question About AI Adoption',
    excerpt: 'The question isn\'t whether to adopt AI, but how to preserve strategic optionality while you do. Here\'s what the patterns reveal.',
    category: 'Strategic Innovation',
    date: 'Coming soon',
    featured: true,
  },
  {
    title: 'Navigating Digital Transformation',
    excerpt: 'Lessons from real transformations: what works, what doesn\'t, and why execution beats strategy every time.',
    category: 'Practical Wisdom',
    date: 'Coming soon',
    featured: false,
  },
  {
    title: 'Building with AI: A Practitioner\'s View',
    excerpt: 'Moving from AI hype to AI results. The patterns I\'ve observed across dozens of implementations.',
    category: 'Tool Building',
    date: 'Coming soon',
    featured: false,
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
          <a
            href="#"
            className="mt-4 md:mt-0 text-zissou font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            View all posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
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
                  {post.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-navy rounded-2xl p-8 md:p-12 text-center">
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
