import { Reveal } from './Reveal'

type SectionHeadingProps = {
  kicker: string
  title: string
  children?: React.ReactNode
}

export function SectionHeading({ kicker, title, children }: SectionHeadingProps) {
  return (
    <Reveal className="section-heading">
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </Reveal>
  )
}
