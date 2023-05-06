import React from "react";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncListBudget, asyncUpdatedBudget } from "../actions/BudgetAction";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Header from "./Header";
import Catagories from "./Catagories";

const Settings = () => {
  const [budget, setBudget] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncListBudget());
  }, [dispatch]);

  const budgetValue = useSelector((state) => {
    return state.budget;
  });

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleSubmit = (type) => {
    const budgetFormData = {
      amount: budget,
    };
    dispatch(asyncUpdatedBudget(budgetFormData));
  };

  return (
    <>
      <Header />

      <Container>
        <h3>BUDGET - {budgetValue.amount}</h3>
        <Form>
          <Form.Group className="mb-3" controlId="password.id">
            <Form.Control
              type="number"
              placeholder="Enter your budget"
              value={budget}
              onChange={handleBudgetChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Update
          </Button>
        </Form>
      </Container>

      <Catagories />
    </>
  );
};

export default Settings;
