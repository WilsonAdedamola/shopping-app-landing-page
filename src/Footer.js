import React from 'react'
import fb from './images/fb.png'
import insta from './images/insta.png'
import twit from './images/twit.png'
import link from './images/link.png'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="socials">
                <h1>FASHION</h1>
                <p>Complete your style with awesome clothes from us.</p>
                <div className="social__links">
                    <img src={fb} alt="facebook" />
                    <img src={insta} alt="instagram" />
                    <img src={twit} alt="twitter" />
                    <img src={link} alt="linkedin" />
                </div>
            </div>
            <div className="links">
                <div className="company">
                    <p>Company</p>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="company">
                    <p>Quick Link</p>
                    <ul>
                        <li><a href="#">Share Location</a></li>
                        <li><a href="#">Orders Tracking</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div className="company">
                    <p>Legal</p>
                    <ul>
                        <li><a href="#">Terms & conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
