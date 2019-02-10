import React, { useContext } from 'react';
import TaskList from './TaskList.jsx';
import { AppContext } from '../../context.jsx';

const TaskListByGroup = ({ groupId }) => {
  const { state } = useContext(AppContext);
  const group = state.groups.find(group => group.group_id === Number(groupId));
  return (
    <div>
      {group.name}
      {group.tasks.map(task => (
        <TaskList task={task} groupId={group.group_id} />
      ))}
    </div>
  );
};

export default TaskListByGroup;
