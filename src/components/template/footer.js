import * as React from 'react'
import { Link } from 'gatsby'
import { IconInfo, IconCookie, IconEmail, IconHome } from './iconList'
import { siteFooter,
navLinkItem,
navLinks,
navLinkText,
navLinkLien
} from './footer.module.scss'

const FooterPage = () => {

  return (
    <footer className={siteFooter}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              <IconHome />
              <span className={navLinkLien}>Accueil</span>                            
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              <IconInfo />
              <span className={navLinkLien}>À propos</span>                            
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/confidentialite" className={navLinkText}>
              <IconCookie />
              <span className={navLinkLien}>Confidentialité</span>
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              <IconEmail />
              <span className={navLinkLien}>Contact</span>              
            </Link>
          </li>

        </ul>
      </nav>
    </footer>
  )
}

export default FooterPage