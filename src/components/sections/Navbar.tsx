export const Navbar = () => (
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
);
