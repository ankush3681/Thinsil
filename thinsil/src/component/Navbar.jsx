import React, { useState } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMidNav = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
    
  };
  window.addEventListener("resize",()=>{
    if (window.innerWidth > 800){
      setIsOpen(false);
    }
  })
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/" ><img src={logo} alt="logo" /></Link>
          
        </div>
        <div className="mid-nav-section">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </div>

        <div className="end-nav-section">
          <Link to="/login" className="nav-login">
            Login
          </Link>
          <div className="burger-menu" onClick={toggleMidNav}>
            <GiHamburgerMenu className="burger-icon" />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="dropdown-nav-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </div>
      )}
    </div>

  );
};

export default Navbar;
