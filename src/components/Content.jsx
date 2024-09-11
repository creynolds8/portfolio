import '../styles/Content.scss'
import ProjectList from './ProjectList';
import Intro from './Intro'
import About from './About';
import BadgeList from './BadgeList';
import IconList from './IconList';

const Content = () => {
  
  return (
    <>
      <div className='content d-flex flex-column'>
        <Intro />
        <About />
        <BadgeList />
        <ProjectList />
        <IconList />
      </div>
    </>
  )
}

export default Content;