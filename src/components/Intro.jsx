import React from 'react';

const Intro = () => {
  return (
    <div className="border1 my-4">
      <div className="d-flex justify-content-between align-items-center">
        <div className="intro-name fs-1">
          Hi, my name is Cameron.
        </div>
        <div className="intro-icons">
          <a href="https://www.linkedin.com/in/cameronreynolds8">
            <img className="intro-icon bounce mx-2" src="https://raw.githubusercontent.com/creynolds8/portfolio/1df5fa3ff9ab196861044f97644f7b04755da208/data/images/icons/intro/linkedin.svg" alt="Li" height="32" />
          </a>
          <a href="https://github.com/creynolds8">
            <img className="intro-icon bounce mx-2" src="https://raw.githubusercontent.com/creynolds8/portfolio/1df5fa3ff9ab196861044f97644f7b04755da208/data/images/icons/intro/github.svg" alt="Gh" height="32" />
          </a>
          <a href="https://flowcv.com/resume/qhi0h146rw">
            <img className="intro-icon bounce mx-2" src="https://raw.githubusercontent.com/creynolds8/portfolio/1df5fa3ff9ab196861044f97644f7b04755da208/data/images/icons/intro/resume.svg" alt="Rs" height="32" />
          </a>
        </div>
      </div>
      <div className="intro-details">
        I am a newly minted Full-Stack Web Developer with a passion for building clean and easy to use web applications.
      </div>
    </div>
  );
}

export default Intro;