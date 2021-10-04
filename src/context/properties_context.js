import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/properties_reducer';

import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions';

const initialState = {
  isSidebarOpen: false,
};

const PropertiesContext = React.createContext();

export const PropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <PropertiesProvider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </PropertiesProvider>
  );
};

export const usePropertiesContext = () => {
  return useContext(PropertiesContext);
};
