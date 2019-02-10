import React, { Component } from 'react';
import { Router } from '@reach/router';
import { TodoDataProvider } from './context.jsx';

const App = () => (
  <TodoDataProvider>
    <Router>
      <Home path="/" />
      <TaskListByGroup path="group/:groupId" />
    </Router>
  </TodoDataProvider>
);

const Home = () => <div>Home</div>;

const TaskLIstByGroup = () => <div>TaskListByGroup</div>;

export default App;
