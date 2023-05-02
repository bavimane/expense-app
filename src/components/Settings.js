import React from "react";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { asyncAddBudget } from "../actions/BudgetAction";
import Header from "./Header";

const Settings = () => {
  const [budget, setBudget] = useState(0);
  const dispatch = useDispatch();

  const budgetValue = useSelector((state) => {
    return state.budget;
  });

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const budgetFormData = {
      amount: budget,
    };
    dispatch(asyncAddBudget(budgetFormData));
  };

  return (
    <>
      <Header />

      <Container>
        <h3>BUDGET - {budget}</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={budget} onChange={handleBudgetChange} />
          <input type="submit" value="Add" />
        </form>
        <h2>{budgetValue.amount}</h2>
      </Container>
    </>
  );
};

export default Settings;
