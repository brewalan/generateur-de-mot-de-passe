import * as React from 'react'
import { Link } from 'gatsby'

import { siteFooter,
navLinkItem,
navLinks,
navLinkText
} from './footer.module.scss'

const FooterPage = () => {

  return (
    <footer className={siteFooter}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Accueil
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              À propos
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/confidentialite" className={navLinkText}>
              Confidentialité
            </Link>
          </li>

        </ul>
      </nav>
    </footer>
  )
}

export default FooterPage