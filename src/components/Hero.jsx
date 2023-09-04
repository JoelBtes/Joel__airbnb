import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero'>
        <img src={`${process.env.PUBLIC_URL}/images/group.png`} className='hero__img' />
        <h1 className='hero__title'>Online Experiences</h1>
        <p className='hero__text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Hero