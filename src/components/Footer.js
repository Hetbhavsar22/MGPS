// src/Footer.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

  const handleNavigateToPricing = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    navigate('/#pricing', { replace: true }); // Navigate to home page
    setTimeout(() => {
      const section = document.querySelector('#pricing'); // Find the pricing section
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
      }
    }, 100); // Small timeout to ensure the page navigation happens first
  };

    return (
        <footer id="contact" className="bgdark padding_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer_panel padding_bottom_half bottom10">
                            <a href="index-gs.html" className="footer_logo bottom25">
                                <img src="images/logo-transparent.png" alt="MegaOne" />
                            </a>
                            <p className="whitecolor bottom25">Majestic Garbhsanskar & Parenting Solutions Private Limited</p>
                            <p className="whitecolor bottom25">507, Central by Sangath IPL, behind 4D Mall, Motera, Ahmedabad</p>
                            <p className="whitecolor bottom25">CIN: U93090GJ2023PTC138264</p>

                            <div className="d-table w-100 address-item whitecolor bottom25">
                                <span className="d-table-cell align-middle"><i className="fas fa-mobile-alt"></i></span>
                                <p className="d-table-cell align-middle bottom0">
                                    +91 - 9727006001 <a className="d-block" href="mailto:admin@majesticgarbhsanskar.com">
                                        <span className="__cf_email__" >admin@majesticgarbhsanskar.com</span>
                                    </a>
                                </p>
                            </div>
                            <ul className="social-icons white wow fadeInUp" data-wow-delay="300ms">
                                <li><a href="https://www.facebook.com/MAJESTICGARBHSANSKAR" target="_blank" rel="noopener noreferrer" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCrQ2-hzImdJ4A3BD0yIYm-A" target="_blank" rel="noopener noreferrer" className="twitter"><i className="fab fa-youtube"></i></a></li>
                                <li><a href="https://in.pinterest.com/mgarbhsanskar/" target="_blank" rel="noopener noreferrer" className="linkedin"><i className="fab fa-pinterest"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/majesticgarbhsanskar/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://www.instagram.com/garbhsanskarguru/" target="_blank" rel="noopener noreferrer" className="insta"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer_panel padding_bottom_half bottom10 ps-0 ps-lg-5">
                            <h3 className="whitecolor bottom25">Our Services</h3>
                            <ul className="links">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="#pricing" onClick={handleNavigateToPricing}>Service</Link></li>
                                <li><Link to="#contact">Contact Us</Link></li>
                                <li><Link to="/terms">Terms Condition</Link></li>
                                <li><Link to="/policy">Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer_panel padding_bottom_half bottom10">
                            <h3 className="whitecolor bottom25">Business hours</h3>
                            <p className="whitecolor bottom25">Our support available to help you 9 to 6, five days a week</p>
                            <ul className="hours_links whitecolor">
                                <li><span>Monday-Friday:</span> <span>9.00-18.00 IST</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 text-center bottom20">
                        <p className="whitecolor">Copyright © <span id="year">2019-2024 All Rights Reserved.</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;