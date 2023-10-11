import React from 'react';
import Line from "../Assets/Line 2.png";
import Enroll from "../Assets/Enrolll now desktop.png";
import browImage from "../Assets/Img+Pattern use.png";
import "../Styles/Hero.css";


const Hero = () => {
  return (
        <div className="Hero">
          
        <div className="Hero-Wrapper">
     
            <h1 className="title">
           
                 SIMPLIFIED <br />MICROBLADING <br />CLASSES <br /><br /></h1>
                
                 <p className="subtitle">
                Dive into the world of Microblading & Discover<br />how to transform Brows
                 into stunning works of <br />Art.
            </p>

            
            <img src={Line} alt="" className="line-a"/>
            

            <h3 className="caption">
            Your Journey to Microblading Mastery <br />      Begins Here!
            </h3>
            <img src={Line} alt="" className="line-b"/>

            <h2 className="Details">
            Our Comprehensive Courses will teach <br />you the techniques , tools and secrets to <br /> create beautiful,<br />
            natural-looking eyebrows that enhances<br /> every face types.
            </h2>


            <div className="enroll-wrapper">
            <img src={Enroll} alt="" className="Enroll"/>
            <h3 className="small-caption">
            “An Evergreen, High-Demand <br />Skill that promises Long-term<br /> financial Prosperity”. 
            </h3>
            </div>
            
            <div className="hero-right">
            <img src={browImage} alt="" className="brow-image"/>
                </div>

        </div>





      </div>
      

  )
}

export default Hero