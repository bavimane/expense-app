import { useState, useEffect } from "react";
import { registerAuthentication } from "../actions/authenticatonActions";
import { useNavigate } from "react-router-dom";

const UserRegister = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [navigate, token]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const registerFormData = {
      name,
      email,
      password,
    };
    registerAuthentication(registerFormData, navigate);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>User Register</h1>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />{" "}
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <label htmlFor="passwd">Password : </label>
        <input
          type="text"
          id="passwd"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserRegister;
