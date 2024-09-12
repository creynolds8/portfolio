import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <span className="d-flex">
          <img src="data/images/icons/c.svg" alt="C" />
          <a className="nav-link mx-4" href="/">
            <strong>Cameron - Web Developer</strong>
          </a>
          </span>
          <div className="d-flex flex-row">
            <a className="nav-link mx-4" href="#About">
              About
            </a>
            <a className="nav-link mx-4" href="#Projects">
              Projects
            </a>
            <a className="nav-link mx-4" href="#Contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
