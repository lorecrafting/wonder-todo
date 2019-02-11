import React, { useContext } from 'react';
import Checkbox from './Checkbox.jsx';
import { AppContext } from '../../context.jsx';

const TaskCard = ({ name, taskId, groupId, completedAt, isLocked }) => {
  return (
    <div className="clickable-container bottom-border">
      <div
        className="icon-container pointer"
        onClick={() => (!isLocked ? console.log('toggled') : null)}
      >
        <Checkbox isCompleted={completedAt} isLocked={isLocked} />
      </div>
      <div
        className="card-title"
        style={{ textDecoration: completedAt ? 'line-through' : 'none' }}
      >
        {name}
      </div>
    </div>
  );
};

export default TaskCard;
