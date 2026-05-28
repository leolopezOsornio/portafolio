type ButtonLinkProps = {
  children: React.ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  external?: boolean
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
  external = false,
}: ButtonLinkProps) {
  return (
    <a
      className={`button ${variant}`}
      href={href}
      rel={external ? 'noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {children}
    </a>
  )
}
