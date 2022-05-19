import React, { useState } from 'react'
import { AiFillCamera } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import MyAddress from '../components/MyAccount/MyAddress'
import MyOrder from '../components/MyAccount/MyOrder'
import MySubscription from '../components/MyAccount/MySubscription'
import MyWallet from '../components/MyAccount/MyWallet'
import MyAccount from '../components/MyAccount/MyAccount'
import '../styles/Account.css'

const Account = () => {
  const nav = [
    'My Orders',
    'My Addresses',
    'My Wallet',
    'My Subscriptions',
    'My Account'
  ]
  const [active, setActive] = useState('')

  const handleActive = (idx) => {
    setActive(idx)
  }

  const render = () => {
    switch (active) {
      case 0:
        return <MyOrder />
      case 1:
        return <MyAddress />
      case 2:
        return <MyWallet />
      case 3:
        return <MySubscription />
      default:
        return <MyAccount />
    }
  }

  return (
    <div className="myaccount">
      <div className="myaccount-background">
        <div className="myaccount-camera">
          <AiFillCamera className="myaccount-camera-icon" />
        </div>
        <div className="myaccount-profile-content">
          <div className="myaccount-picture">
            <div className="myaccount-image">
              <img src="" alt="" />
            </div>
            <p className="myaccount-username">UserName</p>
          </div>
          <div>
            <BsThreeDotsVertical className="dot-icon" />
          </div>
        </div>
      </div>
      <div className="myaccount-nav">
        {nav.map((el, idx) => (
          <p onClick={() => handleActive(idx)}>{el}</p>
        ))}
      </div>
      <div className="myaccount-content">{render()}</div>
    </div>
  )
}

export default Account
