import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Pdf from "react-to-pdf";

import { asyncCategoryList } from "../actions/CategoryAction";
import {
  asyncDeleteExpense,
  asyncExpenseList,
  asyncUpdateExpense,
} from "../actions/ExpenseAction";

const DEFAULT_VALUES = {
  name: "",
  amount: 0,
  expenseDate: new Date(),
  categoryName: "",
};

const ref = React.createRef();

const ExpenseTable = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [editExpense, setEditExpense] = useState(DEFAULT_VALUES);

  const categoryList = useSelector((state) => {
    return state.category;
  });

  useEffect(() => {
    dispatch(asyncCategoryList());
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

  const handleEditChange = (item) => {
    setShow(true);
    setEditExpense(item);
  };

  const handleOnEditChange = (value, type) => {
    setEditExpense({
      ...editExpense,
      [type]: value,
    });
  };

  const handleClose = () => {
    setShow(false);
    setEditExpense(DEFAULT_VALUES);
  };

  const handleEditSubmit = () => {
    // call edit api
    dispatch(asyncUpdateExpense(editExpense));
    handleClose();
  };

  const getCurrentDateInput = (d) => {
    const dateObj = new Date(d);

    // get the month in this format of 04, the same for months
    const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    const day = ("0" + dateObj.getDate()).slice(-2);
    const year = dateObj.getFullYear();

    const shortDate = `${year}-${month}-${day}`;

    return shortDate;
  };

  return (
    <>
      <Pdf targetRef={ref} filename="expense-invoice.pdf">
        {({ toPdf }) => (
          <Button variant="dark" onClick={toPdf} className="invoice-btn">
            Generate Invoice
          </Button>
        )}
      </Pdf>

      <div className="table-ctrl" ref={ref}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>CATEGORY</th>
              <th>NAME</th>
              <th>DATE</th>
              <th>AMOUNT</th>
              <th>Delete</th>
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
                      variant="link"
                      onClick={() => {
                        handleDeleteChange(item._id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="link"
                      onClick={() => handleEditChange(item)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {/* Modal for edit */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Expense</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* FORM */}
            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Group className="mb-3" controlId="exp-name">
                <Form.Label>Expense Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editExpense.name}
                  onChange={(e) => handleOnEditChange(e.target.value, "name")}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exp-amount">
                <Form.Label>Expense Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={editExpense.amount}
                  onChange={(e) => handleOnEditChange(e.target.value, "amount")}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exp-date">
                <Form.Label>Expense Date</Form.Label>
                <Form.Control
                  type="date"
                  value={getCurrentDateInput(editExpense.expenseDate)}
                  onChange={(e) =>
                    handleOnEditChange(e.target.value, "expenseDate")
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exp-category">
                <Form.Label>Expense Category</Form.Label>
                <Form.Select
                  aria-label="Category select"
                  defaultValue={editExpense.categoryName}
                  onChange={(e) =>
                    handleOnEditChange(e.target.value, "categoryName")
                  }
                >
                  <option>select category</option>
                  {categoryList.map((item, id) => (
                    <option key={id}>{item}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEditSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ExpenseTable;
