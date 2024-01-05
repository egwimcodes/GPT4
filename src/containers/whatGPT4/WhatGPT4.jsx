import React from 'react'
import './whatGPT4.css'
import  Feature from '../../components/feature/Feature' 
const WhatGPT4 = () => {
  return (
    <div className='gpt4__whatgpt4 section__margin'>
      <div className='gpt4__whatgpt4-feature'>
        <Feature title={'What is GPT-4?'} text={'GPT-4 is a state-of-the-art language model that can generate human-like text. It is trained on a large corpus of text data and is able to generate text that is similar to human-written text.'} />
      </div>
      <div className='gpt4__whatgpt4-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt4__whatgpt4-container'>
        <Feature title={'Chatbots'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'} />
        <Feature title={'Knowledgebase'} text={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b / c'} />
        <Feature title={'Education'} text={'At jointure ladyship an insisted so humanity he. Friendly Bachelor entrance to on by. As put impossible own apartments b / c'} />
        <Feature title={'Education'} text={'At jointure ladyship an insisted so humanity he. Friendly Bachelor entrance to on by. As put impossible own apartments b / c'} />
      </div>
    </div>
  )
}

export default WhatGPT4
