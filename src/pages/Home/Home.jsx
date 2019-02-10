import React, { useContext } from 'react';
import { AppContext } from '../../context.jsx';
import GroupList from './GroupList.jsx';

const Home = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="flex-container">
      <div className="left-flex-filler" />
      <div className="middle-flex-content">
        <div className="header bottom-border"> Things To Do</div>
        <GroupList groups={state.groups} />
      </div>
      <div className="right-flex-filler" />
    </div>
  );
};

export default Home;
