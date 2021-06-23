import React, { useEffect } from "react";

import "./styles/LandingPage.css";

import { Link, Redirect } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

import { useSavedSessionState } from "../redux/hooks/useSavedSessionState";
import Dashboard from "../components/dashboard/Dashboard";

export default function LandingPage() {
  const { loggedIn } = useSavedSessionState();

  return (
    <>
      {loggedIn === "true" ? "" : <Redirect to="/login" />}
      <Sidebar />
      <Dashboard />
    </>
  );
}
