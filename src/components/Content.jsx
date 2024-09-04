import '../styles/Content.scss'
import ProjectList from './ProjectList';
import Intro from './Intro'
import About from './About';
import BadgeList from './BadgeList';

const Content = () => {
  
  return (
    <>
      <div className='content d-flex flex-column justify-content-between'>
        <Intro />
        <About />
        <BadgeList />
        <ProjectList />
      </div>
    </>
  )
}

export default Content;