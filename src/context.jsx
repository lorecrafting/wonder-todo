import React, { useState } from 'react';
import mockData from './mockdata/mockdata.js';

export const AppContext = React.createContext();
export const TodoDataProvider = ({ children }) => {
  const [state, setState] = useState(mockData);
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
