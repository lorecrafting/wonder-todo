import React from 'react';
import PropTypes from 'prop-types';
import TaskCard from './TaskCard.jsx';

const TaskList = ({ tasks, groupId }) =>
  tasks.map(task => (
    <TaskCard
      name={task.task}
      key={task.task_id}
      taskId={task.task_id}
      groupId={groupId}
      completedAt={task.completed_at}
      isLocked={task.is_locked}
    />
  ));

TaskList.propTypes = {
  tasks: PropTypes.array,
  groupId: PropTypes.number
};

TaskList.defaultProps = {
  tasks: [],
  groupId: null
};

export default TaskList;
