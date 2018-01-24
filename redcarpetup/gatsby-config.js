module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet'],
  plugins: [
   `gatsby-transformer-yaml`,
   {
     resolve: `gatsby-source-filesystem`,
     options: {
       path: `./src/data/`,
     },
   },
 ],
};
