import React from 'react'
import {Courses} from "../Help/Courses";
import CourseItems from '../Components/CourseItems';
import "../Styles/AllCourses.css"


function AllCourses() {
  return (
    <div className="wrapper-courses">
        <div className="all-courses">
        <h1 className="title">
          All Courses</h1>
        <div className="all">
        
        {Courses.map((courseItems,key) => {
  
  return (
    <CourseItems
      key={key}
      Image={courseItems.Image}
      Name={courseItems.Name}
      Description={courseItems.Description}
      OriginalPrice={courseItems.OriginalPrice}
      Price={courseItems.Price}
      CTA={courseItems.CTA}
      Summary={courseItems.Summary}

    />
  );
})}
      </div>
       </div>
  </div>
    
  )
}

export default AllCourses
