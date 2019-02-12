import React, { useState } from 'react';
import mockData from './mockdata/mockdata.js';

export const AppContext = React.createContext();

export const TodoDataProvider = ({ children }) => {
  const [state, setState] = useState(mockData);
  const toggleCheckbox = (groupId, taskId) => {
    setState(prevState => {
      const nextState = { ...prevState };
      const groupIdx = nextState.groups.findIndex(
        group => group.group_id === groupId
      );

      const taskIdx = nextState.groups[groupIdx].tasks.findIndex(
        task => task.task_id === taskId
      );

      const task = nextState.groups[groupIdx].tasks[taskIdx];

      if (task.completed_at) {
        task.completed_at = null;
      } else {
        task.completed_at = Date();
      }

      // updateDependencyLocks
      let completedTaskIdsMap = {};
      nextState.groups.forEach(group => {
        group.tasks.forEach(task => {
          if (task.completed_at) {
            completedTaskIdsMap[task.task_id] = true;
          }
        });
      });
      nextState.groups.forEach(group => {
        group.tasks.forEach(task => {
          const noDependencies = task.dependency_ids.every(
            depId => completedTaskIdsMap[depId]
          );
          if (noDependencies) {
            task.is_locked = false;
          } else {
            task.is_locked = true;
          }
        });
      });

      return nextState;
    });
  };
  return (
    <AppContext.Provider value={{ state, setState, toggleCheckbox }}>
      {children}
    </AppContext.Provider>
  );
};
