import "../styles/ProjectListItem.scss"

const ProjectListItem = ({ project }) => {
  return (
    <>
      <div className="project-box m-4 p-4">
        <div className="project-content">
          <img className="project-thumbnail" src={project.thumbnail} alt="IMG" width="100%" />
          <p>{project.title}</p>
          <p>{project.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectListItem;