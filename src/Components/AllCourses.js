import React from 'react';
import Navbar from '../Components/Navbar';
import {Courses} from '../Help/Courses';
import CoursesItems from '../Components/CoursesItems'; 
import '../Styles/AllCourses.css';


function AllCourses() {
  return (
    <>
      <Navbar />
      <div className="Courses">
        <h1 className="Courses-title">All Courses</h1>
        <div className="all-Courses">
          {Courses.map((CoursesItems, key) => (
            <CoursesItems
              key={key}
              Image={CoursesItems.Image}
              Name={CoursesItems.Name}
              Description={CoursesItems.Description}
              CTA={CoursesItems.CTA}
              Summary={CoursesItems.Summary}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllCourses;
