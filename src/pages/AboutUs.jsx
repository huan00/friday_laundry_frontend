import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Banner from '../components/Banner'

import '../styles/AboutUs.css'

const AboutUs = () => {
  const [bannerMsg, setBannerMsg] = useState('About Us')
  return (
    <div className="about-us">
      <Banner title={bannerMsg} />
      <div className="about-us-content">
        <div>
          <FontAwesomeIcon icon={faFaceSmile} size="xl" />

          <p>Just a simply ecommerce website i build using react and CSS</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
