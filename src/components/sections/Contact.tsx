export const Contact = () => (
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
);
