import { motion } from 'framer-motion'
import briefcaseIcon from '../../assets/icons/briefcase.svg'
import folderIcon from '../../assets/icons/folder.svg'
import houseIcon from '../../assets/icons/house.svg'
import mailIcon from '../../assets/icons/mail.svg'
import menuIcon from '../../assets/icons/menu.svg'
import userIcon from '../../assets/icons/user.svg'
import { IconTile } from '../ui/IconTile'

const navItems = [
  ['Work', '#work', briefcaseIcon],
  ['Expertise', '#expertise', userIcon],
  ['Stack', '#stack', folderIcon],
  ['Contact', '#contact', mailIcon],
]

export function SiteHeader() {
  return (
    <motion.header
      className="site-header"
      initial={{ y: -18 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="brand" href="#top" aria-label="Leo Lopez home">
        <IconTile src={houseIcon} />
        <span>Leo Lopez</span>
        <small>Full Stack Product Developer</small>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map(([label, href, icon]) => (
          <a href={href} key={href}>
            <IconTile src={icon} />
            {label}
          </a>
        ))}
      </nav>
      <button className="menu-button" aria-label="Open menu" type="button">
        <IconTile src={menuIcon} />
      </button>
    </motion.header>
  )
}
