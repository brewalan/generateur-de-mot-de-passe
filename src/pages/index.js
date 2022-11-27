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

const remarque = {
  textAlign: "justify",
  marginTop: "5px",
  marginBottom: "5px"
}


const IndexPage = () => {
  return (
    <React.Fragment>

      <Layout pageTitle={seo.pageH1}>

        <MotDePasse />

        <div style={remarque}><b>Remarques importantes</b>
          <ul>
            <li>Un mot de passe sécurisé est un moyen simple et efficace de protéger vos données.</li>
            <li>Aucun mot de passe n'est stocké sur le server</li>
            <li>La génération des mots de passe se fait toujours en local</li>
            <li>Aucun cookie ou dispositif de traçage n'est utilisé par le site</li>
          </ul>
        </div>

      </Layout>

      <FooterPage />
    </React.Fragment>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title={seo.title} description={seo.description} />
)
