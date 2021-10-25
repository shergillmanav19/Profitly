import React, { useRef, useState } from "react";
import "./styles/Otp.css";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useHistory, useLocation, Redirect } from "react-router-dom";

export default function Otp() {
  //ENV VAR
  const backend = process.env.REACT_APP_BACKEND_URL;
  // -----------------------------------------------
  const otpRef = useRef();
  const history = useHistory();
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const otp = new URLSearchParams({
      otp: otpRef.current.value,
    });
    fetch(`${backend}/api/stocks/ws-otp`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        // "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: otp, // body data type must match "Content-Type" header
    }).then((response) => {
      if (response.status === 200) {
        // console.log(response);
        history.push("/main");
      } else {
        setError("The code you entered is invalid!");
      }
    });

    // code not invalid then only push main
  }
  function getPos() {
    fetch(`${backend}/api/ws/getWatchlist`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "500px" }}>
        {error && <Alert variant="danger">{error}</Alert>}

        <Card>
          <Card.Body>
            <p className="mb-4 h2">
              Check your text messages for a 6-digit code
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="otp">
                <Form.Label className="mb-4">
                  Enter the code we sent to your phone number below.
                </Form.Label>
                <Form.Control
                  className="mb-4"
                  type="number"
                  ref={otpRef}
                  required
                />
              </Form.Group>
              <Button
                className="w-100 text-center mt-2"
                style={{ backgroundColor: "green", border: "none" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Button onClick={getPos}>Get pos</Button>
      </div>
    </Container>
  );
}
