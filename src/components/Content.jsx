import '../styles/Content.scss'
import ProjectList from './ProjectList';
import Intro from './Intro';
import About from './About';
import BadgeList from './BadgeList';
import IconList from './IconList';
import Contact from './Contact';

const Content = () => {
  
  return (
    <>
      <div className='content d-flex flex-column pb-0'>
        <Intro />
        <About />
        <BadgeList />
        <IconList />
        <ProjectList />
        <Contact />

        <a href="#" className="align-self-center py-4">
          <img src="/data/images/icons/up-arrow.svg" alt="Back to Top" height="32px" className="bs-hover-white" style={{borderRadius: "100%",backgroundColor: "rgba(255, 255, 255 , 0.5)"}}/>
        </a>
      </div>
    </>
  )
}

export default Content;