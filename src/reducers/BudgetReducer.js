const initialBudget = 0;

const budgetReducer = (state = initialBudget, action) => {
  switch (action.type) {
    case "ADD_BUDGET": {
      return {
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default budgetReducer;
