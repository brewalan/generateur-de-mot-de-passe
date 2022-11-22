/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Générateur de mot de passe`,
    description: 'Générateur de mot de passe sécurisé',
    siteUrl: `https://www.yourdomain.tld`
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
    {
      resolve: 'gatsby-source-filesystem',
        options: {
          "name": "images",
          "path": "./src/images/"
        },
      __key: "images"
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: 'YOUR_SITE_ID',
        matomoUrl: 'https://analytics.theconjugator.com',
        siteUrl: 'https://YOUR_LIVE_SITE_URL.COM',
        disableCookies: true
      }
    }  
  ]
};