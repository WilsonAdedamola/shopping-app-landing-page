import React from 'react'
import hm from './images/h&m.png'
import lacoste from './images/lacoste.png'
import shopify from './images/shopify.png'
import amazon from './images/amazon.png'
import obey from './images/obey.png'
import levi from './images/levi.png'

const Partner = () => {
  return (
    <div className='partner'>
      <div className="partner-logo">
        <img src={hm} alt="H&M" className="partner-logo__img smaller"/>
      </div>
      <div className="partner-logo">
        <img src={obey} alt="OBEY" className="partner-logo__img smaller"/>
      </div>
      <div className="partner-logo">
        <img src={shopify} alt="shopify" className="partner-logo__img"/>
      </div>
      <div className="partner-logo">
        <img src={lacoste} alt="LACOSTE" className="partner-logo__img" />
      </div>
      <div className="partner-logo">
        <img src={amazon} alt="amazon" className="partner-logo__img smaller"/>
      </div>
      <div className="partner-logo">
        <img src={levi} alt="LEVI" className="partner-logo__img smaller"/>
      </div>
    </div>
  )
}

export default Partner
