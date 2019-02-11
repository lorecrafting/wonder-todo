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

      if (task.completedAt) {
        task.completedAt = null;
      } else {
        task.completedAt = Date();
      }

      // updateDependencyLocks
      let completedTaskIdsMap = {};
      nextState.groups.forEach(group => {
        group.tasks.forEach(task => {
          if (task.completedAt) {
            completedTaskIdsMap[task.task_id] = true;
          }
        });
      });
      nextState.groups.forEach(group => {
        group.tasks.forEach(task => {
          const noDependencies = task.dependencyIds.every(
            depId => completedTaskIdsMap[depId]
          );
          if (noDependencies) {
            task.isLocked = false;
          } else {
            task.isLocked = true;
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
