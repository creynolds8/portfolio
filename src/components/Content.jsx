import '../styles/Content.scss'
import ProjectList from './ProjectList';
import Intro from './Intro';
import About from './About';
import BadgeList from './BadgeList';
import IconList from './IconList';
import Contact from './Contact';
import ExperienceList from './ExperienceList';

const Content = () => {
  
  return (
    <>
      <div className='content d-flex flex-column pb-0'>
        <Intro />
        <About />
        <BadgeList />
        <IconList />
        <ExperienceList />
        <ProjectList />
        <Contact />

        <a href="#" className="align-self-center py-4">
          <img src="/data/images/icons/up-arrow.svg" alt="Back to Top" height="32px" className="top-arrow bs-hover-white"/>
        </a>
      </div>
    </>
  )
}

export default Content;