import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginAuthentication } from "../actions/authenticatonActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [navigate, token]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginFormData = {
      email,
      password,
    };
    loginAuthentication(loginFormData, navigate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>User Login</h1>
      <label>Email</label>
      <input type="text" value={email} onChange={handleEmailChange} />
      <br />
      <label>Password</label>
      <input
        type="text"
        value={password}
        onChange={handlePasswordChange}
      />{" "}
      <br />
      <input type="submit" />
    </form>
  );
};

export default Login;
