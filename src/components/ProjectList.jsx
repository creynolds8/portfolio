import ProjectListItem from "./ProjectListItem";
import projects from '../../data/projects';

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
      <div className="project-list my-4 d-flex justify-content-between">
        {projectComponents}
      </div>
    </>
  )
}

export default ProjectList;