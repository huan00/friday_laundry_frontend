import { useState } from 'react'

const CartProduct = ({
  product,
  handleEdit,
  handleRemove,
  productEdit,
  index
}) => {
  const [editProduct, setEditProduct] = useState({ ...product })

  const handleUpdatedProduct = (e) => {
    setEditProduct({ ...editProduct, [e.target.name]: e.target.value })
  }
  console.log({ ...editProduct })
  return (
    <div className="cartProduct">
      <div className="cart-product-content">
        <img src={product.image} alt="product image" />
        <h4>{product.title}</h4>
        <div className="cart-form-container">
          <section className="cart-form">
            <label for="price">Price:</label>
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
                border: `${!productEdit ? '1px solid red' : 'none'}`,
                color: `${!productEdit ? 'red' : 'black'}`
              }}
              disabled={productEdit}
              name="size"
              id="size"
              // value={editProduct.size}
              onChange={handleUpdatedProduct}
            >
              <option selected disabled hidden>
                {editProduct.size}
              </option>
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
                border: `${!productEdit ? '1px solid red' : 'none'}`,
                color: `${!productEdit ? 'red' : 'black'}`
              }}
              disabled={productEdit}
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
        <p onClick={() => handleEdit(index, editProduct)}>
          {!productEdit ? 'Update' : 'Edit'}
        </p>
        <p onClick={() => handleRemove(product)}>Remove</p>
      </div>
    </div>
  )
}

export default CartProduct
