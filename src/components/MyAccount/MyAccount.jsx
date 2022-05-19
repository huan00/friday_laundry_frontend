import React, { useState } from 'react'

const MyAccount = () => {
  const [header, setHeader] = useState('My Account')

  return (
    <div>
      <div>
        <div>
          <h3>{header}</h3>
          <p>View and edit your personal info below</p>
        </div>
        <div>
          <button>Discard</button>
          <button>Update Info</button>
        </div>
      </div>
      <div>
        <div>
          <p>Account</p>
          <p>Update & Edit the information you share with the community</p>
        </div>
        <div>Login Email: email</div>
        <form>
          <label htmlFor="">First Name</label>
          <input type="text" />
          <label htmlFor="">Last Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Phone</label>
          <input type="text" />
          <button>Discard</button>
          <button>Update Info</button>
        </form>
      </div>
    </div>
  )
}

export default MyAccount
