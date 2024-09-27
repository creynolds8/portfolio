import React from "react";
import "bootstrap/js/src/collapse.js";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container">
          <span className="d-flex navbar-brand">
            <a href="#">
              <img src="https://raw.githubusercontent.com/creynolds8/portfolio/1df5fa3ff9ab196861044f97644f7b04755da208/data/images/icons/c.svg" alt="C" className="bs-white me-4" style={{borderRadius: "100%",backgroundColor: "rgba(255, 255, 255 , 0.5)"}}/>
            </a>
            {(window.innerWidth > 1020) && <strong>Cameron - Web Developer</strong>}
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-end">
              <li className="nav-item">
                <a className="nav-link mx-4 ts-hover-white" href="#About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-4 ts-hover-white" href="#Experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-4 ts-hover-white" href="#Projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-4 ts-hover-white" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
