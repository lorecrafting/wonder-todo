import React from 'react';
import CompletedSVG from '../../assets/Completed.svg';
import IncompleteSVG from '../../assets/Incomplete.svg';
import LockedSVG from '../../assets/Locked.svg';

const Checkbox = ({ isCompleted, isLocked }) => {
  if (isLocked) {
    return <img className="icon-locked" src={LockedSVG} alt="locked" />;
  } else {
    return isCompleted ? (
      <img src={CompletedSVG} alt="completed" />
    ) : (
      <img src={IncompleteSVG} alt="incomplete" />
    );
  }
};

export default Checkbox;
