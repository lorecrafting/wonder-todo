import React, { useContext } from 'react';
import { AppContext } from '../../context.jsx';
import GroupList from './GroupList.jsx';

const Home = () => {
  const { state } = useContext(AppContext);
  return <GroupList groups={state.groups} />;
};

export default Home;
