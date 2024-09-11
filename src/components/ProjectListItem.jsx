import "../styles/ProjectListItem.scss"

const ProjectListItem = ({ project }) => {
  return (
    <>
      <div className="project-box border1">
        <div className="project-content">
          <img className="project-thumbnail mb-2" src={project.thumbnail} alt="IMG" width="100%" />
          <h4>{project.title}</h4>
          <p>{project.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectListItem;