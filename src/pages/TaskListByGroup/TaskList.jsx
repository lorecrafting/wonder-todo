import React from 'react';
import PropTypes from 'prop-types';
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

TaskList.propTypes = {
  task: PropTypes.object,
  groupId: PropTypes.number
};

TaskList.defaultProps = {
  task: null,
  groupId: null
};

export default TaskList;
