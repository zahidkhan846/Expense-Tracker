import * as actionTypes from "./ActionTypes";

export default (state, action) => {
  switch (action.type) {
    case actionTypes.DELETE_TRANSACTION: {
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    }
    case actionTypes.ADD_TRANSACTION: {
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    }
    default:
      return state;
  }
};
