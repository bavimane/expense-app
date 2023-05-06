import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Expense from "./Expense";
import Header from "./Header";

const Home = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    const parseValue = user ? JSON.parse(user) : {};
    if (!parseValue.id) {
      navigate("/login");
    }
  }, [navigate, user]);

  const handleExpense = () => {};

  return (
    <>
      <Header />

      <Container>
        <Expense />
        <button onClick={handleExpense}>Add</button>
      </Container>
    </>
  );
};

export default Home;
