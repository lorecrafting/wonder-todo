import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox.jsx';
import { AppContext } from '../../context.jsx';

const TaskCard = ({ name, taskId, groupId, completedAt, isLocked }) => {
  const { toggleCheckbox } = useContext(AppContext);
  return (
    <div className="clickable-container bottom-border">
      <div
        className="icon-container pointer"
        onClick={() => (!isLocked ? toggleCheckbox(groupId, taskId) : null)}
      >
        <Checkbox
          isCompleted={completedAt ? true : false}
          isLocked={isLocked}
        />
      </div>
      <div
        className="card-title"
        style={{ textDecoration: completedAt ? 'line-through' : 'none' }}
      >
        {name}
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  name: PropTypes.string,
  taskId: PropTypes.number,
  groupId: PropTypes.number,
  completedAt: PropTypes.string,
  isLocked: PropTypes.bool
};

TaskCard.defaultProps = {
  name: null,
  taskId: null,
  groupId: null,
  completedAt: null,
  isLocked: null
};

export default TaskCard;
