import '../styles/Intro.scss'

const Intro = () => {
  return (
    <div className="border1 m-4">
      <div className="intro-title">
        <div className="intro-name">
          Hi, my name is Cameron.
        </div>
        <div className="intro-icons">
          <a href="https://www.linkedin.com/in/cameronreynolds8">
            <img className="intro-icon mx-2" src="/linkedin.svg" alt="Li" height="32" />
          </a>
          <a href="https://github.com/creynolds8">
            <img className="intro-icon mx-2" src="/github.svg" alt="Gh" height="32" />
          </a>
          <a href="https://flowcv.com/resume/qhi0h146rw">
            <img className="intro-icon mx-2" src="/resume.svg" alt="Rs" height="32" />
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