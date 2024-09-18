import React from 'react';

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
      <div className="badge-list my-4 d-flex justify-content-between" style={{perspective: 1000 + 'px'}}>
        {badgeListComponents}
      </div>
    </>
  );
}

export default BadgeList;