import React from 'react';
import {Link} from "react-router-dom";
import "../Styles/CoursesItems.css";

const CourseItems = ({id,Image,Name,Description,OriginalPrice,Price,CTA,Summary}) => {
  return (
    <div className='course-items'>
         <img src={Image}alt=""/>
        <h1 className="name">{Name}</h1>
        <h2 className='description'>{Description}</h2>
        <p className="originalprice"> N{OriginalPrice}</p>
        <p className="price"> N{Price}</p>
      <Link to ="/buy"><button className="start">{CTA}
           </button></Link>
        <p className='summary'>{Summary}</p>
    </div>
  )
}

export default CourseItems
