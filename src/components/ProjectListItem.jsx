import { useRef } from "react"
import "../styles/ProjectListItem.scss"

const ProjectListItem = ({ project }) => {
  const boundingRef = useRef(null)
  return (
    <>
      <div
      onMouseLeave={() => {
        boundingRef.current = null;
      }}
      onMouseEnter={(e) => {
        boundingRef.current = e.currentTarget.getBoundingClientRect();      
      }}
      onMouseMove={(e) => {
        if (!boundingRef.current) return
        const x = e.clientX - boundingRef.current.left;
        const y = e.clientY - boundingRef.current.top;
        const xPercentage = x / boundingRef.current.width;
        const yPercentage = y / boundingRef.current.height;
        const xRotation = (xPercentage - 0.5) * 20;
        const yRotation = (0.5 - yPercentage) * 20;

        e.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`)
        e.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`)
      }}
      className="project-box border1">
        <div className="project-content">
          <div className="project-image">
            <a className="repo-link" href={`${project.repoLink}`}>
              <img src="data/images/icons/github-white.svg" alt="Gh" height="32" />
            </a>
            <img className="project-thumbnail mb-2" src={project.thumbnail} alt="IMG" width="100%" />
          </div>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectListItem;