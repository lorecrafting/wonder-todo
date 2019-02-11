import React, { useContext } from 'react';
import Checkbox from './Checkbox.jsx';
import { AppContext } from '../../context.jsx';

const TaskCard = ({ name, taskId, groupId, completedAt, isLocked }) => {
  const { toggleCheckbox } = useContext(AppContext);
  console.log('taskCard gid tid', groupId, taskId);
  return (
    <div className="clickable-container bottom-border">
      <div
        className="icon-container pointer"
        onClick={() => (!isLocked ? toggleCheckbox(groupId, taskId) : null)}
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
