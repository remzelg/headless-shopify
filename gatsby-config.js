// See: https://www.gatsbyjs.org/docs/gatsby-config/
module.exports = {
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "dev-green",
        // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
        accessToken: "089726f1be1fb54986ab24fb74eb8883",
        verbose: true,
        paginationSize: 250,
        includeCollections: ["shop"],
      },
    },

    {
      resolve: `gatsby-plugin-shopify-buy`,
      options: {
        stores: {
          anyKeyForYourStore: {
            domain: `dev-green.myshopify.com`,
            accessToken: `089726f1be1fb54986ab24fb74eb8883`,
          },
        }
      }
    },

    // {
    //   resolve: `gatsby-plugin-layout`,
    // },
  ]
}
