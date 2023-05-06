import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useState } from "react";

const Expense = () => {
  const expenseDate = () => {
    const date = new Date();
    const currentDay = String(date.getDate()).padStart(2, "0");
    const currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    const currentYear = date.getFullYear();
    const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
    return currentDate;
  };

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(expenseDate);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name.id">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter expese name"
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
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="name.id">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="writr the description"
              value={amount}
              onChange={handleAmountChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="name.id">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="writr the description"
              value={date}
              onChange={handleDateChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Expense;
