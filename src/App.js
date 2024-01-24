import React from 'react';
import Home from "./Pages/Home";
import Inspiration from "./Pages/Inspiration";
import Login from "./Pages/Login";
import GetStarted from "./Pages/GetStarted";
import AllCourses from "./Components/AllCourses";
import Featured from "./Components/Featured";
import LushDesigns from './Components/LushDesigns';
import Footer from "./Pages/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/lush" element={<LushDesigns />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;
