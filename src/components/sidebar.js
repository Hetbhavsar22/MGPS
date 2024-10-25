import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/styles.css'; // Ensure this path is correct

const NewSidebar = ({ closeSideMenu, handleNavigation }) => {

  const location = useLocation();
  return (
    <div className="new-side-menu">
      <div className="overlay" onClick={closeSideMenu}></div>
      <div className="inner-wrapper">
      <span className="btn-close" onClick={closeSideMenu} style={{ cursor: 'pointer', fontSize: '24px', color: 'white' }}>
          &times; {/* This represents the "X" character */}
        </span>
        <nav className="new-side-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link1" to="/" onClick={(e) => handleNavigation(e, "/")}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link1" to="/about" onClick={(e) => handleNavigation(e, "/about")}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link1" to="/" onClick={(e) => handleNavigation(e, "/", "#our-apps")}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link1" to="/" onClick={(e) => handleNavigation(e, "/", "#pricing")}>Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link1" to={location.pathname === "/about" ? "/about" : "/"} onClick={(e) => handleNavigation(e, location.pathname === "/about" ? "/about" : "/", "#our-team")}>Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link1"to="/" onClick={(e) => handleNavigation(e, "/", "#contact")}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="side-footer">
          <ul className="social-icons">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          </ul><br /><br />
          <p>&copy; 2019-2024</p>
        </div>
      </div>
    </div>
  );
};

export default NewSidebar;