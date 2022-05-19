import React, { useState } from 'react'

const MyAccount = () => {
  const [header, setHeader] = useState('My Account')

  return (
    <div>
      <div className="myaccount-sub">
        <div className="myaccount-header">
          <h3>{header}</h3>
          <p>View and edit your personal info below</p>
        </div>
        <div className="myaccount-update-btn">
          <button>Discard</button>
          <button>Update Info</button>
        </div>
      </div>
      <div>
        <div className="myaccount-email">
          <p>Account</p>
          <p>Update & Edit the information you share with the community</p>
        </div>
        <div>Login Email: email</div>
        <form className="myaccount-form">
          <section>
            <label htmlFor="">First Name</label>
            <input type="text" />
          </section>
          <section>
            <label htmlFor="">Last Name</label>
            <input type="text" />
          </section>
          <section>
            <label htmlFor="">Email</label>
            <input type="text" />
          </section>
          <section>
            <label htmlFor="">Phone</label>
            <input type="text" />
          </section>
          <section className="myaccount-update-btn bottom-update-btn">
            <button>Discard</button>
            <button>Update Info</button>
          </section>
        </form>
      </div>
    </div>
  )
}

export default MyAccount
