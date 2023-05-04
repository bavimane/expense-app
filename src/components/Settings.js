import React from "react";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncListBudget, asyncUpdatedBudget } from "../actions/BudgetAction";

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
        <input type="text" value={budget} onChange={handleBudgetChange} />
        <button onClick={handleSubmit}>Update</button>
      </Container>

      <Catagories />
    </>
  );
};

export default Settings;
