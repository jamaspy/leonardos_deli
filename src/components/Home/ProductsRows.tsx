import React from "react"
import { product_data } from "./product_data"
import ProductBox from "./ProductBox"
const ProductsRows = () => {
  return (
    <div>
      {product_data &&
        product_data.map(product => (
          <ProductBox
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
    </div>
  )
}

export default ProductsRows
