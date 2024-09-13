import '../styles/Badge.scss';

import { useRef } from 'react';
import { mouseEnter, mouseLeave, mouseMove } from '../javascript/mouseTrackingCard';

const Badge = ({ badge }) => {
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
      className="intro-badge border1 dynamic-hover d-flex flex-column align-items-center">
        <img src={badge.icon} alt={badge.alt} width="128"/>
        <h4>{badge.blurb}</h4>
      </div>
    </>
  );
}

export default Badge;