import { React, useState, useEffect } from "react";

import "./styles/Dashboard.css";

import Graph from "../graph/Graph";
import PortfolioPositions from "../positions/PortfolioPositions";
import Watchlist from "../watchlist/Watchlist";

import AccountNames from "../accountNames/AccountNames";

export default function Dashboard() {
  const Delayed = ({ children, waitBeforeShow = 1000 }) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
      console.log(waitBeforeShow);
      setTimeout(() => {
        setIsShown(true);
      }, waitBeforeShow);
    }, [waitBeforeShow]);

    return isShown ? children : null;
  };

  const [accountName, setAccountName] = useState("tfsa");

  const handleAccountNameChange = (e) => {
    e.preventDefault();
    setAccountName(e.target.value);
  };

  return (
    <>
      <div className="container-graph">
        <Graph accountName={accountName} />
        <AccountNames handleChange={handleAccountNameChange} />
      </div>
      <div>
        <div className="wtch-pos-container">
          <Delayed>
            <PortfolioPositions accountName={accountName} />
            <Watchlist />
          </Delayed>
        </div>
      </div>
    </>
  );
}
