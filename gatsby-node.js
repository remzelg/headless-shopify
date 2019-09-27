const path = require("path")

// Build all product pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  `)

  pages.data.allShopifyProduct.edges.forEach(edge => {
    var product = edge.node;
    createPage({
      path: `/${product.handle}`,
      component: path.resolve("./src/templates/product.js"),
      context: {
        handle: product.handle
      },
    })
  })
}
