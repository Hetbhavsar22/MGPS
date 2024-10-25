import React, { useEffect,useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  const [carouselInitialized, setCarouselInitialized] = useState(false);

    useEffect(() => {
      if (window.jQuery && !carouselInitialized) {
        const $ = window.jQuery;
        $("#ourteam-slider").owlCarousel({
          items: 4,
          margin: 30,
          dots: false,
          nav: false,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          loop: true,
          responsive: {
            1280: {
              items: 4,
            },
            980: {
              items: 3,
            },
            600: {
              items: 2,
            },
            320: {
              items: 1,
            },
          }
        });
        setCarouselInitialized(true);
      }
    }, [carouselInitialized]);
    useEffect(() => {
        // Scroll to the our-apps section if the URL is /our-apps
        if (window.location.pathname === '/our-team') {
          const ourAppsSection = document.getElementById('our-team');
          if (ourAppsSection) {
            ourAppsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);
  return (
    <div>
      {/* Main Banner */}
      {/* <Header /> */}
      <main>
        <section
          id="main-banner-page"
          className="position-relative page-header about-header parallax section-nav-smooth"
        >
          <div className="overlay overlay-dark opacity-7"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="page-titles whitecolor text-center padding_top padding_bottom">
                  <h2 className="font-xlight">A New Idea</h2>
                  <h2 className="font-bold">Inspires Us To Make</h2>
                  <h2 className="font-xlight">Great Works</h2>
                </div>
              </div>
            </div>
            <div className="gradient-bg title-wrap">
              <div className="row">
                <div className="col-lg-12 col-md-12 text-center mx-auto whitecolor">
                  <h3 className="float-start text-center mx-auto">
                    About MGPS
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="aboutus" className="padding_top padding_bottom">
          <div className="container aboutus">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 padding_bottom_half">
                <div className="image">
                  <img alt="SEO" src="images/aboutus.png" />
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 col-md-6 padding_bottom_half text-center text-md-start">
                <h2 className="darkcolor font-normal bottom30">
                  <span className="defaultcolor">Mission </span>
                </h2>
                <p className="bottom35">
                  Our mission is to empower families across India by educating
                  them in Garbhsanskar, promoting a holistic approach to
                  prenatal care and parenting. We strive to create a supportive
                  environment where every family flourishes, combining ancient
                  wisdom with modern science to strengthen our nation.
                </p>
                <a
                  href="#our-team"
                  className="button btnsecondary gradient-btn"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-5 offset-lg-1 col-md-6 padding_bottom_half text-center text-md-start">
                <h2 className="darkcolor font-normal bottom30">
                  <span className="defaultcolor">Vision </span>
                </h2>
                <p className="bottom35">
                  Our vision is to lead a global platform for Garbhsanskar and
                  parenting education, inspiring transformation in the lives of
                  families worldwide. We aim to foster a generation of
                  well-rounded, emotionally intelligent, and healthy
                  individuals, dedicated to making the world a better place for
                  humanity. Additionally, we are committed to developing and
                  supporting the next generation of IT solutions that contribute
                  to societal growth and well-being.
                </p>
                <a
                  href="#our-team"
                  className="button btnsecondary gradient-btn"
                >
                  Learn More
                </a>
              </div>
              <div className="col-lg-6 col-md-6 padding_bottom_half">
                <div className="image">
                  <img alt="SEO" src="images/aboutus1.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section id="our-process" className="padding bgdark">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-12 text-center">
                <div
                  className="heading-title whitecolor wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <h2 className="font-normal">
                    Our Journey: A Timeline of Excellence and Innovation
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <ul className="process-wrapp">
                <li className="whitecolor wow fadeIn" data-wow-delay="300ms">
                  <span className="pro-step bottom20">2008</span>
                  <p className="fontbold bottom25">
                    Journey Begins with Research in Garbhsanskar
                  </p>
                </li>
                <li className="whitecolor wow fadeIn" data-wow-delay="400ms">
                  <span className="pro-step bottom20">2016</span>
                  <p className="fontbold bottom25">
                    Foundation of Majestic Garbhsanskar with Pregnancy Guru App
                  </p>
                </li>
                <li className="whitecolor wow fadeIn" data-wow-delay="500ms">
                  <span className="pro-step bottom20">2018</span>
                  <p className="fontbold bottom25">
                    World’s first Garbhsanskar app - Garbhsanskar Guru &
                    Foundation of Prakalpya Consultancy Service
                  </p>
                </li>
                <li className="whitecolor wow fadeIn" data-wow-delay="600ms">
                  <span className="pro-step bottom20">2019</span>
                  <p className="fontbold bottom25">
                    Launched Parenting Guru App
                  </p>
                </li>
                <li className="whitecolor wow fadeIn" data-wow-delay="700ms">
                  <span className="pro-step bottom20">2023</span>
                  <p className="fontbold bottom25">Merger to Form MGPS</p>
                  <p className="mt-n2 mt-sm-0">
                    MGS and Prakalpya Consultancy Service merged to form MGPS
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section
          id="our-team"
          className="padding_top half-section-alt teams-border"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div
                  className="heading-title heading_space wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <span className="defaultcolor text-center text-md-start">
                    Visionary Leadership
                  </span>
                  <h2 className="darkcolor font-normal text-center text-md-start">
                    Our Founders
                  </h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <p className="heading_space mt-n3 mt-sm-0 text-center text-md-start">
                  Leading with passion and purpose, our founder has been the
                  driving force behind our mission to revolutionize prenatal and
                  parental care. Their vision continues to inspire innovation
                  and excellence in every aspect of our work.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div id="ourteam-slider" className="owl-carousel">
                  <div className="item">
                    <div className="team-box">
                      <div className="image">
                        <img src="img/hardik.jpg" alt="Prof. Hardik Upadhyay" />
                      </div>
                      <div className="team-content">
                        <h4 className="darkcolor">Prof. Hardik Upadhyay</h4>
                        <p>Founder, Director</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="team-box">
                      <div className="image">
                        <img src="img/1.png" alt="Prof. Jayshree Upadhyay" />
                      </div>
                      <div className="team-content">
                        <h4 className="darkcolor">Prof. Jayshree Upadhyay</h4>
                        <p>Founder, Director</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="team-box">
                      <div className="image">
                        <img src="img/daya.jpg" alt="Mrs. Daya Agrawal" />
                      </div>
                      <div className="team-content">
                        <h4 className="darkcolor">Mrs. Daya Agrawal</h4>
                        <p>Founder, Director</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="team-box single">
                      <div className="image">
                        <img
                          src="img/prashant.jpg"
                          alt="Mr. Prashant Agrawal"
                        />
                      </div>
                      <div className="team-content">
                        <h4 className="darkcolor">Mr. Prashant Agrawal</h4>
                        <p>Founder, Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About; // Ensure this is a default export
