import React from 'react';

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
      className="intro-badge bg-green dynamic-hover p-1">
        <div className="inner-section d-flex flex-column align-items-center">
          <img src={badge.icon} alt={badge.alt} width="128"/>
          <h4>{badge.blurb}</h4>
        </div>
      </div>
    </>
  );
}

export default Badge;