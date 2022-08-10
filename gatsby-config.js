module.exports = {
  siteMetadata: {
    title: `<Grant Wecker />`,
    siteUrl: `https://grantwecker.com`,
    description: `Grant Wecker is a software developer currently focusing on web applications.`,
  },
  trailingSlash: `never`,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-robots-txt",
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
    "gatsby-plugin-gatsby-cloud"
  ]
};