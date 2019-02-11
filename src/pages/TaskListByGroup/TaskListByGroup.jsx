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
        <div className="flex-container bottom-border space-between">
          <div className="header">{group.name}</div>
          <div className="all-groups-button" onClick={() => navigate('/')}>
            ALL GROUPS
          </div>
        </div>
        {group.tasks.map(task => (
          <TaskList task={task} groupId={group.groupid} />
        ))}
      </div>
      <div className="right-flex-filler" />
    </div>
  );
};

export default TaskListByGroup;
