import React, { createContext, useContext, useReducer } from "react";

// Prepare data layer
export const DataLayerContext = createContext();

// Actually wrap Ap with DataLayer in index.js
// children is App
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

//get aacces of data layer
export const useDataLayerValue = () => useContext(DataLayerContext);
