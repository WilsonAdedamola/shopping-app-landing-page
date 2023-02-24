import React from 'react'
import arrivals1 from './images/arrivals1.png'
import arrivals2 from './images/arrivals2.png'
import arrivals3 from './images/arrivals3.png'
import vec from './images/shopnow.png'
import {IoIosArrowRoundForward} from 'react-icons/io'

const Arrivals = () => {

const arrivalsArray = [
    {
        img: arrivals1,
        productName: "Hoodies & SweatShirts",
        explore: "Explore Now!",
        alt: "Hoodies & SweatShirts"
    },
    {
        img: arrivals2,
        productName: "Coats & Parkas",
        explore: "Explore Now!",
        alt: "Hoodies & SweatShirts"
    },
    {
        img: arrivals3,
        productName: "Tees & T-Shirts",
        explore: "Explore Now!",
        alt: "Coats & Parkas"
    }
]

  return (
    <section className='arrivals-section'>
      <div className="arrivals-head">
        <h1>NEW ARRIVALS</h1>
        <img src={vec} alt="" />
      </div>
      <div className="arrivals-items">
        {
            arrivalsArray.map((items)=>{
                return(
                    <div className="arrivals-items__item">
                        <img src={items.img} alt={items.alt} className="arrivals-items__item--img"/>
                        <div className="arrivals-items__item--text">
                            <div>
                                <p className="arrivals-items__item--title">{items.productName}</p>
                                <p className="arrivals-items__item--explore">{items.explore}</p>
                            </div>
                            <IoIosArrowRoundForward className='foward-icon'/>
                        </div>
                        
                    </div>
                )
            })
        }
      </div>
    </section>
  )
}

export default Arrivals
