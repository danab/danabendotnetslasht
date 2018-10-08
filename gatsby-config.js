module.exports = {
  siteMetadata: {
    title: 'Dana Bennett - Web Developer',
  },
  pathPrefix: '/t',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Dana Bennett',
        short_name: 'Dana Bennett',
        start_url: '/t',
        background_color: '#fff',
        theme_color: '#006db3',
        display: 'minimal-ui',
        icon: 'src/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [], // code formatting and what not
      },
    },
  ],
}
