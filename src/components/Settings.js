import React from "react";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncListBudget, asyncUpdatedBudget } from "../actions/BudgetAction";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

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
      <>
        <Header />
      </>
      <div className="budget-section">
        <Container>
          <Form>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Budget - {budgetValue.amount}</Card.Title>

                <Form.Group className="mb-3" controlId="password.id">
                  <Form.Control
                    type="number"
                    placeholder="Enter your budget"
                    value={budget}
                    onChange={handleBudgetChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>
                  Update
                </Button>
              </Card.Body>
            </Card>
          </Form>
        </Container>

        <Catagories className="category-section" />
      </div>
    </>
  );
};

export default Settings;
