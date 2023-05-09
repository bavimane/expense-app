import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncAddExpense } from "../actions/ExpenseAction";
import { asyncCategoryList } from "../actions/CategoryAction";
import { useNavigate } from "react-router-dom";

const Expense = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncCategoryList());
  }, [dispatch]);

  const categoryList = useSelector((state) => {
    return state.category;
  });

  const handleDateChange = (e) => {
    setExpenseDate(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = localStorage.getItem("user");
    const parsedValue = JSON.parse(user);
    const id = parsedValue.id;

    const expenseFormData = {
      name: name,
      amount: amount,
      description: description,
      expenseDate: expenseDate,
      userId: id,
      categoryName: category,
    };
    dispatch(asyncAddExpense(expenseFormData));
    navigate("/home");

    setName("");
    setAmount(0);
    setDescription("");
    setExpenseDate("");
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name.id">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter expense name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="name.id">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the amount"
              value={amount}
              onChange={handleAmountChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="name.id">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="description...."
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="name.id">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={expenseDate}
              onChange={handleDateChange}
              required
            />
          </Form.Group>

          <Form.Select
            aria-label="Category select"
            onChange={handleCategoryChange}
          >
            <option>select category</option>
            {categoryList.map((item, id) => (
              <option key={id}>{item}</option>
            ))}
          </Form.Select>

          <Button variant="dark" type="submit">
            Add
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Expense;
