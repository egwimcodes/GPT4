import React from 'react'
import './footer.css'
import logo from '../../assets/gpt4Logo.png'
const Footer = () => {
  return (
    <div className='gpt4__footer section__padding' >
      <div className="gpt4__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="gpt4__footer-btn">
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="gpt4__footer-links">
        <div className="gpt4__footer-links_logo">
          <img src={logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Get in touch</h4>
          <p>No 12 okija street Anambra Nigeria</p>
          <p>+234 806 903 5907</p>
          <p>egwimcodes@gmail.com</p>
        </div>
      </div>

      <div className="gpt4__footer-copyright">
        <p>@2021 GPT-4. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
