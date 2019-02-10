import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import TaskList from './TaskList.jsx';
import { AppContext } from '../../context.jsx';

const TaskListByGroup = ({ groupId }) => {
  const { state } = useContext(AppContext);
  const group = state.groups.find(group => group.group_id === Number(groupId));
  return (
    <div>
      {group.name} <span onClick={() => navigate('/')}>ALL GROUPS</span>
      {group.tasks.map(task => (
        <TaskList task={task} groupId={group.group_id} />
      ))}
    </div>
  );
};

export default TaskListByGroup;
