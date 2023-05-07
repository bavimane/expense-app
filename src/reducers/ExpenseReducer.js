const initilaExpenseValue = [{}];

const expenseReducer = (state = initilaExpenseValue, action) => {
  switch (action.type) {
    case "ADD_EXPENSE": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default expenseReducer;
