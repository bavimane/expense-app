import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import budgetReducer from "../reducers/BudgetReducer";
import categoryReducer from "../reducers/CategoryReducer";
import expenseReducer from "../reducers/ExpenseReducer";
import userProfileReducer from "../reducers/ProfileReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      budget: budgetReducer,
      category: categoryReducer,
      expense: expenseReducer,
      userProfile: userProfileReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
