import React, {useState} from 'react'
import logo from './images/logo.png'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

const Menu = () =>(
    <>
        <ul className="nav__link">
            <li className='nav__item'><a href="#">CATALOGUE</a></li>
            <li className='nav__item'><a href="#">FASHION</a></li>
            <li className='nav__item'><a href="#">FAVOURITE</a></li>
            <li className='nav__item'><a href="#">LIFESTYLE</a></li>
            <li className='nav__item cta'><a href="#">SIGN UP</a></li>
        </ul>
    </>
)

const Navbar = () => {

const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav>
      <div className="logo">
        <div className="toggle">
          { toggleMenu ? <RiCloseLine size={40} className='toggle-btn' onClick={()=>setToggleMenu(false)}/> : <RiMenu3Line size={40} className='toggle-btn' onClick={()=>setToggleMenu(true)}/> }
        </div>
        <img src={logo} alt="logo" />
      </div>
      <div className="large-screen__menu">
        <Menu />
      </div>
      { toggleMenu && 
        <div className="small-screen__menu">
            <Menu />
        </div>
      } 
    </nav>
  )
}

export default Navbar
