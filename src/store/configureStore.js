import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import budgetReducer from "../reducers/BudgetReducer";
import categoryReducer from "../reducers/CategoryReducer";
import expenseReducer from "../reducers/ExpenseReducer";
const configureStore = () => {
  const store = createStore(
    combineReducers({
      budget: budgetReducer,
      category: categoryReducer,
      expense: expenseReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
