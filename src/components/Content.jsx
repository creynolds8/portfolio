import '../styles/Content.scss'
import ProjectList from './ProjectList';
import Intro from './Intro'

const Content = () => {
  
  return (
    <>
      <div className='content'>
        <Intro />
        <ProjectList />
      </div>
    </>
  )
}

export default Content;