import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";

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

  return (
    <>
      <Header />

      <Container>
        <h3>Home</h3>
      </Container>
    </>
  );
};

export default Home;
