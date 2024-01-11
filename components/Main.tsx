'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Test = () => {
  return (
    <div className="flex items-center text-center justify-center h-screen ">
      <div className='bg-gradient-to-r bg-clip-text text-transparent from-[#1377D4]  to-[#900098] inline-block'>
      <TypeAnimation
      sequence={[
        'I am WebDeveloper.',
        1000, 
        'I am 13 years old',
        1000,
        'I love Node.js, Next.js etc.',
        1000,
        'My discord ID is @mc_dev1',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.2em'}}
      repeat={Infinity}
    />
    </div>
    </div>
    
  )
}

export default Test