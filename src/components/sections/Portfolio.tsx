import Image from "next/image";

export const Portfolio = () => (
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
              <Image src={require("public/img/portfolio/1.jpg")} alt="image" />
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
              <Image src={require("public/img/portfolio/4.jpg")} alt="image" />
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
              <Image src={require("public/img/portfolio/5.jpg")} alt="image" />
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
              <Image src={require("public/img/portfolio/6.jpg")} alt="image" />
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
);
