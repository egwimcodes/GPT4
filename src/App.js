import React from 'react'
import {Footer, Header, Blog, Features,  Possibility, WhatGPT4 } from './containers';
import { Navbar, Brand, CTA } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT4 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  )
}

export default App
