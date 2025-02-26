import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import "./index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Travel Ula</div>
      <nav className={menuOpen ? "navbar open" : "navbar"}>
        <a href="#herosection">Home</a>
        <a href="#itinerary">Itinerary</a>
        <a href="#features">Features</a>
        <a href="#packages">Packages</a>
        <a href="#cta">Enquiry</a>
        </nav>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;
