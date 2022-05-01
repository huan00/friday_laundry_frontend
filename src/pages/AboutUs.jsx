import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFaceSmile,
  faTemperatureHalf,
  faTShirt,
  faTshirt,
  faHandsWash
} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Banner from '../components/Banner'

const AboutUs = () => {
  const [bannerMsg, setBannerMsg] = useState('About Us')
  return (
    <div>
      <Banner title={bannerMsg} />
      <div>
        <div>
          <FontAwesomeIcon icon={faFaceSmile} size="xl" />
          <h6>Everything you need to know about your fave T brand.</h6>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div>Background</div>
      </div>
      <div>
        <div>
          <FontAwesomeIcon icon={faTemperatureHalf} />
          <p>I'm a paragraph. Click here to add your own text and edit me.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faTShirt} />
          <p>I'm a paragraph. Click here to add your own text and edit me.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faHandsWash} />
          <p>I'm a paragraph. Click here to add your own text and edit me.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
