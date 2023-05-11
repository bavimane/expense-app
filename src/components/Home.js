import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

import Header from "./Header";
import Container from "react-bootstrap/Container";
import ExpenseTable from "./ExpenseTable";
import BudgetChart from "./BudgetChart";
import CategoryChart from "./CategoryChart";

const Home = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleAddExpense = () => {
    navigate("/add-expense");
  };

  useEffect(() => {
    const parseValue = user ? JSON.parse(user) : {};
    if (!parseValue.id) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <>
      <Header />
      <Container>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <BudgetChart />
          <CategoryChart />
        </div>

        <Button
          variant="dark"
          onClick={handleAddExpense}
          className="exp-btn-ctrl"
        >
          Add Expense
        </Button>
        <ExpenseTable />
      </Container>
    </>
  );
};

export default Home;
