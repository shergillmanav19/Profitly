import React, { useEffect } from "react";

import "./styles/LandingPage.css";

import { Link, Redirect } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

import { useSavedSessionState } from "../redux/hooks/useSavedSessionState";
import Dashboard from "../components/dashboard/Dashboard";
import Navbar from "../components/navbar/Navbar";

export default function LandingPage() {
  const { loggedIn, setLoggedIn } = useSavedSessionState();

  const handleLogout = () => {
    setLoggedIn("false");
  };

  if (loggedIn === "false") {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Navbar handleLogout={handleLogout} />
      <Dashboard />
    </>
  );
}
