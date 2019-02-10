import React, { useContext } from 'react';
import { AppContext } from '../../context.jsx';
import GroupList from './GroupList.jsx';

const Home = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <div>Things To Do</div>
      <div>
        <GroupList groups={state.groups} />
      </div>
    </>
  );
};

export default Home;
