import React, { useState } from "react";

import "./styles/LandingPage.css";

import { useHistory } from "react-router-dom";

import Dashboard from "../components/dashboard/Dashboard";
import Navbar from "../components/navbar/Navbar";
import { Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function LandingPage() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      setError("");
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Navbar handleLogout={handleLogout} />
      {error && <Alert variant="danger">{error}</Alert>}
      <Dashboard />
    </>
  );
}
