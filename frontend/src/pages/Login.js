import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./styles/LoginPage.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      // history.push("/main");
      history.push("/stocksauth");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  if (currentUser) {
    // return <Redirect to="/main" />;
    return <Redirect to="/stocksauth" />;
  }

  return (
    <div className="card-container">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <div style={{ marginTop: "10px" }}>
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account?{" "}
        <Link style={{ color: "#0C5ED7" }} to="/">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
