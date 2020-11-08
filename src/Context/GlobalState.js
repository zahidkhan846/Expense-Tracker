import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import * as actionTypes from "./ActionTypes";

//Global State
const initialState = {
  transactions: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: actionTypes.DELETE_TRANSACTION,
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: actionTypes.ADD_TRANSACTION,
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
