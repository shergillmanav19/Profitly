import { React, useState } from "react";

import "./styles/Dashboard.css";

import Graph from "../graph/Graph";
import PortfolioPositions from "../positions/PortfolioPositions";
import Watchlist from "../watchlist/Watchlist";

import AccountNames from "../accountNames/AccountNames";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useSavedSessionState } from "../../redux/hooks/useSavedSessionState";

export default function Dashboard() {
  const [accountName, setAccountName] = useState("tfsa");
  const { loggedIn } = useSavedSessionState();

  const handleAccountNameChange = (e) => {
    e.preventDefault();
    setAccountName(e.target.value);
  };

  if (loggedIn === "false") {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div className="container-graph">
        <Graph accountName={accountName} />
        <AccountNames handleChange={handleAccountNameChange} />
      </div>
      <div>
        <div className="wtch-pos-container">
          <PortfolioPositions accountName={accountName} />
          <Watchlist />
        </div>
      </div>
    </>
  );
}
