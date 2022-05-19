import React from 'react'
import { Link } from 'react-router-dom'

const MyOrder = () => {
  return (
    <div>
      <div className="myaccount-sub-header">
        <h3>My Orders</h3>
        <p>View your order history or check the satus of a recent order.</p>
      </div>
      <div className="myOrder-content">
        <p>You haven't placed any orders yet.</p>
        <Link to="/">Start Browsing</Link>
      </div>
    </div>
  )
}

export default MyOrder
