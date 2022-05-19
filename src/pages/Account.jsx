import React, { useState } from 'react'
import { AiOutlineCamera } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import MyAddress from '../components/MyAccount/MyAddress'
import MyOrder from '../components/MyAccount/MyOrder'
import MySubscription from '../components/MyAccount/MySubscription'
import MyWallet from '../components/MyAccount/MyWallet'
import MyAccount from '../components/MyAccount/MyAccount'

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
      <div className="myaccount-picture">
        <div>
          <AiOutlineCamera />
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <p>UserName</p>
          </div>
          <div>
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
      <div className="myaccount-nav">
        {nav.map((el, idx) => (
          <p onClick={handleActive}>{el}</p>
        ))}
      </div>
      <div className="myaccount-content">{render()}</div>
    </div>
  )
}

export default Account
