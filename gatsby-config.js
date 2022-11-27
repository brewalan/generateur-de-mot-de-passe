/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Générateur de mot de passe`,
    description: 'Générateur de mot de passe sécurisé',
    siteUrl: 'https://bldtech.online'
  },
  plugins: 
    ["gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 

    "gatsby-plugin-sass",    
/**    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: 'YOUR_SITE_ID',
        matomoUrl: 'https://analytics.theconjugator.com',
        siteUrl: 'https://YOUR_LIVE_SITE_URL.COM',
        disableCookies: true
      }
    }*/  
  ]
};