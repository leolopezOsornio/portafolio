import type { CSSProperties } from 'react'

type TechnologyLogoProps = {
  icon: string
  name: string
  color: string
  filter: string
}

export function TechnologyLogo({ icon, name, color, filter }: TechnologyLogoProps) {
  return (
    <span
      className="technology-logo"
      style={{ '--tech-color': color, '--tech-filter': filter } as CSSProperties}
      title={name}
    >
      <img alt="" src={icon} />
      <span>{name}</span>
    </span>
  )
}
