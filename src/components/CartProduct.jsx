import { useState } from 'react'

const CartProduct = ({ product, handleEdit, handleRemove, index }) => {
  const [editProduct, setEditProduct] = useState({ ...product })
  const [updateProduct, setUpdateProduct] = useState(true)
  const handleUpdatedProduct = (e) => {
    setEditProduct({ ...editProduct, [e.target.name]: e.target.value })
  }

  const handleUpdateProduct = (idx, product) => {
    setUpdateProduct((updateProduct) => !updateProduct)
    if (!updateProduct) {
      handleEdit(idx, product)
    }
  }

  return (
    <div className="cartProduct">
      <div className="cart-product-content">
        <img src={product.image} alt="product image" />
        <h4>{product.title}</h4>
        <div className="cart-form-container">
          <section className="cart-form">
            <label htmlFor="price">Price:</label>
            <input
              disabled
              type="text"
              name="price"
              value={`$ ${product.price}`}
            />
          </section>
          <section className="cart-form">
            <label htmlFor="size">Size:</label>
            <select
              style={{
                border: `${!updateProduct ? '1px solid red' : 'none'}`,
                color: `${!updateProduct ? 'red' : 'black'}`
              }}
              disabled={updateProduct}
              name="size"
              id="size"
              onChange={handleUpdatedProduct}
            >
              <option hidden>{editProduct.size}</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="xLarge">xLarge</option>
            </select>
          </section>
          <section className="cart-form">
            <label htmlFor="quanity">Quanity:</label>
            <input
              style={{
                border: `${!updateProduct ? '1px solid red' : 'none'}`,
                color: `${!updateProduct ? 'red' : 'black'}`
              }}
              disabled={updateProduct}
              type="text"
              id="quanity"
              name="quanity"
              value={editProduct.quanity}
              onChange={handleUpdatedProduct}
            />
          </section>
        </div>
      </div>
      <div className="cartProduct-control">
        <p onClick={() => handleUpdateProduct(index, editProduct)}>
          {!updateProduct ? 'Update' : 'Edit'}
        </p>
        <p onClick={() => handleRemove(product)}>Remove</p>
      </div>
    </div>
  )
}

export default CartProduct
