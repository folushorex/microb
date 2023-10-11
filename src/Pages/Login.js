
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Instagram from "../Assets/insta.png";

import "../Styles/Login.css";

function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // You can perform form submission logic here
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    
      /* LeftSide */
      
        /* ... existing elements ... */
        <div className="contact-container">
        <div className="LeftSide" style={{width: 500, left:120, height: 500, position: 'relative'}}>
  <div className="Rectangle4" style={{width: 500, height: 500, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(44.65, 234.81, 13.70, 0.71) 0%, rgba(203, 243, 183, 0.71) 100%)'}}></div>

  <div className="ContactInfo" style={{left: 65.42, top: 26.57, position: 'absolute', color: '#0E5B0D', fontSize: 40, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Contact Information</div>
  <div className="Fill" style={{width: 422.76, height: 59.90, left: 56.34, top: 100, position: 'absolute', textAlign: 'center', color: '#333333', fontSize: 18, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Fill up the form and out Team  will get back to you within 24hours</div>
  <div className="Phone" style={{left: 125.17, top: 200, position: 'absolute', textAlign: 'center', color: '#333333', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Phone: 01-2348026</div>
  <div className="Email" style={{left: 125.17, top: 251, position: 'absolute', textAlign: 'center', color: '#333333', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Email: info@zirifarms.com</div>
   <div className="Website" style={{left: 125.17, top: 302, position: 'absolute', textAlign: 'center', color: '#333333', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Website: www.zirifarms.com</div>
  <img className="RingerVolume"src={Instagram} alt="" style={{width: 50, height: 30, left: 68, top: 195, position: 'absolute'}}/>
  <img className="Website"src={Instagram} alt="" style={{width: 50, height: 30, left: 68, top: 301, position: 'absolute'}} />
  <div className="SocialsSingles" style={{width: 134, height: 26, left: 142, top: 358, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
  <Link to="https://wa.me/2348023654347">
    <img className="Facebook" src={Instagram} alt="" style={{width: 26, height: 26}} /></Link>

    <Link to="https://wa.me/2348023654347">
    <img className="Instagram"src={Instagram} alt="" style={{width: 26, height: 26}}/></Link>

    <Link to="https://wa.me/2348023654347">
    <img className="Linkedin"src={Instagram} alt=""style={{width: 26, height: 26}}/></Link>
    <Link to="https://wa.me/2348023654347">
    <img className="Youtube" src={Instagram} alt="" /></Link>
  </div>
  <Link to="https://wa.me/2348023654347">
  <img className="Envelope" src={Instagram} alt="" style={{width: 50, height: 30, left: 71, top: 250, position: 'absolute'}}/></Link>


        {/* Contact Form */}
        <div className="RightSide">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      </div>
      </div>
       );
}

export default Login;
