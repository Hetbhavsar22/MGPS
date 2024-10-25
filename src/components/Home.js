import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../css/styles.css';

function Home() {
  const [sliderInitialized, setSliderInitialized] = useState(false);
    const sliderRef = useRef(null);
    const [carouselInitialized, setCarouselInitialized] = useState(false);
    useEffect(() => {
      const updateSlider = () => {
        const imageElement = document.querySelector('.rev-slidebg');
        const sliderElement = document.querySelector('#rev_main');
        
        if (imageElement && sliderElement) {
          const isMobile = window.innerWidth <= 768; // Define mobile breakpoint
          
          if (isMobile) {
            // Apply changes only for mobile screens
            imageElement.setAttribute('data-bgfit', 'contain');
            
            const img = new Image();
            img.src = imageElement.getAttribute('src');
            
            img.onload = () => {
              const imageAspectRatio = img.width / img.height;
              
              // Calculate the new height based on the window width and image aspect ratio
              const newHeight = window.innerWidth / imageAspectRatio;
              
              // Set the new height for the slider
              sliderElement.style.height = `${newHeight}px`;
              
              // If using Revolution Slider, we need to update it
              if (window.jQuery && window.jQuery.fn.revolution) {
                window.jQuery(sliderElement).revolution('setsize');
              }
            };
          } else {
            // Reset styles for larger screens
            imageElement.removeAttribute('data-bgfit');
            sliderElement.style.height = ''; // Reset height
            
            // If using Revolution Slider, update it with default settings
            
          }
        }
      };
    
      // Run on mount
      updateSlider();
    
      // Run on window resize
      window.addEventListener('resize', updateSlider);
    
      // Cleanup
      return () => {
        window.removeEventListener('resize', updateSlider);
      };
    }, []);
    useEffect(() => {
      initializeCounters();
    }, []);
  
    const initializeCounters = () => {
      if (window.jQuery && window.jQuery.fn.countTo) {
        window.jQuery('.count_nums').each(function() {
          window.jQuery(this).countTo({
            from: 0,
            to: window.jQuery(this).data('to'),
            speed: window.jQuery(this).data('speed'),
            refreshInterval: 50,
          });
        });
      }
    };

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
      // Check if the slider initialization function exists and hasn't been initialized yet
      if (window.jQuery && window.jQuery.fn.revolution && !sliderInitialized) {
          const $slider = window.jQuery("#rev_main");
          
          if ($slider.length > 0 && !$slider.hasClass('revslider-initialised')) {
            
            
            // Initialize the slider
              $slider.revolution({
                sliderType: "standard",
                jsFileLocation: "js/revolution/",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    bullets: {
                        enable: true,
                        hide_onmobile: true,
                        style: "numbered",
                        hide_onleave: false,
                        hide_under: 767,
                        direction: "vertical",
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0,
                        space: 5,
                        tmp: '<div class="tp-bullet-number"><span class="tp-count">{{param1}}</span><span class="tp-bullet-line"></span></div>'
                    },
                    arrows: {
                        style: "",
                        enable: false,
                    }
                },
                viewPort: {
                    enable: true,
                    outof: "pause",
                    visible_area: "80%",
                    presize: false
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1140, 1024, 768, 480],
                gridheight: [660, 650, 600, 490],
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 2000,
                    speedbg: 0,
                    speedls: 0,
                    levels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 25, 55],
                    disable_onmobile: "on"
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
                  
              });

              // Set the slider as initialized
              setSliderInitialized(true);
          }
      }
  }, [sliderInitialized]);
    useEffect(() => {
        // Scroll to the our-apps section if the URL is /our-apps
        if (window.location.pathname === '/our-apps') {
          const ourAppsSection = document.getElementById('our-apps');
          if (ourAppsSection) {
            ourAppsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);
  return (
    <div>
      {/* <Header /> */}
      <main className="main-content">
        <section id="main-banner-area" className="position-relative">
          <div
            id="revo_main_wrapper"
            className="rev_slider_wrapper fullwidthbanner-container m-0 p-0 bg-dark"
            data-alias="classic4export"
            data-source="gallery"
          >
            <div
              id="rev_main"
              className="rev_slider fullwidthabanner white"
              data-version="5.4.1"
            >
              <ul>
                <li
                  data-index="rs-01"
                  data-transition="fade"
                  data-slotamount="default"
                  data-easein="Power100.easeIn"
                  data-easeout="Power100.easeOut"
                  data-masterspeed="2000"
                  data-fsmasterspeed="1500"
                  data-param1="01"
                >
                  <img
                    src="images/banner-single-11.png"
                    alt=""
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    data-bgparallax="10"
                    className="rev-slidebg"
                    data-no-retina
                  />
                  <div
                    className="tp-caption tp-resizeme"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['-130','-130','-110','-80']"
                    data-width="none"
                    data-height="none"
                    data-type="text"
                    data-textalign="['center','center','center','center']"
                    data-responsive_offset="on"
                    data-start="1000"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                  >
                    <h1 className="text-capitalize font-xlight whitecolor text-center">
                      MGPS
                    </h1>
                  </div>
                  <div
                    className="tp-caption tp-resizeme"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['-70','-70','-50','-20']"
                    data-width="none"
                    data-height="none"
                    data-type="text"
                    data-textalign="['center','center','center','center']"
                    data-responsive_offset="on"
                    data-start="1000"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                  >
                    <h2 className="text-capitalize font-bold whitecolor text-center">
                      Crafting Digital Solutions
                    </h2>
                  </div>
                  <div
                    className="tp-caption tp-resizeme"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['-10','-10','10','40']"
                    data-width="none"
                    data-height="none"
                    data-type="text"
                    data-textalign="['center','center','center','center']"
                    data-responsive_offset="on"
                    data-start="1500"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                  >
                    <h2 className="text-capitalize font-xlight whitecolor text-center">
                      for a Better Tomorrow
                    </h2>
                  </div>
                </li>
                <li
                  data-index="rs-02"
                  data-transition="fade"
                  data-slotamount="default"
                  data-easein="Power3.easeInOut"
                  data-easeout="Power3.easeInOut"
                  data-masterspeed="2000"
                  data-fsmasterspeed="1500"
                  data-param1="02"
                >
                  <img
                    src="images/ban.png"
                    alt=""
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    data-bgparallax="10"
                    className="rev-slidebg"
                    data-no-retina
                  />
                  <div
                    className="tp-caption tp-resizeme"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['-130','-130','-110','-80']"
                    data-width="none"
                    data-height="none"
                    data-type="text"
                    data-textalign="['center','center','center','center']"
                    data-responsive_offset="on"
                    data-start="1000"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                  >
                    <h1 className="text-capitalize font-xlight whitecolor text-center">
                      MGPS
                    </h1>
                  </div>
                  <div
                    className="tp-caption tp-resizeme"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['-70','-70','-50','-20']"
                    data-width="none"
                    data-height="none"
                    data-type="text"
                    data-textalign="['center','center','center','center']"
                    data-responsive_offset="on"
                    data-start="1000"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                  >
                    <h1 className="text-capitalize font-bold whitecolor text-center">
                      Empowering Businesses
                    </h1>
                  </div>
                  <div
                    className="tp-caption tp-resizeme"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['-10','-10','10','40']"
                    data-width="none"
                    data-height="none"
                    data-type="text"
                    data-textalign="['center','center','center','center']"
                    data-responsive_offset="on"
                    data-start="1500"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                  >
                    <h1 className="text-capitalize font-xlight whitecolor text-center">
                      Through Technology
                    </h1>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <ul className="social-icons-simple revicon white">
            <li className="d-table">
              <a
                href="https://www.facebook.com/MAJESTICGARBHSANSKAR"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="d-table">
              <a
                href="https://www.youtube.com/channel/UCrQ2-hzImdJ4A3BD0yIYm-A"
                target="_blank"
                rel="noopener noreferrer"
                title="youtube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li className="d-table">
              <a
                href="https://in.pinterest.com/mgarbhsanskar/"
                target="_blank"
                rel="noopener noreferrer"
                title="pinterest"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </li>
            <li className="d-table">
              <a
                href="https://www.instagram.com/garbhsanskarguru/"
                target="_blank"
                rel="noopener noreferrer"
                title="instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <a
            href="#our-feature"
            className="scroll-down whitecolor hover-default"
          >
            Scroll Down <i className="fas fa-long-arrow-alt-down"></i>
          </a>
        </section>
        <section id="our-feature" className="single-feature padding pt-2 pb-2">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div
                className="col-lg-5 wow fadeInLeft align-self-center"
                data-wow-delay="300ms"
              >
                <div className="heading-title mb-4">
                  <h2 className="darkcolor font-normal bottom30">About Us</h2>
                </div>
                <p className="bottom35">
                  At Majestic Garbhsanskar and Parenting Solutions, our purpose
                  is to revive ancient Garbhsanskar practices, blending them
                  with modern scientific insights to offer comprehensive
                  prenatal care and parenting guidance. Alongside our commitment
                  to empowering families, we leverage cutting-edge technology to
                  develop innovative products and IT services that enhance the
                  parenting experience. Our mission is to build a knowledgeable
                  and supported community, thriving on wisdom and technology,
                  and nurturing future generations.
                </p>
                <a
                  href="/about"
                  className="button btnsecondary gradient-btn mb-sm-0 mb-4"
                >
                  Read More
                </a>
              </div>
              <div className="col-lg-7 text-center align-self-center">
                <img
                  className="img-fluid w-100"
                  alt="gif"
                  src="images/about.gif"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Some Feature ends */}
        {/* Work Process */}
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
        <section id="our-apps" className="padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 mx-auto text-center col-md-7 col-sm-12">
                <div
                  className="heading-title bottom30 wow text-center fadeInUp"
                  data-wow-delay="300ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "300ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <h2 className="darkcolor font-normal text-center">
                    Products
                  </h2>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center" id="app-feature">
              <div className="col-lg-6 col-sm-12">
                <div className="text-center text-md-left">
                  <div
                    className="feature-item mt-3 wow fadeInLeft"
                    data-wow-delay="300ms"
                    style={{
                      visibility: "visible",
                      animationDelay: "300ms",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <div className="icon">
                      <img
                        className="img-fluid"
                        src="images/p2.png"
                        alt="Garbhsanskar Guru App"
                      />
                    </div>
                    <a
                      className="text"
                      href="https://play.google.com/store/apps/details?id=com.gs.garbhsanskarguru"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="bottom15">
                        <span className="d-inline-block">
                          Garbhsanskar Guru App
                        </span>
                      </h3>
                      <p>
                        World’s first and most trusted Garbhsanskar app,
                        Systamatic Course, Live Classes
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12">
                <div className="text-center text-md-left">
                  <div
                    className="feature-item mt-3 wow fadeInLeft"
                    data-wow-delay="350ms"
                    style={{
                      visibility: "visible",
                      animationDelay: "350ms",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <div className="icon">
                      <img
                        className="img-fluid"
                        src="images/p3.png"
                        alt="Parenting Guru App"
                      />
                    </div>
                    <a
                      className="text"
                      href="https://www.parentingguru.co.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="bottom15">
                        <span className="d-inline-block">
                          Parenting Guru App:
                        </span>
                      </h3>
                      <p>
                        Activity based Daily Parenting solutions, Live Classes,
                        Community
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12">
                <div className="text-center text-md-left">
                  <div
                    className="feature-item mt-3 wow fadeInRight"
                    data-wow-delay="300ms"
                    style={{
                      visibility: "visible",
                      animationDelay: "300ms",
                      animationName: "fadeInRight",
                    }}
                  >
                    <div className="icon">
                      <img
                        className="img-fluid"
                        src="images/p1.png"
                        alt="My Garbhsanskar Guru - Book"
                      />
                    </div>
                    <a
                      className="text"
                      href="https://shop.garbhsanskarguru.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="bottom15">
                        <span className="d-inline-block">
                          My Garbhsanskar Guru - Book
                        </span>
                      </h3>
                      <p>
                        World’s first complete Garbhsanskar guide featuring
                        integrated journaling, month-by-month activities, diet
                        and yoga instructions, and interactive Garbhsanskar
                        stories.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Counters Section */}
        <section id="bg-counters" className="padding bg-counters parallax">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-lg-4 col-md-4 col-sm-4 bottom10">
                <div className="counters whitecolor top10 bottom10">
                  <span
                    className="count_nums font-light"
                    data-to="2.5"
                    data-speed="2500"
                  ></span>
                </div>
                <h3 className="font-light whitecolor top20">
                  Million+ Lives Positively Impacted
                </h3>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <p className="whitecolor top20 bottom20 font-light title">
                  Empowering Families Globally with Garbhsanskar and Parenting
                  Wisdom.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 bottom10">
                <div className="counters whitecolor top10 bottom10">
                  <span
                    className="count_nums font-light"
                    data-to="75"
                    data-speed="2500"
                  ></span>
                </div>
                <h3 className="font-light whitecolor top20">
                  Countries, Our Global Reach
                </h3>
              </div>
            </div>
          </div>
        </section>

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
                  {/* Team Member 1 */}
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
                  {/* Team Member 2 */}
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
                  {/* Team Member 3 */}
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
                  {/* Team Member 4 */}
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
        {/* Our Team ends */}

        {/* Pricing Section */}
        <section id="pricing" className="padding bglight">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 text-center">
                <div
                  className="heading-title darkcolor wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <h2 className="font-normal bottom30">Services</h2>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-3">
              <div className="price-toggle-wrapper heading_space">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li role="presentation">
                    <span
                      className="active Pricing-toggle-button month"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Technical Consultancy
                    </span>
                  </li>
                  <li role="presentation">
                    <span
                      className="Pricing-toggle-button year"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Training and Consultancy
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 text-center">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex">
                      <div className="pricing-item fadeInUp sale">
                        <div className="pricing-price darkcolor">
                          <span className="pricing-currency">Development</span>
                        </div>
                        <ul className="pricing-list px-3">
                          <li>Custom Software Development</li>
                          <li>Enterprise Application Development</li>
                          <li>Mobile App Development</li>
                          <li>Web Application Development</li>
                          <li>E-commerce Platform Development</li>
                          <li>Payment Gateway Integration</li>
                          <li>Marketplace Solutions</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex">
                      <div className="pricing-item fadeInUp sale">
                        <div className="pricing-price darkcolor">
                          <span className="pricing-currency">
                            IT Consulting
                          </span>
                        </div>
                        <ul className="pricing-list px-3">
                          <li>Technology Strategy Consulting</li>
                          <li>IT Infrastructure Consulting</li>
                          <li>IoT Strategy and Consulting</li>
                          <li>Business Process Consulting</li>
                          <li>Risk and Compliance Consulting</li>
                          <li>Digital Strategy and Roadmap</li>
                          <li>Customer Experience Transformation</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex">
                      <div className="pricing-item fadeInUp sale">
                        <div className="pricing-price darkcolor">
                          <span className="pricing-currency">
                            Cybersecurity
                          </span>
                        </div>
                        <ul className="pricing-list px-3">
                          <li>Security Assessment and Auditing</li>
                          <li>Threat Intelligence and Monitoring</li>
                          <li>Incident Response and Management</li>
                          <li>Compliance and Governance</li>
                          <li>Identity and Access Management</li>
                          <li>Network Security</li>
                          <li>Endpoint Protection</li>
                          <li>Vulnerability Management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex">
                      <div className="pricing-item fadeInUp sale">
                        <div className="pricing-price darkcolor">
                          <span className="pricing-currency">
                            Garbhsanskar TTC
                          </span>
                        </div>
                        <ul className="pricing-list px-3">
                          <li>26-Day Comprehensive Program</li>
                          <li>Garbhsanskar and Event Management</li>
                          <li>Public Speaking and Digital Marketing</li>
                          <li>Certification Upon Completion</li>
                          <li>400+ Trainers Certified</li>
                        </ul>
                        <a
                          className="button"
                          href="https://garbhsanskarguru.com/guru-of-garbhsanskar-online-ttt"
                        >
                          Explore
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex">
                      <div className="pricing-item sale">
                        <div className="pricing-price darkcolor">
                          <span className="pricing-currency">
                            Parenting TTC
                          </span>
                        </div>
                        <ul className="pricing-list px-3">
                          <li>23-Day Parenting Program</li>
                          <li>WhatsApp-Based Training</li>
                          <li>Parenting and Coaching Skills</li>
                          <li>Certification Upon Completion</li>
                          <li>20+ Trainers Certified</li>
                        </ul>
                        <a
                          className="button"
                          href="https://garbhsanskarguru.com/contact-us"
                        >
                          Explore
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex">
                      <div className="pricing-item sale">
                        <div className="pricing-price darkcolor">
                          <span className="pricing-currency">
                            Growth Blueprint
                          </span>
                        </div>
                        <ul className="pricing-list px-3">
                          <li>Strategic Business Development Plan</li>
                          <li>Product Conceptualization & Development</li>
                          <li>Digital Marketing Mastery</li>
                          <li>Optimizing Business Operations</li>
                          <li>Effective Customer Engagement</li>
                          <li>Innovative Sales Techniques</li>
                        </ul>
                        <a
                          className="button"
                          href="https://garbhsanskarguru.com/contact-us"
                        >
                          Explore
                        </a>
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
}

export default Home;