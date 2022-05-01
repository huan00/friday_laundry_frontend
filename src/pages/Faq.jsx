import React, { useState } from 'react'
import Banner from '../components/Banner'

const Faq = () => {
  const [bannerMsg, setBannerMsg] = useState('FAQ')
  return (
    <div>
      <Banner title={bannerMsg} />
      <div>
        <h1>Frequently asked questions</h1>
        <h6>How do I add a new question & answer?</h6>
        <h6>Can I insert an image, video, or gif in my FAQ?</h6>
        <h6>How do I edit or remove the "FAQ" title?</h6>
      </div>
    </div>
  )
}

export default Faq
