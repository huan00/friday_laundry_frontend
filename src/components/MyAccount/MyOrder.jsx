import React from 'react'
import { Link } from 'react-router-dom'

const MyOrder = () => {
  return (
    <div>
      <div>
        <h3>My Orders</h3>
        <p>View your order history or check the satus of a recent order.</p>
      </div>
      <div>
        <p>You haven't placed any orders yet.</p>
        <Link to="/">Start Browsing</Link>
      </div>
    </div>
  )
}

export default MyOrder
