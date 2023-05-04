import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import budgetReducer from "../reducers/BudgetReducer";
import categoryReducer from "../reducers/CategoryReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      budget: budgetReducer,
      category: categoryReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
