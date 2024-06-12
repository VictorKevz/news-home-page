import React, { useState } from "react";
import "./css/navbar.css";
import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconCloseMenu from "../assets/images/icon-menu-close.svg";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
    props.onClose();
  }
  return (
    <nav className="navbar-container">
      <figure>
        <img src={logo} alt="logo" className="logo" />
      </figure>
      <ul className={`nav-links-container ${isOpen? 'open':''}`}>
        <li className="nav-link">Home</li>
        <li className="nav-link">New</li>
        <li className="nav-link">Popular</li>
        <li className="nav-link">Trending</li>
        <li className="nav-link">Categories</li>
      </ul>
      <div className="toggle-icon-container" onClick={handleToggle}>
        {isOpen ? (
          <img
            src={iconCloseMenu}
            alt="close-menu-icon"
            className="navbar-icon close"
          />
        ) : (
          <img src={iconMenu} alt="menu-icon" className="navbar-icon" />
        )}
      </div>
    </nav>
  );
}
export default Navbar;
