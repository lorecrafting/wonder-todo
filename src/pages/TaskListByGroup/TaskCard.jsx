import React, { useContext } from 'react';
import { AppContext } from '../../context.jsx';

const TaskCard = ({ name, taskId, groupId, completedAt, isLocked }) => {
  const { toggleCheckbox } = useContext(AppContext);
  return (
    <div className="clickable-container bottom-border">
      <div
        className="icon-container pointer"
        onClick={() => (!isLocked ? toggleCheckbox(groupId, taskId) : null)}
      >
        SVGHERE
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
