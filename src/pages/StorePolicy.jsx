import React from 'react'

import '../styles/StorePolicy.css'

const StorePolicy = () => {
  return (
    <div className="store-policy">
      <h1>Store Policy</h1>
      <div>
        <h6>Customer Care</h6>
        <p>COMING SOON!</p>

        <div>
          <h6>Privacy & Safety</h6>
          <p>COMING SOON!</p>

          <h6>Wholesale Inquiries</h6>
          <p>COMING SOON!</p>
        </div>
        <div className="store-policy-payment">
          <h3>Payment Methods</h3>
          <ul>
            <li>Credit/Debit Cards</li>
            <li>PAYPAL</li>
            <li>Offline Payments</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StorePolicy
