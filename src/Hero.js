import React from 'react'
import heroimage from './images/hero-image.png'
import vec from './images/shopnow.png'


const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="hero-section__text">
        <div className="width">
          <h1>
          <span className='white-bg'>LET’S</span> EXPLORE <span className='yellow-bg'>UNIQUE</span> CLOTHES.
        </h1>
        </div>
        <p>Live for Influential and Innovative fashion!</p>
        <div className="hero-section__cta">
          <img src={vec} alt="vector" className='vector'/>
          <a href="#" className='hero-section__cta--button'>Shop now</a>
        </div>
      </div>
      <div className="hero-section__image">
        <img src={heroimage} alt="image" className='hero-section__image--img'/>
      </div>
    </div>
  )
}

export default Hero
