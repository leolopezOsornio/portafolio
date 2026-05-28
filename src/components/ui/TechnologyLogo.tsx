type TechnologyLogoProps = {
  icon: string
  name: string
}

export function TechnologyLogo({ icon, name }: TechnologyLogoProps) {
  return (
    <span className="technology-logo" title={name}>
      <img alt="" src={icon} />
      <span>{name}</span>
    </span>
  )
}
