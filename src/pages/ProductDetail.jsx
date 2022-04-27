import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../components/Products'

const ProductDetail = ({ products }) => {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  console.log(products)

  useEffect(() => {
    getProduct()
    console.log(product)
    console.log(id)
  }, [])

  const getProduct = () => {
    products.forEach((prod) => {
      if (parseInt(prod.id) === parseInt(id)) {
        console.log(prod.id)
        setProduct({ ...prod })
      }
    })
  }

  return (
    <div>
      {product && <Products {...product} className={'productDetail'} />}
    </div>
  )
}

export default ProductDetail
