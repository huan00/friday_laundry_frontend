import React, { useState } from 'react'
import { useEffect } from 'react'
import { CheckSession, UpdateUser } from '../../services/Auth'

const MyAccount = () => {
  const header = 'My Account'
  const [user, setUser] = useState({
    full_name: '',
    phone: '',
    email: '',
    billing_address: '',
    country: ''
  })
  const [data, setData] = useState({
    full_name: '',
    phone: '',
    email: '',
    billing_address: '',
    country: ''
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  useEffect(() => {
    setData({
      full_name: user.full_name,
      phone: user.phone,
      email: user.email,
      billing_address: user.billing_address,
      country: user.country
    })
  }, [user])

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const handleChangeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmitData = async (e) => {
    e.preventDefault()
    const payload = await UpdateUser(data)
    // checkToken()
    setData(payload)
  }

  return (
    <div>
      <div className="myaccount-sub">
        <div className="myaccount-header">
          <h3>{header}</h3>
          <p>View and edit your personal info below</p>
        </div>
      </div>
      {user && (
        <div>
          <div className="myaccount-email">
            <p>Account</p>
            <p>Update & Edit the information you share with the community</p>
          </div>
          <form className="myaccount-form">
            <section>
              <label htmlFor="">Name</label>
              <input
                type="text"
                onChange={handleChangeData}
                name="full_name"
                value={data?.full_name}
              />
            </section>
            <section>
              <label htmlFor="">Email</label>
              <input
                disabled
                type="email"
                name="email"
                defaultValue={data?.email}
              />
            </section>
            <section>
              <label htmlFor="">Phone</label>
              <input
                type="text"
                onChange={handleChangeData}
                name="phone"
                value={data?.phone}
              />
            </section>
            <section>
              <label htmlFor="">billing_address</label>
              <input
                type="text"
                onChange={handleChangeData}
                name="billing_address"
                value={data?.billing_address}
              />
            </section>
            <section>
              <label htmlFor="">country</label>
              <input
                type="text"
                onChange={handleChangeData}
                name="country"
                value={data?.country}
              />
            </section>
            <section className="myaccount-update-btn bottom-update-btn">
              <button>Discard</button>
              <button onClick={handleSubmitData}>Update Info</button>
            </section>
          </form>
        </div>
      )}
    </div>
  )
}

export default MyAccount
