import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import TaskList from './TaskList.jsx';
import { AppContext } from '../../context.jsx';

const TaskListContainer = ({ groupId }) => {
  groupId = Number(groupId);
  const { state } = useContext(AppContext);
  const group = state.groups.find(group => group.group_id === groupId);
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
        <TaskList tasks={group.tasks} groupId={groupId} key={groupId} />
      </div>
      <div className="right-flex-filler" />
    </div>
  );
};

TaskListContainer.propTypes = {
  groupId: PropTypes.string
};

TaskListContainer.defaultProps = {
  groupId: null
};

export default TaskListContainer;
