import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, Redirect } from "react-router-dom";
import { useSavedSessionState } from "../redux/hooks/useSavedSessionState";

export default function Login() {
  const { loggedIn, setLoggedIn } = useSavedSessionState();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      const loginSuccessful = login(
        emailRef.current.value,
        passwordRef.current.value
      );
      if (loginSuccessful) {
        setLoggedIn("true");
      }
    } catch {
      setError("Sorry, we failed to log you in");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        {loggedIn === "true" ? <Redirect to="/main" /> : ""}
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button
              disabled={loading}
              onClick={handleSubmit}
              className="w-100"
              type="submit"
            >
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        New to Profitly?{" "}
        <Link style={{ color: "#0C5ED7" }} to="/">
          Sign Up Here
        </Link>
      </div>
    </>
  );
}
