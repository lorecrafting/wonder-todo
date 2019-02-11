import React from 'react';
import PropTypes from 'prop-types';
import GroupCard from './GroupCard.jsx';

const GroupList = ({ groups }) => {
  return groups.map(group => <GroupCard group={group} />);
};

GroupList.propTypes = {
  groups: PropTypes.array
};

GroupList.defaultProps = {
  groups: []
};

export default GroupList;
