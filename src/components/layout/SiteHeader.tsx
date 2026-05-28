const navItems = [
  ['Work', '#work'],
  ['Expertise', '#expertise'],
  ['Stack', '#stack'],
  ['Contact', '#contact'],
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Leo Lopez home">
        <span>Leo Lopez</span>
        <small>Full Stack Product Developer</small>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
