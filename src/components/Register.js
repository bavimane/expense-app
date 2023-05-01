import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";

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
    <div className="register-section">
      <Form onSubmit={handleSubmit}>
        <h1>User Register</h1>

        <Form.Group className="mb-3" controlId="name.id">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter your name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email.id">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password.id">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </Form.Group>
        <p>
          Already have an account? Click <Link to="/login">here</Link>
        </p>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default UserRegister;
