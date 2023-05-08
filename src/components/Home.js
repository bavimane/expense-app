import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import ExpenseTable from "./ExpenseTable";

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
        <button onClick={handleAddExpense}>Add Expense</button>
        <ExpenseTable />
      </Container>
    </>
  );
};

export default Home;
