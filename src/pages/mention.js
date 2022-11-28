import * as React from 'react'
import Layout from '../components/template/layout'
import { StaticImage } from 'gatsby-plugin-image'
import FooterPage from '../components/template/footer'
import Seo from '../components/template/seo'

  const PrivacyPage = () => {
  return (
    <React.Fragment>
        <Layout pageTitle="Mentions légales">
            <StaticImage
                alt="Le légal"
                src="../images/mention.jpg"
            />        

            <p>Ce site est proposé par la société Le Conjugueur SRL enregistrée à la Banque Carrefour des Entreprises en Belgique sous le numéro de TVA BE0687930631.</p>
            <p>Responsable de l'édition du contenu : B. Le Dru</p>

            <p>Le site Internet est hébergé par la société Amen.fr (Agence des Médias Numériques) dont le siège social est situé 12/14 Rond-point des Champs-Elysées, 75008 Paris (France)</p>


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