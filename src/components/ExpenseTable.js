import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { asyncDeleteExpense, asyncExpenseList } from "../actions/ExpenseAction";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const ExpenseTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncExpenseList());
  }, [dispatch]);

  const expenseTable = useSelector((state) => {
    return state.expense;
  });

  const handleDeleteChange = (id) => {
    const deletedItem = expenseTable.find((item) => {
      return item._id === id;
    });

    dispatch(asyncDeleteExpense(deletedItem._id));
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>CATEGORY</th>
            <th>NAME</th>
            <th>DATE</th>
            <th>AMOUNT</th>
            <th>Delete</th>
            <th>Invoice</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {expenseTable.map((item, id) => {
            return (
              <tr key={id}>
                <td>{item.categoryName}</td>
                <td>{item.name}</td>
                <td>{item.expenseDate}</td>
                <td>{item.amount}</td>
                <td>
                  <Button
                    variant="dark"
                    onClick={() => {
                      handleDeleteChange(item._id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button variant="dark">Invoice</Button>
                </td>
                <td>
                  <Button variant="dark">Edit</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ExpenseTable;
