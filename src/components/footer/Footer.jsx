import React from 'react'
import {BiLogoInstagramAlt, BiLogoFacebook, BiLogoTiktok, BiLogoLinkedin} from 'react-icons/bi'
import {AiFillYoutube} from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='footer-block container'>
      <div>
        <h4>Customers</h4>
        <span>How to order</span>
      </div>
      <div>
      <h4>Partners</h4>
        <span>Become a delivery partner</span>
      </div>
      <div>
        <h4>Company</h4>
        <span>About Us</span>
        <span>News</span>
        <span>Career</span>
        <span>Contact us</span>
      </div>
      <div>
      <h4>Useful links</h4>
        <span>Terms & Conditions</span>
      </div>
    </div>
    
      <div className='footer-media'>
        <div className='social-media'> 
        <span>Follow us on social media</span>
        <div>
          <BiLogoLinkedin/>
          <BiLogoInstagramAlt/>
          <BiLogoFacebook/>
          <BiLogoTiktok/>
          <AiFillYoutube/>
        </div>
        </div>
      </div>
    <div className='footer_footer'>
      <p>© All rights reserved 2019 MenuGroup UK LTD</p>
    </div>
    </footer>
  )
}

export default Footer