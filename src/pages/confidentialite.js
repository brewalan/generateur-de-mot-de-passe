import * as React from 'react'
import Layout from '../components/template/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { intro } from './confidentialite.module.css'
import FooterPage from '../components/template/footer'
import Seo from '../components/template/seo'

  const PrivacyPage = () => {
  return (
    <React.Fragment>
        <Layout pageTitle="Déclaration de confidentialité">
            <StaticImage
                alt="Un cookie, ces merveilleux petits biscuits"
                src="../images/cookie.jpg"
            />        
            <h2 className={intro}>Introduction</h2>
            <p>Dans le cadre de son activité, la société Le Conjugueur SRL, dont le siège social est situé à Grez-Doiceau, Belgique, est amenée à collecter et à traiter des informations dont certaines sont qualifiées de "données personnelles". Le Conjugueur SRL attache une grande importance au respect de la vie privée, et n’utilise que des donnes de manière responsable et confidentielle et dans une finalité précise.</p>

            <h2 className={intro}>Données personnelles</h2>
            <p>Sur ce site web, il y a 2 types de données susceptibles d’être recueillies :</p>
            <h3>Les données transmises directement</h3>
            <p>Ces données sont celles que vous nous transmettez directement, via un formulaire de contact ou bien par contact direct par email. Sont obligatoires dans le formulaire de contact les champs « prénom et nom », « entreprise ou organisation » et « email ».</p>
            <h3>Les données collectées automatiquement</h3>
            <p>Lors de vos visites, aucune donnée n'est collectée. Généralement, les cookies sont utilisés pour le suivi de la fréquentation des sites. Ce n'est pas le cas ici, ce site ne trace pas ses utilisateurs. Le suivi est fait de manière anonyme par Matomo sur https://analytics.theconjugator.com. Ceci permet de voir l'audience de ce site.</p>

            <h2 className={intro}>Utilisation des données</h2>
            <p>Les données que vous nous transmettez directement sont utilisées dans le but de vous re-contacter et/ou dans le cadre de la demande que vous nous faites. Ces données sont utilisées par Le Conjugeuur SRL, responsable du traitement des données, et ne seront jamais cédées à un tiers ni utilisées à d’autres fins que celles détaillées ci-dessus.</p>

            <h2 className={intro}>Base légale</h2>
            <p>Les données personnelles ne sont collectées qu’après consentement obligatoire de l’utilisateur. Ce consentement est valablement recueilli (boutons et cases à cocher), libre, clair et sans équivoque. Dans le cas présent, il n'y a pas de consentement à demander car aucune donnée n'est collectée.</p>

            <h2 className={intro}>Durée de conservation</h2>
            <p>Aucune donnée n'est conservée par ce site.</p>

            <h2 className={intro}>Cookies</h2>
            <p>Voici la liste des cookies utilisées et leurs objectifs :</p>
            <ul>
                <li>Aucun Cookie n'est utilisé par ce site</li>
            </ul>

            <h2 className={intro}>Vos droits concernant les données personnelles</h2>
            <p>Vous avez le droit de consultation, demande de modification ou d’effacement sur l’ensemble de vos données personnelles. Vous pouvez également retirer votre consentement au traitement de vos données.</p>

        </Layout>
        <FooterPage />

</React.Fragment>
  )
}

export const Head = () => (
    <Seo 
        title="Déclaration de Confidentialité"
        description="Utilisation des cookies sur ce site. Déclaration de confidentialité." />
)

export default PrivacyPage