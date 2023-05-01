import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import { registerAuthentication } from "../actions/authenticatonActions";

const UserRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parseValue = user ? JSON.parse(user) : {};
    if (parseValue.id) {
      navigate("/home");
    }
  }, [navigate]);

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
