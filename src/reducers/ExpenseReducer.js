const initilaExpenseValue = [];

const expenseReducer = (state = initilaExpenseValue, action) => {
  switch (action.type) {
    case "LIST_EXPENSE": {
      return [...state, ...action.payload];
    }
    default: {
      return state;
    }
  }
};

export default expenseReducer;
