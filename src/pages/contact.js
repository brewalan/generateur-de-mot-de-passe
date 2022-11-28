import * as React from 'react'
import Layout from '../components/template/layout'
import { StaticImage } from 'gatsby-plugin-image'
import FooterPage from '../components/template/footer'
import Seo from '../components/template/seo'
import { Link } from 'gatsby'
import { IconEmailBlack,
    IconInsta,
    IconTwitter,
    IconGitHub,
    IconLinkedin } from '../components/template/iconList'
import { 
    navLinkItem,
    navLinks,
    navLinkText,
    navLinkLien
    } from './contact.module.scss'

const intro = {
  color: "#663399"
}
const pointer = {
    cursor: "pointer"
}  

  const ContactPage = () => {
  return (
    <React.Fragment>
        <Layout pageTitle="Contact">
            <StaticImage
                alt="Contact"
                src="../images/contact-img.jpg"
            />        

            <h2 style={intro}>Par email</h2>
            <p>Pour m'écrire, vous pouvez m'envoyer un email à l'adresse qui apparaît dans l'image. En mettant l'adresse dans une image, ceci me permet d'éviter de recevoir trop de spams.</p>
            <p>N'hésitez pas à m'écrire si vous avez des suggestions ou un projet à réaliser.</p>

            <p>Si vous préférez un formulaire, vous pouvez aller sur le <a style={pointer} href="https://leconjugueur.lefigaro.fr/blog/contact/">Blog de Le Conjugueur</a>, mon site principal, en signalant qu'il s'agit du site de génération de mots de passe.</p>


            <h2 style={intro}>Réseaux sociaux</h2>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to="https://www.instagram.com/leconjugueur/" className={navLinkText}>
                    <IconInsta />
                    <span className={navLinkLien}>Instagram</span>                            
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="https://twitter.com/leconjugueur" className={navLinkText}>
                    <IconTwitter />
                    <span className={navLinkLien}>Twitter</span>                            
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="https://github.com/brewalan/" className={navLinkText}>
                    <IconGitHub />
                    <span className={navLinkLien}>GitHub</span>                            
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="https://www.linkedin.com/in/brewalan-le-dru/" className={navLinkText}>
                    <IconLinkedin />
                    <span className={navLinkLien}>Linkedin</span>                            
                    </Link>
                </li>                
                <li className={navLinkItem}>
                    <Link to="https://leconjugueur.lefigaro.fr/blog/contact/" className={navLinkText}>
                    <IconEmailBlack />
                    <span className={navLinkLien}>Email</span>                            
                    </Link>
                </li>
            </ul>

            <h2 style={intro}>Mes autres sites</h2>        
            <p>Je vous invite à visiter mes autres sites sur le thème de la conjugaison :</p>    
            <ul>
                 <li>
                    <a href="https://leconjugueur.lefigaro.fr" title="Conjuguer un verbe en français">Le Conjugueur</a>
                </li>                
                <li>
                    <a href="https://www.elconjugador.com" title="Conjuguer un verbe en espagnol">El Conjugador</a>
                </li>
                <li>
                    <a href="https://www.theconjugator.com" title="Conjuguer un verbe en anglais">The Conjugator</a>
                </li>
                <li>
                    <a href="https://www.derkonjugator.com" title="Conjuguer un verbe en allemand">Der Konjugator</a>
                </li>
                <li>
                    <a href="https://www.ilconiugatore.com" title="Conjuguer un verbe en italien">Il Coniugatore</a>
                </li>
                <li>
                    <a href="https://www.oconjugador.com" title="Conjuguer un verbe en portugais">O Conjugador</a>
                </li>
            </ul>
            <p>Ainsi que d'autres petites créations :</p>    
            <ul>
                 <li>
                    <a href="https://www.starium.net" title="Starium, jeu rétro">Starium</a> : un jeu rétro en mode texte directement dans votre navigateur
                </li>                
            </ul>


        </Layout>
        <FooterPage />

    </React.Fragment>
  )
}

export const Head = () => (
    <Seo 
        title="Contact"
        description="Pour me contacter, voici mes coordonnées." />
)


export default ContactPage