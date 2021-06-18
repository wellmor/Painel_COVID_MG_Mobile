import React, {createContext, useContext, useReducer} from 'react';

export const CitySelectedContext = createContext();

export const CitySelectedContextProvider = ({
  reducer,
  initialState,
  children,
}) => (
  <CitySelectedContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CitySelectedContext.Provider>
);

export const useCitySelectedState = () => useContext(CitySelectedContext);
