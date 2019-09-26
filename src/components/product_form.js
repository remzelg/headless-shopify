import React, { useContext } from 'react'
import StoreContext from '../context/store_context'

const ProductForm = props => {
  const storeContext = useContext(StoreContext)
  const handleAddToCart = () => {
    // TODO: Don't hardcode variant id here!
    storeContext.addVariantToCart("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yMTk3ODE2MzM4MDMwOQ==", 1)
  }
  //const hasVariants = props.product.variants.length > 1

  return (
    <div className='product-form'>
      <button className='product-form-add-to-cart' type="submit" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductForm
