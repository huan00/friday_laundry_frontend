import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../components/Products'
import { BASE_URL } from '../global'

const ProductDetail = ({ products, setCart, cart }) => {
  const { id } = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const res = await axios.get(`${BASE_URL}/${id}`)

    setProduct(res.data)
  }

  const addToCart = (x) => {
    setCart((cart = cart + x))
  }

  return (
    <div>
      {product && (
        <Products
          {...product}
          className={'productDetail'}
          addToCart={addToCart}
        />
      )}
    </div>
  )
}

export default ProductDetail
