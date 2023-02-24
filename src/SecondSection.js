import React from 'react'
import yellow from './images/yellow.png'

const SecondSection = () => {
  return (
    <section className='second-section'>
      <div className="section__img">
        <img src={yellow} alt="" className="section__img--img"/>
      </div>
      <div className="section-text">
        <h1><span>PAYDAY</span> SALE NOW</h1>
        <p className='section-text__first-text'>Spend minimal $100 get 30% off voucher code for your next purchase</p>
        <p className='section-text__second-text'>1 June - 10 June 2021</p>
        <p className='section-text__third-text'>*Terms & Conditions apply</p>
        <a href="#" className='second-section__cta'>Shop now</a>
      </div>
    </section>
  )
}

export default SecondSection
