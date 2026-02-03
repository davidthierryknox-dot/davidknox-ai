const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Writing', href: '#writing' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-5 flex items-center justify-between">
        <a href="/" className="inline-block hover:opacity-80 transition-opacity">
          <img
            src="/david-knox-wordmark.svg"
            alt="David Knox"
            className="h-7 w-auto"
          />
        </a>

        <nav className="font-sans text-base" aria-label="Main navigation">
          <ul className="flex items-center gap-6 md:gap-8 list-none m-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-charcoal no-underline hover:text-sky transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
