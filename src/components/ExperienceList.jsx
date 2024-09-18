import ExperienceListItem from "./ExperienceListItem";
import experience from "../../data/experience";

const ExperienceList = () => {
  const experienceComponents = experience.map(exp => {
    return (
      <ExperienceListItem key={exp.id} experience={exp} />
    )
  })
  return (
    <>
      <a name="Experience"></a>
      <h2 className="header">Experience:</h2>
      <div className="experience-list my-4 d-flex flex-column position-relative">
        {experienceComponents}
      <div className="border1 position-absolute top-0 start-50 translate-middle-x h-100 p-1" style={{zIndex: "0"}}></div>
      </div>
    </>
  );
};

export default ExperienceList;