import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    const parseValue = user ? JSON.parse(user) : {};
    if (!parseValue.id) {
      navigate("/login");
    }
  }, [navigate, user]);

  const handleClick = () => {
    localStorage.removeItem("user");
    alert("successfully Logged Out");
    navigate("/login");
  };

  return (
    <div>
      <h3>Home</h3>
      <button onClick={handleClick}>logout</button>
    </div>
  );
};

export default Home;
