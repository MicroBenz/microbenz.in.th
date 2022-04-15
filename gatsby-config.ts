import path from 'path';

const env = process.env.NODE_ENV || 'development';

const config = {
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
    'gatsby-plugin-image',
    'gatsby-plugin-preact',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve('content/blog'),
        // path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve('content/assets'),
        // path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        ssr: true,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              withWebp: true,
              quality: 70,
              showCaptions: false,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            // options: {
            //   classPrefix: 'prism--'
            // }
          },
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
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: env === 'development' ? 'UA-76883236-1' : 'UA-76883236-2',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => allMarkdownRemark.edges.map((edge) => ({
              ...edge.node.frontmatter,
              description: edge.node.excerpt,
              date: edge.node.frontmatter.date,
              url: encodeURI(site.siteMetadata.siteUrl + edge.node.fields.slug),
              guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              // custom_elements: [{ 'content:encoded': edge.node.html }],
            })),
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'MicroBenz RSS Feed',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'เบนซ์เขียนบล็อกนะจ๊ะ',
        short_name: 'MicroBenz',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#3B76BF',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png',
      },
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
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
};

export default config;
