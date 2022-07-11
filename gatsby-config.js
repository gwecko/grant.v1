module.exports = {
  siteMetadata: {
    title: `Grant Wecker 👾`,
    // siteUrl: `https://www.yourdomain.tld`
    siteUrl: `https://grantwecker.com`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
          name: "images",
          path: "./src/images/"
      },
      __key: "images"
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
        path: `${__dirname}/projects`
      }
    }
  ]
};