import '../styles/Content.scss'
import ProjectList from './ProjectList';
import Intro from './Intro'
import About from './About';

const Content = () => {
  
  return (
    <>
      <div className='content'>
        <Intro />
        <About />
        <ProjectList />
      </div>
    </>
  )
}

export default Content;