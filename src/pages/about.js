import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Header from '../components/header'


const AboutPage = () => {
  return (
    <React.Fragment>
        <Header />        
        <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>




        <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="../images/about-img.jpg"
        />

        </Layout>
    </React.Fragment>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage