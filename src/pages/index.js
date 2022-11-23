import * as React from "react"
import Layout from "../components/layout"
import FooterPage from "../components/footer"
import MotDePasse from "../components/motdepasse/motdepasse"
import { appTexte } from "../utils/appTexte"

const seo = {
  title: "Générateur de mot de passe",
  description: "Le générateur de mot de passe vous permet de créer un mot de passe fort et sécurisé."
}


const IndexPage = () => {
  return (
    <React.Fragment>

      <Layout pageTitle={seo.title}>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>


      <main>
        <h2>{appTexte.creerMotDePasse}</h2>
        <MotDePasse />
      </main>

      <FooterPage />
    </React.Fragment>
  )
}

export default IndexPage

export const Head = () => (
  <React.Fragment>  
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />  
  </React.Fragment>  
)
