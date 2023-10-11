import React, { useState } from "react";
import { Link } from "react-router-dom";
import desktopLogo from "../Assets/Browboss Logo.png";
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import "../Styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">

      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/"> <img src={desktopLogo} alt=""/></Link>
        <Link to="/inspiration"> Inspiration </Link>


        <div className="hidden-links">
          <ul className="dropdown">
         <li className="black-item"> {/* Apply the "black-item" class to the Login menu item */}
          <Link className="login" to="/login"> Login </Link>
         </li>
          <li>
               <Link to="/getstarted"> <button className="hidden-button">Get Started</button></Link>
          </li>
        </ul>
         </div> 
      </div>



      <div className="right-side">
        <Link to="/login"> Login </Link>
        <Link to="/getstarted">
          <button>Get Started</button>
        </Link>
      
        <span className="custom-icon" onClick={toggleNavbar}>
          {openLinks ? (
            <CloseIcon />
          ) : (
            <ReorderIcon />
          )}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
