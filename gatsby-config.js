/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'My First Gatsby Site',
    description: 'A tutorial site built by following the Gatsby tutorial.',
    image: '/icon.png',
    siteUrl: `https://bricua-s-first-gatsby-site.netlify.app/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx"
  ],
}
