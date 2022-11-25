import * as React from "react"
import Layout from "../components/template/layout"
import FooterPage from "../components/template/footer"
import MotDePasse from "../components/motdepasse/motdepasse"
import Seo from "../components/template/seo"
import { appTexte } from "../utils/appTexte"


const seo = {
  pageH1: appTexte.creerMotDePasse,
  title: appTexte.generateurMotDePasse,
  description: appTexte.indexDescr
}

const textJustify = {
  textAlign: "justify",
  minWidth: "500px"
}

const IndexPage = () => {
  return (
    <React.Fragment>

      <Layout pageTitle={seo.pageH1}>
        <div style={textJustify}>Créer votre mot de passe sécurisé avec des minuscules, des majuscules, des chiffres et des caractères spéciaux.<br />
        Un mot de passe sécurisé est un moyen simple pour protéger vos données.</div>

        <MotDePasse />

      </Layout>

      <FooterPage />
    </React.Fragment>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title={seo.title} descr ={seo.descr} />
)
