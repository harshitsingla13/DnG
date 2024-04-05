import React, { useEffect, useState } from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../../logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const [stickyHeader, setStickyHeader] = useState(false);
  //   const [showNavbar, setShowNavbar] = useState(false);
  const [isActive, setIsActive] = useState(false);

  //   const handleShowNavbar = () => {
  //     setShowNavbar(!showNavbar);
  //   };
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setStickyHeader(true);
      } else if (stickyHeader) {
        //remove the background property so it comes transparent again (defined in your css)
        setStickyHeader(false);
      }
    });

    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header className="header-container">
      <div className={`header ${stickyHeader ? "active" : ""}`}>
        <div className="logo-container">
          <Link className="logo-container-anchor">
            {/* <img className="logo" src={logo} alt="DnG Bakers and Kitchen logo" /> */}
            <Logo className="logo" />
            <div className="logo-name-container">
              <h1>
                {/* <span> */}
                DnG Bakers & Kitchen
                {/* </span> */}
              </h1>
              {/* <span>Amazza</span> */}
            </div>
          </Link>
        </div>
        <nav className="nav-items">
          <ul className={`navMenu ${isActive ? "active" : ""}`}>
            <li onClick={removeActive}>Home</li>
            <li onClick={removeActive}>About Us</li>
            <li onClick={removeActive}>Contact Us</li>
            <li onClick={removeActive}>Cart</li>
          </ul>
        </nav>
        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={toggleActiveClass}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
