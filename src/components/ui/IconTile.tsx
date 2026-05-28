type IconTileProps = {
  alt?: string
  className?: string
  src: string
}

export function IconTile({ alt = '', className = '', src }: IconTileProps) {
  return (
    <span className={`icon-tile ${className}`} aria-hidden={alt ? undefined : true}>
      <img alt={alt} src={src} />
    </span>
  )
}
