import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  const handleClick = () => {
    localStorage.removeItem("token");
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
