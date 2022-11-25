import * as React from "react"
import Layout from "../components/layout"
import FooterPage from "../components/footer"
import MotDePasse from "../components/motdepasse/motdepasse"
import { appTexte } from "../utils/appTexte"

const seo = {
  pageH1: appTexte.creerMotDePasse,
  title: appTexte.generateurMotDePasse,
  description: appTexte.indexDescr
}


const IndexPage = () => {
  return (
    <React.Fragment>

      <Layout pageTitle={seo.pageH1}>
        <p>Créer votre mot de passe sécurisé avec des minuscules, des majuscules, des chiffres et des caractères spéciaux. Un mot de passe sécurisé est un moyen simple de protéger vos données.</p>

        <h2>{appTexte.creerMotDePasse}</h2>
        <MotDePasse />

      <i class="fa-light fa-clone"></i>
      </Layout>

      <FooterPage />
    </React.Fragment>
  )
}

export default IndexPage

export const Head = () => (
  <React.Fragment>  
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />  
    <script src="https://kit.fontawesome.com/dd35bbd14e.js" crossorigin="anonymous"></script>
  </React.Fragment>  
)
