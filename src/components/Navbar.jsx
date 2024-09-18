import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <span className="d-flex align-items-center">
          <img src="https://raw.githubusercontent.com/creynolds8/portfolio/1df5fa3ff9ab196861044f97644f7b04755da208/data/images/icons/c.svg" alt="C" className="bs-white" style={{borderRadius: "100%",backgroundColor: "rgba(255, 255, 255 , 0.5)"}}/>
          <a className="nav-link mx-4 ts-hover-white" href="/">
            <strong>Cameron - Web Developer</strong>
          </a>
          </span>
          <div className="d-flex flex-row">
            <a className="nav-link mx-4 ts-hover-white" href="#About">
              About
            </a>
            <a className="nav-link mx-4 ts-hover-white" href="#Experience">
              Experience
            </a>
            <a className="nav-link mx-4 ts-hover-white" href="#Projects">
              Projects
            </a>
            <a className="nav-link mx-4 ts-hover-white" href="#Contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
