import ProjectListItem from "./ProjectListItem";
import projects from '../../data/projects';

import '../styles/ProjectList.scss'

const ProjectList = () => {
  const projectComponents = projects.map((project) => {
    return (
      <ProjectListItem 
      key={project.id}
      project={project}
      />
    )
  })
  return (
    <>
      <div className="project-list">
        {projectComponents}
      </div>
    </>
  )
}

export default ProjectList;