import React, { Component } from 'react';
import { Router } from '@reach/router';

const App = () => (
  <Router>
    <Home path="/" />
    <TaskListByGroup path="group/:groupId" />
  </Router>
);

const Home = () => <div>Home</div>;

const TaskListByGroup = () => <div>Task List By group</div>;

export default App;
