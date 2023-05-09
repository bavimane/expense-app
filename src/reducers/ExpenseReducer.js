const initilaExpenseValue = [];

const expenseReducer = (state = initilaExpenseValue, action) => {
  switch (action.type) {
    case "LIST_EXPENSE": {
      return action.payload;
    }
    case "DELETE_EXPENSE": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default expenseReducer;
