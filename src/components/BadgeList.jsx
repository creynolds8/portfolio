import Badge from "./Badge"
import badges from "../../data/badges"

const BadgeList = () => {

  const badgeListComponents = badges.map((badge) => {
    return (
      <Badge 
      key={badge.id}
      badge={badge}
      />
    )
  })
  return (
    <>
      <div className="badge-list d-flex justify-content-between">
        {badgeListComponents}
      </div>
    </>
  );
}

export default BadgeList;