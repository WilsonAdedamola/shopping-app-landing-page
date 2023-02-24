import React from 'react'
import down from './images/download-cta.png'
import voucher from './images/voucher.png'

const Download = () => {
  return (
    <section>
      <div className="download-section">
        <div className="download">
        <h1>DOWNLOAD APP & GET THE VOUCHER!</h1>
        <p>Get 30% off for first transaction using Rondovision mobile app for now.</p>
        <img src={down} alt="" />
      </div>
      <div className="download-image">
        <img src={voucher} alt="" />
      </div>
      </div>
      
    </section>
  )
}

export default Download
