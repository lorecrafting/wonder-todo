import React from 'react';
import { navigate } from '@reach/router';

const GroupCard = ({ group }) => {
  return (
    <div onClick={() => navigate(`/group/${group.group_id}`)}>{group.name}</div>
  );
};

export default GroupCard;
