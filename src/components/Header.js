import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./sidebar";
import "../css/styles.css";

const Header = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleSideMenu = (event) => {
    event.preventDefault();
    setSideMenuOpen(!sideMenuOpen);
  };

  const closeSideMenu = (event) => {
    event.preventDefault();
    setSideMenuOpen(false);
  };

  const navigate = useNavigate();

  // const handleNavigation = (event, path, sectionId) => {
  //   event.preventDefault();
  //   setSideMenuOpen(false);
  //   navigate(path);
  //   if (sectionId) {
  //       setTimeout(() => {
  //           const section = document.querySelector(sectionId);
  //           if (section) {
  //               section.scrollIntoView({ behavior: 'smooth' });
  //           }
  //       }, 100);
  //   }
  // };

  const handleNavigation = (event, path, sectionId) => {
    event.preventDefault();
    closeSideMenu(event); // Close the sidebar when navigating
    navigate(path);
    if (sectionId) {
      setTimeout(() => {
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="site-header" id="header">
      <nav className="navbar navbar-expand-lg transparent-bg static-nav">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="images/logo-transparent.png"
              alt="logo"
              className="logo-default"
            />
            <img src="images/logo.png" alt="logo" className="logo-scrolled" />
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/"
                  onClick={(e) => handleNavigation(e, "/")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={(e) => handleNavigation(e, "/about")}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={(e) => handleNavigation(e, "/", "#our-apps")}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={(e) => handleNavigation(e, "/", "#pricing")}
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={location.pathname === "/about" ? "/about" : "/"}
                  onClick={(e) =>
                    handleNavigation(
                      e,
                      location.pathname === "/about" ? "/about" : "/",
                      "#our-team"
                    )
                  }
                >
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={(e) => handleNavigation(e, "/", "#contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Side menu toggle button */}
        <a
          className="d-inline-block sidemenu_btn"
          aria-label="Go to the homepage"
          id="sidemenu_toggle"
          onClick={toggleSideMenu}
        >
          <span></span> <span></span> <span></span>
        </a>
      </nav>

      {/* Side menu */}
      {sideMenuOpen && (
        <Sidebar
          handleNavigation={handleNavigation}
          toggleSideMenu={toggleSideMenu}
          closeSideMenu={closeSideMenu}
        />
      )}
    </header>
  );
};

export default Header;
