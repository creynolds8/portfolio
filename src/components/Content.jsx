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
      <div className='content d-flex flex-column'>
        <Intro />
        <About />
        <BadgeList />
        <IconList />
        <ProjectList />
        <Contact />
      </div>
    </>
  )
}

export default Content;