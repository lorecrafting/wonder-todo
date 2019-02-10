import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import TaskList from './TaskList.jsx';
import { AppContext } from '../../context.jsx';

const TaskListByGroup = ({ groupId }) => {
  const { state } = useContext(AppContext);
  const group = state.groups.find(group => group.group_id === Number(groupId));
  return (
    <div className="flex-container">
      <div className="left-flex-filler" />
      <div className="middle-flex-content">
        {group.name} <span onClick={() => navigate('/')}>ALL GROUPS</span>
        {group.tasks.map(task => (
          <TaskList task={task} groupId={group.group_id} />
        ))}
      </div>
      <div className="right-flex-filler" />
    </div>
  );
};

export default TaskListByGroup;
