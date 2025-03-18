import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/navbarComp.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavbarComp = ({ isOpen, setIsOpen }) => {
  const [language, setLanguage] = useState("Svenska");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <nav className="navbar customNav">
      <div className="navbar-logo">
        <Link to={"/"}>
          <img src="/Assets/logo.png" alt="Logo" />
        </Link>
      </div>

      <div className="navbar-wave"></div>

      <div className={`menuListz ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/#section1" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/#section2" onClick={() => setIsOpen(false)}>
          Menu
        </Link>
        <Link to="/#section3" onClick={() => setIsOpen(false)}>
          Gallery
        </Link>
        <Link to="/#section4" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
        <button className="cateringmenubtn">
          <Link to="/catering-menu">Catering Menu</Link>
        </button>

        <div className="language-dropdown">
          <div className="language-selected">
            {language === "Svenska" ? (
              <div>
                <img src="/Assets/ukimg.png" alt="langimg" />
                <p>English</p>
                <MdKeyboardArrowDown />
              </div>
            ) : (
              <div>
                <img src="/Assets/swedish_flag.png" alt="langimg" />
                <p>Svenska</p>
                <MdKeyboardArrowDown />
              </div>
            )}
          </div>
          <div className="language-options">
            <div onClick={() => handleLanguageChange("Svenska")}>Svenska</div>
            <div onClick={() => handleLanguageChange("English")}>English</div>
          </div>
        </div>
      </div>

      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default NavbarComp;
