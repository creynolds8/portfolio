import "../styles/ProjectListItem.scss"

import { useRef } from "react";
import { mouseEnter, mouseLeave, mouseMove } from "../javascript/mouseTrackingCard";

const ProjectListItem = ({ project }) => {
  const boundingRef = useRef(null);

  const techStackComponents = project.techStack.map(a => {
    return (
      <p className="tech-item me-2">{a}</p>
    )
  })
  return (
    <>
      <div
      onMouseLeave={() => {
        mouseLeave(boundingRef);
      }}
      onMouseEnter={(e) => {
        mouseEnter(boundingRef, e);     
      }}
      onMouseMove={(e) => {
        mouseMove(boundingRef, e);
      }}
      className="project-box bg-green dynamic-hover p-1">
        <div className="inner-section p-2 d-flex flex-column justify-content-between">
          <div>
            <div className="project-image">
              <a className="repo-link" href={`${project.repoLink}`}>
                <img src="data/images/icons/github-white.svg" alt="Gh" height="32" />
              </a>
              <img className="project-thumbnail mb-2" src={project.thumbnail} alt="IMG" width="100%" />
            </div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
          <div className="d-flex">
            {techStackComponents}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectListItem;