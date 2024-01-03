import React from 'react'
import {Footer, Header, Blog, Features,  Possibility, WhatGPT3 } from './containers';
import { Navbar, Brand, CTA } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  )
}

export default App
