import React from 'react';

interface XPCounterProps {
  xp: number;
}

const XPCounter: React.FC<XPCounterProps> = ({ xp }) => {
  return (
    <div className="xp-counter">
      <span className="pixel-font">XP: <span>{xp}</span></span>
    </div>
  );
};

export default XPCounter;