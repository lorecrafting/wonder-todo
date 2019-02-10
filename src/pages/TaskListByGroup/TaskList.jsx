import React from 'react';
import TaskCard from './TaskCard.jsx';

const TaskList = ({ task, groupId }) => (
  <TaskCard
    name={task.task}
    key={task.task_id}
    taskId={task.task_id}
    groupId={groupId}
    completedAt={task.completedAt}
    isLocked={task.isLocked}
  />
);

export default TaskList;
