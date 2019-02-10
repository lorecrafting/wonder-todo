import React from 'react';
import { navigate } from '@reach/router';
import GroupSVG from '../../assets/Group.svg';

const GroupCard = ({ group }) => {
  const progressCountText = () => {
    const totalTasksCount = group.tasks.length;
    const tasksDoneCount = group.tasks.filter(task => task.completedAt).length;
    return `${tasksDoneCount} OF ${totalTasksCount} TASKS COMPLETE`;
  };
  return (
    <div
      className="clickable-container bottom-border pointer"
      onClick={() => navigate(`/group/${group.group_id}`)}
      key={group.group_id}
    >
      <div className="icon-container">
        <img className="icon-group-arrow" src={GroupSVG} alt="group" />
      </div>
      <div>
        <div className="card-title">{group.name}</div>
        <div className="card-progress-count">{progressCountText(group.id)}</div>
      </div>
    </div>
  );
};

export default GroupCard;
