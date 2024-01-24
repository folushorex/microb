import React from 'react'
import {Link} from "react-router-dom";
import {FeaturedCourses} from "../Help/FeaturedCourses";
import FeaturedItems from '../Components/FeaturedItems';
import "../Styles/Featured.css"




function Featured() {


  return (
    <div className="Featured">

        <h1 className="featured-title"> 
          Featured Courses</h1>
        

        <div className="featured-courses">
        
       
        {
        
        FeaturedCourses.map((featuredItems,key) => {
     
          return (
            <FeaturedItems
            key={key}
            Image={featuredItems.Image}
              Name={featuredItems.Name}
                Description={featuredItems.Description}
                OriginalPrice={featuredItems.OriginalPrice}
                Price={featuredItems.Price}
                CTA={featuredItems.CTA}
                Summary={featuredItems.Summary}  
          />
          
          );

        
        })}
        
      <div className="more">
      <Link to ="https://wa.link/s5kivi">
        <button className="more-courses">View all Courses
           </button></Link>
           </div>

      </div>
       </div>
  
    
  )
}

export default Featured
