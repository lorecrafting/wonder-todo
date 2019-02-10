import React from 'react';
import { navigate } from '@reach/router';

const GroupCard = ({ group }) => {
  const navigateToGroup = groupId => {
    navigate(`/group/${groupId}`);
  };
  return (
    <div onClick={() => navigateToGroup(group.group_id)}>{group.name}</div>
  );
};

export default GroupCard;
