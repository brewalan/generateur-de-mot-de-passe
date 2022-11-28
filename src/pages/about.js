import * as React from 'react'
import Layout from '../components/template/layout'
import { StaticImage } from 'gatsby-plugin-image'
import FooterPage from '../components/template/footer'
import Seo from '../components/template/seo'

const intro = {
  color: "#663399"
}

  const PrivacyPage = () => {
  return (
    <React.Fragment>
        <Layout pageTitle="À propos du site">
            <StaticImage
                alt="About"
                src="../images/about-img.jpg"
            />        

            <h2 style={intro}>Un générateur de mots de passe</h2>
            <p>L'objectif de ce site est de générer un mot de passe complètement sécurisé directement en ligne depuis votre machine ou téléphone.</p>
            <p>Avec un mot de passe généré en local, vous êtes sûr que rien n'a transité depuis un serveur. Le mot de passe est donc complètement unique.</p>
            <p>Ce site n'utilise pas de cookie non plus et n'a pas de traceur. Ceci est volontaire, il garantit à nouveau que personne n'a la possibilité de récupérer le mot de passe ainsi généré.</p>


            <h2 style={intro}>Reconnaître un bon mot de passe</h2>            
            <p>Sur ce site, les mots de passe sont générés avec des chiffres, des minuscules, des majuscules et des caractères spéciaux.</p>
            <p>Un bon mot de passe doit être difficile à trouver. Il faut éviter les mots de passe évident comme 123456, azerty ou bonjour. Un mot de passe comme "Frr+jqI3ifcE" sera beaucoup plus difficile à deviner.</p>
            <p>Idéalement, un mot de passe sécurisé devrait contenir entre 8 et 12 caractères. En dessous, il devient facile de faire une attaque en essayant toutes les combinaisons.</p>

            <h2 style={intro}>La double authentification</h2>            
            <p>Un mot de passe seul est déjà une bonne protection. Si le site que vous utilisez propose la double authentification, c'est encore mieux et il vaut mieux alors l'activer.</p>
            <p>La double authentification est une technique qui vous permet d'autoriser l'accès avec une deuxième clef comme un code envoyé sur le téléphone par exemple. C'est extrêmement efficace pour protéger ses données.</p>

        </Layout>
        <FooterPage />

    </React.Fragment>
  )
}

export const Head = () => (
    <Seo 
        title="Mentions légales"
        description="Mentions légales du site, savoir qui est le propriétaire et où est fait l'hébergement" />
)


export default PrivacyPage