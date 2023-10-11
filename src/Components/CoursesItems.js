import React from 'react';
import {Link} from "react-router-dom";
import "../Styles/AllCourses.css";


const CoursesItems = ({ Image, Name, Description,CTA,Summary}) => {

 
  return (
    <div className='courses-items'>
        <div style={{ backgroundImage: `url(${Image})` }}> </div>
        <h1 className="title">{Name}</h1>
        <h2 className='description'>{Description}</h2>

      <Link to ="/start"><button className="start">{CTA}
           </button></Link>
        <p className='summary'>{Summary}</p>
      
    </div>
  )
}

export default CoursesItems
