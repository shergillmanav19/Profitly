import { React, useState, useEffect } from "react";

import "./styles/Dashboard.css";

import Graph from "../graph/Graph";
import PortfolioPositions from "../positions/PortfolioPositions";
import Watchlist from "../watchlist/Watchlist";

import AccountNames from "../accountNames/AccountNames";
import { Button } from "@chakra-ui/react";

export default function Dashboard() {
  const [posToggle, setPosToggle] = useState(false);
  const [watchlistToggle, setWatchlistToggle] = useState(false);
  //default is TFSA
  const [accountName, setAccountName] = useState("tfsa");

  const handleAccountNameChange = (e) => {
    e.preventDefault();
    setAccountName(e.target.value);
  };
  const handlePosToggle = (e) => {
    e.preventDefault();
    setPosToggle(!posToggle);
  };
  const handleWatchlistToggle = (e) => {
    e.preventDefault();
    setWatchlistToggle(!watchlistToggle);
  };
  return (
    <>
      <div className="container-graph">
        <Graph accountName={accountName} />
        <AccountNames handleChange={handleAccountNameChange} />
      </div>
      <div>
        <div className="bt-container">
          <Button onClick={handlePosToggle}>
            {posToggle ? "Hide" : "Show"} Positions
          </Button>
          <Button onClick={handleWatchlistToggle}>
            {watchlistToggle ? "Hide" : "Show"} Watchlist
          </Button>
        </div>
        <div className="wtch-pos-container">
          {posToggle ? (
            <PortfolioPositions accountName={accountName} />
          ) : (
            <div></div>
          )}
          {watchlistToggle ? <Watchlist /> : <div></div>}
        </div>
      </div>
    </>
  );
}
