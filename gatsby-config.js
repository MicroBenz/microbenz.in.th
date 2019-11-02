const env = process.env.NODE_ENV || 'development'

module.exports = {
  siteMetadata: {
    title: 'เบนซ์เขียนบล็อกนะจ๊ะ - MicroBenz',
    author: 'Tananan Tangthanachaikul',
    description: 'เบนซ์เขียนบล็อกนะจ๊ะ',
    siteUrl: 'https://microbenz.in.th',
    social: {
      twitter: 'microbenz',
      medium: 'microbenz',
    },
  },
  plugins: [
    'gatsby-plugin-preact',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: true,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              withWebp: true,
              quality: 70,
              showCaptions: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          // 'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: env === 'development' ? '' : `UA-76883236-2`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `เบนซ์เขียนบล็อกนะจ๊ะ`,
        short_name: `MicroBenz`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3B76BF`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: 'gatsby-plugin-typography',
    //   options: {
    //     pathToConfigModule: 'src/utils/typography',
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-google-fonts',
    //   options: {
    //     fonts: ['Sarabun:400,500,700'],
    //   },
    // },
  ],
}
