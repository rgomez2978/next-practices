import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Pricing', href: '/pricing' },
  { text: 'Contact', href: '/contact' }
]

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(({ text, href }) => (
          <ActiveLink id={text} text={text} href={href} />
        ))
      }
    </nav>
  )
}

