import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { asyncExpenseList } from "../actions/ExpenseAction";

const ExpenseTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncExpenseList());
  }, [dispatch]);

  const expenseTable = useSelector((state) => {
    return state.expense;
  });

  console.log(expenseTable);

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
