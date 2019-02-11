import React from 'react';
import './css/App.css';
import { Router } from '@reach/router';
import { TodoDataProvider } from './context.jsx';
import HomeContainer from './pages/Home/HomeContainer.jsx';
import TaskListContainer from './pages/TaskList/TaskListContainer.jsx';

const App = () => (
  <TodoDataProvider>
    <Router>
      <HomeContainer path="/" />
      <TaskListContainer path="group/:groupId" />
    </Router>
  </TodoDataProvider>
);

export default App;
