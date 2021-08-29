import Head from "next/head";
import Image from "next/image";

import laptopImg from "public/img/laptop.jpg";
export default function Home() {
  return (
    <>
      <Head>
        <title>Huascar.one</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Muli:200,300,400,600,700,,800,900|Josefin+Sans:300,400,600,700"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/et-line.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
        <link rel="stylesheet" href="css/style.css" />
        <script src="js/html5shiv.min.js"></script>
      </Head>
      <div className="loading">
        <div className="load-circle"></div>
      </div>

      <div className="button-top" data-scroll-nav="0">
        <span>
          <i className="fa fa-angle-up" aria-hidden="true"></i>
        </span>
      </div>

      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#nav-icon-collapse"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a href="#">
              <div className="logo">Huascar</div>
            </a>
          </div>

          <div className="collapse navbar-collapse" id="nav-icon-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#" data-scroll-nav="0" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#" data-scroll-nav="1">
                  About
                </a>
              </li>
              <li>
                <a href="#" data-scroll-nav="2">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" data-scroll-nav="3">
                  Services
                </a>
              </li>
              <li>
                <a href="#" data-scroll-nav="4">
                  Clients
                </a>
              </li>
              <li>
                <a href="#" data-scroll-nav="5">
                  Works
                </a>
              </li>
              <li>
                <a href="#" data-scroll-nav="6">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" data-scroll-nav="7">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="header" data-scroll-index="0">
        <div id="particles-js"></div>

        <div className="container">
          <div className="row">
            <div className="v-middle">
              <div className="caption">
                <h4>Hola,</h4>
                <h1>Soy Huascar Morales</h1>
                <div className="type">
                  <h3></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero section-padding" data-scroll-index="1">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="hero-img">
                <Image
                  placeholder="blur"
                  src={require("public/img/hero.jpg")}
                  alt="hero"
                />
              </div>
            </div>
            <div className="col-md-offset-1 col-md-7 mb-100">
              <div className="hero-content">
                <h4 className="head-left">More Info About Me</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, ullamco laboris nisi ut aliquip ex ea commodo
                </p>

                <div className="info">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <h5>
                        <span>
                          <i className="icon ion-person"></i>
                        </span>
                        Alex Martin
                      </h5>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <h5>
                        <span>
                          <i className="icon ion-calendar"></i>
                        </span>
                        27 February 1990
                      </h5>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <h5>
                        <span>
                          <i className="icon ion-location"></i>
                        </span>
                        Los Angeles, USA
                      </h5>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <h5>
                        <span>
                          <i className="icon ion-email"></i>
                        </span>
                        AlexMartin@Gmail.com
                      </h5>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <h5>
                        <span>
                          <i className="icon ion-android-call"></i>
                        </span>
                        +01( 23 ) 125 256 709
                      </h5>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <h5>
                        <span>
                          <i className="icon ion-code-working"></i>
                        </span>
                        Freelancer
                      </h5>
                    </div>
                    <div className="clear-fix"></div>
                  </div>
                </div>

                <div className="social-icon">
                  <a href="#0">
                    <span>
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="#0">
                    <span>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="#0">
                    <span>
                      <i className="fa fa-youtube" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="#0">
                    <span>
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="#0">
                    <span>
                      <i className="fa fa-github" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="clear-fix"></div>

            <div className="col-sm-6">
              <div className="skills">
                <div className="item">
                  <h6>Web Design</h6>
                  <div className="skills-progress">
                    <span data-value="90%"></span>
                  </div>
                </div>

                <div className="item">
                  <h6>Graphic Design</h6>
                  <div className="skills-progress">
                    <span data-value="80%"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="skills">
                <div className="item">
                  <h6>Graphic Design</h6>
                  <div className="skills-progress">
                    <span data-value="80%"></span>
                  </div>
                </div>

                <div className="item">
                  <h6>Development</h6>
                  <div className="skills-progress">
                    <span data-value="85%"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear-fix"></div>
          </div>
        </div>
      </section>

      <section className="resume section-padding" data-scroll-index="2">
        <div className="container">
          <div className="section-head">
            <h3>My Resume</h3>
          </div>

          <div className="row">
            <div className="col-md-offset-2 col-md-8">
              <div className="tabs">
                <div className="tabs-icon">
                  <ul>
                    <li id="tab-1" className="active">
                      <span className="ion-briefcase"></span>
                      <h6 className="sm-title">EXPERIENCE</h6>
                    </li>
                    <li id="tab-2">
                      <span className="ion-university"></span>
                      <h6 className="sm-title">EDUCATION</h6>
                    </li>
                  </ul>
                </div>

                <div className="resume-content">
                  <div id="tab-1-content" className="item active">
                    <div className="content">
                      <ul>
                        <li>
                          <h6 className="sm-title">
                            Art Director - Facebook Inc.
                          </h6>
                          <span className="date">2016 - Present</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </li>
                        <li>
                          <h6 className="sm-title">
                            Web Designer - Google Inc.
                          </h6>
                          <span className="date">2013 - 2016</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </li>
                        <li>
                          <h6 className="sm-title">
                            Senior Developer - Abc Inc.
                          </h6>
                          <span className="date">2010 - 2013</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div id="tab-2-content" className="item">
                    <div className="content">
                      <ul>
                        <li>
                          <h6 className="sm-title">
                            Abc University of Los Angeles.
                          </h6>
                          <span className="date">2006 - 2009</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </li>
                        <li>
                          <h6 className="sm-title">Specialization Course.</h6>
                          <span className="date">2004 - 2006</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </li>
                        <li>
                          <h6 className="sm-title">Abc High School.</h6>
                          <span className="date">2000 - 2004</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="numbers section-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="item">
                <span className="icon ion-android-favorite"></span>
                <h5 className="counter">258</h5>
                <h6 className="sm-title">Happy Clients</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="item">
                <span className="icon ion-cube"></span>
                <h5 className="counter">735</h5>
                <h6 className="sm-title">Complete Projects</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="item">
                <span className="icon ion-android-create"></span>
                <h5 className="counter">3910</h5>
                <h6 className="sm-title">Lines of Codes</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="item">
                <span className="icon ion-trophy"></span>
                <h5 className="counter">6</h5>
                <h6 className="sm-title">Awards Received</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="services section-padding" data-scroll-index="3">
        <div className="container">
          <div className="section-head">
            <h3>My Services</h3>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="item text-center">
                <span className="icon ion-umbrella"></span>
                <h6>Web Design</h6>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit,
                  sed do eiusmod tempor incid idunt ut labore et.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item text-center bord">
                <span className="icon ion-bowtie"></span>
                <h6>Development</h6>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit,
                  sed do eiusmod tempor incid idunt ut labore et.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item text-center">
                <span className="icon ion-paintbucket"></span>
                <h6>Graphic Design</h6>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit,
                  sed do eiusmod tempor incid idunt ut labore et.
                </p>
              </div>
            </div>
            <div className="clear-fix"></div>
            <div className="border"></div>
            <div className="col-md-4">
              <div className="item text-center">
                <span className="icon ion-xbox"></span>
                <h6>Marketing</h6>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit,
                  sed do eiusmod tempor incid idunt ut labore et.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item text-center bord">
                <span className="icon ion-camera"></span>
                <h6>Photographic</h6>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit,
                  sed do eiusmod tempor incid idunt ut labore et.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item text-center">
                <span className="icon ion-ios-color-wand"></span>
                <h6>Problem Solving</h6>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit,
                  sed do eiusmod tempor incid idunt ut labore et.
                </p>
              </div>
            </div>
            <div className="clear-fix"></div>
          </div>
        </div>
      </section>

      <section className="clients section-padding" data-scroll-index="4">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">
              <div className="client-say text-center">
                <span className="icon ion-chatboxes"></span>

                <div className="owl-carousel owl-theme">
                  <div className="client-item">
                    <h5>John Doe</h5>
                    <p>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      Phasellus luctus commodo ullamcorper a posuere rhoncus
                      commodo elit. Aenean congue, risus utaliquam dapibus.
                      Thanks!.
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </p>
                    <h6>Envato</h6>
                  </div>

                  <div className="client-item">
                    <h5>John Doe</h5>
                    <p>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      Phasellus luctus commodo ullamcorper a posuere rhoncus
                      commodo elit. Aenean congue, risus utaliquam dapibus.
                      Thanks!.
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </p>
                    <h6>Envato</h6>
                  </div>

                  <div className="client-item">
                    <h5>John Doe</h5>
                    <p>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      Phasellus luctus commodo ullamcorper a posuere rhoncus
                      commodo elit. Aenean congue, risus utaliquam dapibus.
                      Thanks!.
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </p>
                    <h6>Envato</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio section-padding" data-scroll-index="5">
        <div className="container">
          <div className="section-head">
            <h3>Portfolio</h3>
          </div>

          <div className="row">
            <div className="filtering text-center mb-50">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Brand</span>
              <span data-filter=".web">Design</span>
              <span data-filter=".graphic">Graphic</span>
            </div>

            <div className="gallery text-center">
              <div className="col-md-4 items graphic">
                <div className="item-img">
                  <img src="img/portfolio/1.jpg" alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info v-middle text-center">
                      <h6 className="sm-titl">WEB DESIGN</h6>
                      <div className="icons">
                        <span className="icon">
                          <a href="#0">
                            <span className="icon-attachment"></span>
                          </a>
                        </span>

                        <span className="icon link">
                          <a href="img/portfolio/1.jpg">
                            <span className="icon-magnifying-glass"></span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 items web">
                <div className="item-img">
                  <Image
                    placeholder="blur"
                    src={require("public/img/portfolio/2.jpg")}
                    alt="image"
                  />
                  <div className="item-img-overlay">
                    <div className="overlay-info v-middle text-center">
                      <h6 className="sm-titl">WEB DESIGN</h6>
                      <div className="icons">
                        <span className="icon">
                          <a href="#0">
                            <span className="icon-attachment"></span>
                          </a>
                        </span>

                        <span className="icon link">
                          <a href="img/portfolio/2.jpg">
                            <span className="icon-magnifying-glass"></span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 items graphic">
                <div className="item-img">
                  <Image
                    placeholder="blur"
                    src={require("public/img/portfolio/3.jpg")}
                    alt="image"
                  />
                  <div className="item-img-overlay">
                    <div className="overlay-info v-middle text-center">
                      <h6 className="sm-titl">WEB DESIGN</h6>
                      <div className="icons">
                        <span className="icon">
                          <a href="#0">
                            <span className="icon-attachment"></span>
                          </a>
                        </span>

                        <span className="icon link">
                          <a href="img/portfolio/3.jpg">
                            <span className="icon-magnifying-glass"></span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 items brand">
                <div className="item-img">
                  <img src="img/portfolio/4.jpg" alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info v-middle text-center">
                      <h6 className="sm-titl">WEB DESIGN</h6>
                      <div className="icons">
                        <span className="icon">
                          <a href="#0">
                            <span className="icon-attachment"></span>
                          </a>
                        </span>

                        <span className="icon link">
                          <a href="img/portfolio/4.jpg">
                            <span className="icon-magnifying-glass"></span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 items web graphic">
                <div className="item-img">
                  <img src="img/portfolio/5.jpg" alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info v-middle text-center">
                      <h6 className="sm-titl">WEB DESIGN</h6>
                      <div className="icons">
                        <span className="icon">
                          <a href="#0">
                            <span className="icon-attachment"></span>
                          </a>
                        </span>

                        <span className="icon link">
                          <a href="img/portfolio/5.jpg">
                            <span className="icon-magnifying-glass"></span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 items brand">
                <div className="item-img">
                  <img src="img/portfolio/6.jpg" alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info v-middle text-center">
                      <h6 className="sm-titl">WEB DESIGN</h6>
                      <div className="icons">
                        <span className="icon">
                          <a href="#0">
                            <span className="icon-attachment"></span>
                          </a>
                        </span>

                        <span className="icon link">
                          <a href="img/portfolio/6.jpg">
                            <span className="icon-magnifying-glass"></span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hire section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">
              <div className="content text-center">
                <h2>Let's work together !</h2>
                <h6>I am available for freelance projects.</h6>
                <a href="#">
                  <span className="botn">
                    Hire Me <i className="icon ion-ios-paperplane"></i>
                  </span>
                </a>
                <a href="#">
                  <span className="botn">
                    Download C.V <i className="icon ion-android-download"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="blog" className="blog section-padding" data-scroll-index="6">
        <div className="container">
          <div className="section-head">
            <h3>Latest News</h3>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="item text-center">
                <div className="img-post">
                  <a href="blog.html">
                    <img src="img/blog/1.jpg" alt="image" />
                  </a>
                </div>
                <div className="cont-post">
                  <a href="#">
                    <span className="tag">ThemeForest</span>
                  </a>
                  <a href="blog.html">
                    <h6>Personal Template On ThemeForest</h6>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit,
                    incid idunt ut labore et.
                  </p>
                  <a href="blog-single.html">
                    <span className="botn">Read More..</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="item text-center">
                <div className="img-post">
                  <a href="blog.html">
                    <img src="img/blog/2.jpg" alt="image" />
                  </a>
                </div>
                <div className="cont-post">
                  <a href="#">
                    <span className="tag">Trends</span>
                  </a>
                  <a href="blog.html">
                    <h6>Exploring 3D & Web Design Trends</h6>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit,
                    incid idunt ut labore et.
                  </p>
                  <a href="blog-single.html">
                    <span className="botn">Read More..</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="item text-center">
                <div className="img-post">
                  <a href="blog.html">
                    <img src="img/blog/3.jpg" alt="image" />
                  </a>
                </div>
                <div className="cont-post">
                  <a href="#">
                    <span className="tag">WordPress</span>
                  </a>
                  <a href="blog.html">
                    <h6>40 Best WordPress Themes 2017</h6>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit,
                    incid idunt ut labore et.
                  </p>
                  <a href="blog-single.html">
                    <span className="botn">Read More..</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section-padding" data-scroll-index="7">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h4 className="head-left">Get In Touch</h4>

              <form
                className="form"
                id="contact-form"
                method="post"
                action="contact.php"
              >
                <div className="messages"></div>

                <div className="controls">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                          data-error="Firstname is required."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          data-error="Valid email is required."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          id="form_subject"
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows={4}
                          required
                          data-error="Message."
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <input type="submit" value="Send message" />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-md-offset-1 col-md-4">
              <div className="info">
                <div className="item">
                  <span className="icon ion-android-call"></span>
                  <h6>
                    Phone :<br />
                    <span>+2 ( 100 ) 755 238</span>
                  </h6>
                </div>
                <div className="item">
                  <span className="icon ion-ios-location"></span>
                  <h6>
                    Address :<br />
                    <span>
                      3481 Melrose Place, <br />
                      Los Angeles
                    </span>
                  </h6>
                </div>
                <div className="item">
                  <span className="icon ion-ios-email"></span>
                  <h6>
                    Email :<br />
                    <span>alexmartin@gmail.com</span>
                  </h6>
                </div>
                <div className="social-icon">
                  <a href="#0">
                    <span>
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="#0">
                    <span>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="#0">
                    <span>
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="#0">
                    <span>
                      <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="#0">
                    <span>
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 text-center">
              <p className="copy">
                Copy Right &copy; By AlexMartin 2017 | ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>
      </section>

      <script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
      <script src="https://code.jquery.com/jquery-migrate-3.0.0.min.js"></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossOrigin="anonymous"
      ></script>
      <script src="js/scrollIt.min.js"></script>
      <script src="js/jquery.magnific-popup.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/jquery.stellar.min.js"></script>
      <script src="js/typed.js"></script>
      <script src="js/jquery.waypoints.min.js"></script>
      <script src="js/jquery.counterup.min.js"></script>
      <script src="js/isotope.pkgd.min.js"></script>
      <script src="js/particles.min.js"></script>
      <script src="js/app.js"></script>
      <script src="js/validator.js"></script>
      <script src="js/custom.js"></script>
    </>
  );
}