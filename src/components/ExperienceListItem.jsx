import "../styles/ExperienceListItem.scss"

const ExperienceListItem = ({ experience }) => {
  const experienceBlurbs = experience.blurbs.map(blurb => {
    return (
      <li key={blurb.id}>{blurb.blurb}</li>
    )
  })
  return (
    <>
    <div className="experience-item d-flex position-relative my-4">

      <div className="experience-box border1 mb-2">
        <div className="d-flex align-items-center">
          <img src={experience.icon} alt={experience.alt} className="experience-icon me-2"/>
          <span className="fs-3">{experience.label}</span>
        </div>
        <div className="d-grid">
            {experience.subLabel}
        </div>
        <ul className="mt-2">
          {experienceBlurbs}
        </ul>
      </div>
      <div className="timeline-icon border2 position-absolute top-0 start-50 translate-middle-x"  style={{zIndex: "10"}}>
        <img src={experience.timelineIcon} alt={experience.timelineAlt}/>
      </div>
      <div className="experience-timeline border1 position-absolute">
        {experience.timeline}
      </div>
    </div>
    </>
  );
};

export default ExperienceListItem;