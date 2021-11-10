import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
export default function Unauthorized() {
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "25px",
      }}
    >
      {error}
      <h2>Sorry you are unauthorized for this application!</h2>
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}
