export const Resume = () => (
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
                      <h6 className="sm-title">Art Director - Facebook Inc.</h6>
                      <span className="date">2016 - Present</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </li>
                    <li>
                      <h6 className="sm-title">Web Designer - Google Inc.</h6>
                      <span className="date">2013 - 2016</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </li>
                    <li>
                      <h6 className="sm-title">Senior Developer - Abc Inc.</h6>
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
);
