import React from 'react'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Promotion = ({ className }) => {
  return (
    <div className={className}>
      <div className={'leftPromo'}>
        <h2>
          <FontAwesomeIcon icon={faBoltLightning} />
        </h2>
        <h3>Sales is On</h3>
        <h1>25% OFF</h1>
        <p>25% off sitewide using TEES25 at checkout</p>
      </div>
      <div className={'rightPromo'}>
        {/* <img src="https://static.wixstatic.com/media/c837a6_2749f733af59407699862291aaef4b44~mv2.jpg/v1/fill/w_566,h_888,al_c,q_85,enc_auto/c837a6_2749f733af59407699862291aaef4b44~mv2.jpg" /> */}
      </div>
    </div>
  )
}

export default Promotion
