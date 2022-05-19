import React from 'react'

const MySubscription = () => {
  return (
    <div>
      <div className="myaccount-sub-header">
        <h3>My Subscriptions</h3>
        <p>View and manage the subscriptions you've purchased</p>
      </div>
      <div className="mySubscription-content">
        <div className="mySubscription-tab">
          <div>
            <h4>Beginner</h4>
            <ul>
              <li>$15.00 per month</li>
              <li>Payments completed: 3 of 6</li>
              <li>Last payment: April 18, 2022</li>
              <li>Next payment: May 18, 2022</li>
              <li>Credit Card</li>
            </ul>
          </div>
          <div>
            <p>Expires: May 18, 2022</p>
            <p>Start Date: May 18, 2020</p>
          </div>
          <div className="mySubscription-status">
            <button className="mySubscription-btn">Active</button>
          </div>
        </div>
        <div className="mySubscription-tab">
          <div>Pro</div>
          <div>Expires: May 18, 2022</div>
          <div className="mySubscription-status">
            <button className="mySubscription-btn">Active</button>
          </div>
        </div>
        <div className="mySubscription-tab">
          <div>VIP</div>
          <div>Expires: May 18, 2022</div>
          <div className="mySubscription-status">
            <button className="mySubscription-btn">Expired</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MySubscription
