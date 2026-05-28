import { motion } from 'framer-motion'
import arrowRightIcon from '../../assets/icons/arrow-right.svg'
import { IconTile } from './IconTile'

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
    <motion.a
      className={`button ${variant}`}
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      rel={external ? 'noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      <span>{children}</span>
      <IconTile className="button-icon" src={arrowRightIcon} />
    </motion.a>
  )
}
