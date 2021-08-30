import Image from "next/image";
export const Blog = () => (
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
                <Image src={require("public/img/blog/1.jpg")} alt="image" />
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
                <Image src={require("public/img/blog/2.jpg")} alt="image" />
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
                <Image src={require("public/img/blog/3.jpg")} alt="image" />
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
);
