import React from 'react';
import GroupCard from './GroupCard.jsx';

const GroupList = ({ groups }) => {
  return groups.map(group => <GroupCard group={group} />);
};

export default GroupList;
