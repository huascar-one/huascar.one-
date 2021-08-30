import Image from "next/image";

export const Hero = () => (
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, ullamco
              laboris nisi ut aliquip ex ea commodo
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
);
