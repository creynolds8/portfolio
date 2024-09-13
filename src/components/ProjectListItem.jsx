import "../styles/ProjectListItem.scss"

import { useRef } from "react";
import { mouseEnter, mouseLeave, mouseMove } from "../javascript/mouseTrackingCard";

const ProjectListItem = ({ project }) => {
  const boundingRef = useRef(null);
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
      className="project-box border1 dynamic-hover">
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