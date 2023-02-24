import React from 'react'
import {IoIosArrowRoundForward} from 'react-icons/io'
import fav1 from './images/fav1.png'
import fav2 from './images/fav2.png'
import vec from './images/shopnow.png'

const Favourites = () => {
    
    const favouriteArray = [
        {
            img: fav1,
            title: "Trending on instagram",
            explore: "Explore Now!",
            alt: "favourite"
        },
        {
            img: fav2,
            title: "All Under $40",
            explore: "Explore Now!",
            alt: "favourite"
        }
    ]

  return (
    <section className='favourite-section'>
      <div className="arrivals-head favourite-head">
        <h1>Young's Favourite</h1>
        <img src={vec} alt="" />
      </div>
      <div className="favourite-items">
        {
            favouriteArray.map((items)=>{
                return(
                    <div className="favourite-items__item">
                        <img src={items.img} alt={items.alt} className="favourite-items__item--img"/>
                        <div className="favourite-items__item--text">
                            <div>
                                <p className="favourite-items__item--title">{items.title}</p>
                                <p className="favourite-items__item--explore">{items.explore}</p>
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

export default Favourites
