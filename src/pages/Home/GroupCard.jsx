import React from 'react';
import { navigate } from '@reach/router';

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
      {group.name}
      {progressCountText(group.group_id)}
    </div>
  );
};

export default GroupCard;
