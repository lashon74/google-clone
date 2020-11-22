import React, { createContext, useContext, useReducer } from "react";

// Preparing the data layer
export const StateContext = createContext();

// Higher order component reducer listens to changes and initialState is what the app looks like before hand
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* Childen refering to is the app itself */}
    {children}
  </StateContext.Provider>
);

// Hook which pulls info from data layer
export const useStateValue = () => useContext(StateContext);
