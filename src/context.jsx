import React, { useState } from 'React';
import mockData from './mockdata/mockdata.js';

export const AppContext = React.createContext();
export const TodoDataProvider = ({ children }) => {
  const [state, setState] = useState(mockData);
  return;
  <AppContext.Provider>value={{ state, setState }}</AppContext.Provider>;
};
