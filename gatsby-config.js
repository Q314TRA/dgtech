// All Of Your Site Conifuration

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: "Inicio",
    titleTemplate: `Digital technologies`,
    description: `Mobile software development company.`,
    author: `@dgTech`,
    twitterUsername: `@dgTech`,
    image: 'landing.png',
    siteUrl: 'https://dgtechs.com.co',
    getform: ".",
    copyright: "Digital technologies. <a href='https://dgtechs.com.co' target='_blank' rel='noopener noreferrer'>All Rights Reserved.</a>",
    social: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com"
    },
    contact: {
      phone: '(+57) 300 485-9118',
      address: "Cra 41 #960 Poblado - Medellin Antioquia",
      email: 'contacto@dgtechs.com.co',
      website: "https://dgtechs.com.co",
      rating: "5",
      customers: "700",
      clients: "3200",
      addressInfos: [
        {
          "id": "med-antioquia",
          "state": "Medellin",
          "address": "Cra 41 #960 Poblado - Medellin Antioquia",
          "email": "contacto@dgtechs.com.co",
          "phone": "(+57) 300 485-9118"
        }
      ]
    }
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/containers/layout/layout.js`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          heading: null,
          maxDepth: 6,
        },
        "excerpt_separator": `<!-- endexcerpt -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name": "DIGITAL TECHNOLOGY",
        "short_name": "dgtechs",
        "theme_color": "#FF7424",
        "background_color": "#ffffff",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "icon": "src/assets/images/digitechs_orange_min.png",
        "icons": [
          {
            "src": "/icons/digitechs_orange_72x59.png",
            "sizes": "72x59",
            "type": "image/png"
          },
          {
            "src": "/icons/digitechs_orange_96x79.png",
            "sizes": "96x79",
            "type": "image/png"
          },
          {
            "src": "/icons/digitechs_orange_128x105.png",
            "sizes": "128x105",
            "type": "image/png"
          },
          {
            "src": "/icons/digitechs_orange_144x118.png",
            "sizes": "144x118",
            "type": "image/png"
          },
          {
            "src": "/icons/digitechs_orange_152x125.png",
            "sizes": "152x125",
            "type": "image/png"
          },
          {
            "src": "/icons/digitechs_orange_192x158.png",
            "sizes": "192x158",
            "type": "image/png"
          },
          {
            "src": "/icons/digitechs_orange_384x316.png",
            "sizes": "384x316",
            "type": "image/png"
          },
          {
            "src": "/icons/digitechs_orange_512x421.png",
            "sizes": "512x421",
            "type": "image/png"
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
        ],
        useClassNames: true
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'http://themesmummy.com/mitech',
        sitemap: 'http://themesmummy.com/mitech/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/about-us/`,
          `/case-studies/`,
          `/contact-us/`,
          `/index-appointment/`,
          `/index-infotechno/`,
          `/index-processing/`,
          `/index-resolutions/`,
          `/index-services/`,
          `/it-services/`,
          `/it-solutions/`,
          `/leadership/`,
          `/it-service/*`,
          `/case-study/*`,
          `/case-study/*`,
          `/blogs/*`
        ]
      }
    }
  ]
}
