import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import budgetReducer from "../reducers/BudgetReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      budget: budgetReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
