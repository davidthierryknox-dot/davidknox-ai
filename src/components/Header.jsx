const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Writing', href: '#writing' },
  { name: 'Work', href: '#work' },
  { name: 'Advisory', href: '/knoxlock' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <a href="/" className="font-sans text-xl font-semibold text-charcoal no-underline">
          David Knox
        </a>
        <nav className="font-sans text-sm font-medium" aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-charcoal no-underline hover:text-sky py-1">
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
