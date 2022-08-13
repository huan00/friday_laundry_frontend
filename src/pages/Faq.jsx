import React, { useState } from 'react'
import Banner from '../components/Banner'

import '../styles/Faq.css'

const Faq = () => {
  const [bannerMsg, setBannerMsg] = useState('FAQ')
  return (
    <div className="faq">
      <Banner title={bannerMsg} />
      <div className="faq-content">
        <h1>Frequently asked questions</h1>
        <h6>COMING SOON!</h6>
      </div>
    </div>
  )
}

export default Faq
