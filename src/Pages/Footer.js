import React from 'react'
import  {Link} from "react-router-dom";
import Logo from "../Assets/Logo.png";
import Visa from "../Assets/visa.png";
import Mastercard from "../Assets/mastercard.png";
import Instagram from '../Assets/insta.png';
import "../Styles/Footer.css";

const Footer = () => {
  return (
    
       <div className="Footer">

        <div className='footer-content'>

            <div className="footer-left">
             <Link to="/" ><img src={Logo}  className='logo' alt='logo'/></Link>

              <div className='holder'>
              <img src={Visa} className='me' alt='visa'/>
              <img src={Mastercard} alt='mastercard'/>
            </div>
            </div>

              <div className="footer-middle">
                <h1>Connect with us</h1>
                <img src={Instagram} alt=""/>
                <p>&copy; 2023 BROWBOSS. ALL RIGHTS RESERVED.</p>
              
          
               
<span className="font1">Website by</span> <Link to="/Lush Designs"><span className="font2"> Lush Designs</span></Link>

      </div>
 
<div className="footer-right">
  <h3 className='first'>Privacy policy</h3>
  <h3 className="second">faq</h3>
  <h3 className='third'>contact us</h3>
 </div>


 </div>
 </div>

  )
}

export default Footer



