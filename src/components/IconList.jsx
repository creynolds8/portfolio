import Icon from "./Icon";

import icons from "../../data/icons";

const IconList = () => {
  const iconComponents = icons.map((icon) => {
    return <Icon key={icon.id} icon={icon} />
  })
  return (
    <>
      <div className="icon-list d-flex flex-wrap justify-content-center my-4">
        { iconComponents }
      </div>
    </>
  );
};

export default IconList;