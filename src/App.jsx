import React from 'react';
import { Router } from '@reach/router';
import { TodoDataProvider } from './context.jsx';
import Home from './pages/Home/Home.jsx';
import TaskListByGroup from './pages/TaskListByGroup/TaskListByGroup.jsx';

const App = () => (
  <TodoDataProvider>
    <Router>
      <Home path="/" />
      <TaskListByGroup path="group/:groupId" />
    </Router>
  </TodoDataProvider>
);

export default App;
