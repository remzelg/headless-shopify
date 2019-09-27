import React from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
})

export const defaultStoreContext = {
  client,
  adding: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
}

export const addVariantToCart = (variantId, quantity) => {
  if (variantId === '' || !quantity) {
    console.error('Both a size and quantity are required.')
    return
  }

  this.setState(state => ({
    store: {
      adding: true,
    },
  }))

  const { checkout, client } = this.state.store
  const checkoutId = checkout.id
  const lineItemsToUpdate = [
    { variantId, quantity: parseInt(quantity, 10) },
  ]

  return client.checkout
    .addLineItems(checkoutId, lineItemsToUpdate)
    .then(checkout => {
      this.setState(state => ({
        store: {
          checkout,
          adding: false,
        },
      }))
    })
}

const StoreContext = React.createContext(defaultStoreContext)
export default StoreContext
