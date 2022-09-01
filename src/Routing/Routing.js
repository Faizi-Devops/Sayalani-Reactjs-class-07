import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Company from "../components/Company";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Navbar from "../components/Navbar";

export default function App() {
  return (
    <Router>
      <div>

        <Navbar />
        
        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/About" element={<About />} />
        <Route path="/Footer" element={<Footer />} />


          
          
        </Routes>
      </div>
    </Router>
  );
}