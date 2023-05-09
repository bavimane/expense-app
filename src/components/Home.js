import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import ExpenseTable from "./ExpenseTable";
import { Button } from "react-bootstrap";

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
