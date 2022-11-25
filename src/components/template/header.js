import * as React from 'react'

// Step 1: Import the useStaticQuery hook and graphql tag
//import { useStaticQuery, graphql } from 'gatsby'
import { siteTitle} from './header.module.css'

const Header = () => {
  /* Step 2: Use the useStaticQuery hook and
    graphql tag to query for data
    (The query gets run at build time) */
   /* const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      siteBuildMetadata {
        buildTime
      }
    }
  `)*/

  return (
    <header className={siteTitle}>
      {/* Step 3: Use the data in your component */}
      {/* <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.siteBuildMetadata.buildTime}</p> */}
      <h1>test</h1>
    </header>
  )
}

export default Header