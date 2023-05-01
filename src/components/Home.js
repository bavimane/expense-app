import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
      <h3>Home</h3>
    </>
  );
};

export default Home;
