const config = require('./src/config')

module.exports = {
  siteMetadata: {
    title: ` <Grant Wecker/>`,
    siteUrl: `https://grantwecker.com`,
    description: `Grant Wecker is a software developer currently focusing on web applications.`,
    image: '/preview.png',
    icon: '/retro_icon.png'
  },
  
  trailingSlash: `never`,
  
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-transformer-sharp",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'GrantWecker',
        short_name: 'GrantWecker',
        start_url: '/',
        background_color: config.colors.darkGreen,
        theme_color: config.colors.white,
        display: 'minimal-ui',
        icon: 'static/retro_icon.png',
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: "true",
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects', 
        path: `${__dirname}/projects/`
      }
    },
  ]
};