import { React, useState, useEffect } from "react";

import "./styles/Dashboard.css";

import Graph from "../graph/Graph";
import PortfolioPositions from "../positions/PortfolioPositions";
import Watchlist from "../watchlist/Watchlist";

import AccountNames from "../accountNames/AccountNames";
import { Button } from "@chakra-ui/react";

export default function Dashboard() {
  const [toggle, setToggle] = useState(false);
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
  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  return (
    <>
      <div className="container-graph">
        <Graph accountName={accountName} />
        {/* <Delayed>
          <div></div>
        </Delayed> */}
        <AccountNames handleChange={handleAccountNameChange} />
      </div>
      <div>
        <div className="wtch-pos-container">
          <Button onClick={handleToggle}>Show Positions</Button>
          {toggle ? (
            <PortfolioPositions accountName={accountName} />
          ) : (
            <div>Positions hidden</div>
          )}
          <Watchlist />
        </div>
      </div>
    </>
  );
}
