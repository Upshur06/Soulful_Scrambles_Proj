import React, { createContext, useContext, useReducer } from 'react';

//Prepare the dataLayer
export const StateContext = createContext();

//wrap app and provide dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull info from dataLayer
export const useStateValue = () => useContext(StateContext);