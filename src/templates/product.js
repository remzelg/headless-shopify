import React from 'react';
import { graphql } from "gatsby";
import ProductForm from "../components/product_form";
import Cart from "../components/cart"

const Product = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <div className='product-page'>
      <div className='cart'>
        <h2>Cart</h2>
        <Cart/>
      </div>
      <h1>{product.title}</h1>
      <ProductForm/>
      <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    </div>
  )
}

// NOTE: query response is automatically inserted into data variable
export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
    }
  }
`

export default Product
