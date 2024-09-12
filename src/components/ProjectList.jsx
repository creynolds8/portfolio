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
      <a name="Projects"></a>
      <h2 className="header">Projects:</h2>
      <div className="project-list my-4 d-flex justify-content-between" style={{perspective: 1000 + 'px'}}>
        {projectComponents}
      </div>
    </>
  )
}

export default ProjectList;