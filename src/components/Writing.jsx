import { useState, useMemo } from 'react'
import articles from '../data/articles'

export default function Writing() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return articles

    const query = searchQuery.toLowerCase()
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags?.some((tag) => tag.toLowerCase().includes(query))
    )
  }, [searchQuery])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <section id="writing" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-zissou font-medium mb-6">Writing</p>

        {/* Search bar */}
        <div className="relative mb-8 max-w-md">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-11 bg-warm-white border border-sand rounded-lg text-navy placeholder-slate/50 focus:outline-none focus:border-zissou focus:ring-2 focus:ring-zissou/20 transition-colors"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate/50 hover:text-navy transition-colors"
              aria-label="Clear search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Articles list */}
        {articles.length === 0 ? (
          <p className="text-slate/70 italic">Articles coming soon...</p>
        ) : filteredArticles.length === 0 ? (
          <p className="text-slate/70">No articles found matching "{searchQuery}"</p>
        ) : (
          <div className="space-y-6">
            {filteredArticles.map((article) => (
              <article
                key={article.title}
                className="group border-b border-sand/50 pb-6 last:border-0"
              >
                <a
                  href={article.link}
                  target={article.external ? '_blank' : undefined}
                  rel={article.external ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-navy group-hover:text-zissou transition-colors">
                        {article.title}
                        {article.external && (
                          <svg
                            className="inline-block ml-2 w-4 h-4 text-slate/50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        )}
                      </h3>
                      <p className="text-slate mt-1">{article.excerpt}</p>
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium text-zissou/80 bg-zissou/10 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-sm text-slate/60 whitespace-nowrap">
                      {formatDate(article.date)}
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
