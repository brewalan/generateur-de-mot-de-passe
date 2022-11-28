import * as React from 'react'
import { Link } from 'gatsby'
import { IconInfo, IconCookie, IconEmail, IconHome, IconGavel, IconKey } from './iconList'
import { siteFooter,
navLinkItem,
navLinks,
navLinkText,
navLinkLien,
footerText
} from './footer.module.scss'

const FooterPage = () => {

  return (
    <React.Fragment>
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
            <Link to="/mention" className={navLinkText}>
              <IconGavel />
              <span className={navLinkLien}>Mentions légales</span>              
            </Link>
          </li>          
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              <IconEmail />
              <span className={navLinkLien}>Contact</span>              
            </Link>
          </li>

        </ul>
      </nav>
      <div className={footerText}>
        <IconKey />        
        <p>
          Le générateur de mots de passe - &copy; 2022  
        </p>
      </div>
    </footer>
    </React.Fragment>
  )
}

export default FooterPage