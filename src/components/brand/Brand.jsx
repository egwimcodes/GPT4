import React from 'react'
import './brand.css'
import { google, slack, atlassian, dropbox, shopify } from './import'
const Brand = () => {
  return (
    <div className='gpt4__brand section__padding'>
      <div className="">
        <img src={google} alt="google" srcset="" />
      </div>
      <div className="">
        <img src={slack} alt="slack" srcset="" />
      </div>
      <div className="">
        <img src={atlassian} alt="atlassian" srcset="" />
      </div>
      <div className="">
        <img src={dropbox} alt="dropbox" srcset="" />
      </div>
      <div className="">
        <img src={shopify} alt="shopify" srcset="" />
      </div>
      
    </div>
  )
}

export default Brand
