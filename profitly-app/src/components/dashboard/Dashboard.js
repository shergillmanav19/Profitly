//TODO: COMPONENTS SHOULD RENDER THEMSELVES NOT TOGETHER IN ONE FILES????? DONE DONE
//TODO: MULTIPLE RENDERS HAPPENING WHEN I CLIKC A BUTTON DONE DONE
import { React, useState } from "react";

import "./styles/Dashboard.css";

import Graph from "../graph/Graph";
import PortfolioPositions from "../positions/PortfolioPositions";
import Watchlist from "../watchlist/Watchlist";

import AccountNames from "../accountNames/AccountNames";

export default function Dashboard() {
  // const [wsLoggedIn, setWsLoggedIn] = useState("Failed");

  // const [selectedButton, setSelectedButton] = useState("1m");
  const [accountName, setAccountName] = useState("tfsa");

  // useEffect(() => {
  //   setLoading(true);
  //refresh page because login didnt happen (could send an alert or something)
  // TODO: for now i have to bear with double login
  // const loginRequest = async () =>
  //   await fetch("/api/ws/login")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Something went wrong");
  //       }
  //     })
  //     .then((data) => setWsLoggedIn(data.status))
  //     .catch((error) => console.log(error));
  // loginRequest();

  // setLoading(false);
  // }, [accountName]);

  // //Handles clicks for 1d,1w,1m....
  // const handleTimeButtonClick = (e) => {
  //   e.preventDefault();
  //   setSelectedButton(e.target.value);
  // };

  //TODO: should only updates buttons/state not make calls DONE DONE
  //refer to above function

  //Handles clicks for which account type TFSA, RRSP, PERSONAL, or CRYPTO
  const handleAccountNameChange = (e) => {
    e.preventDefault();
    setAccountName(e.target.value);
  };
  return (
    <>
      <div className="container-graph">
        <Graph accountName={accountName} />
        <AccountNames handleChange={handleAccountNameChange} />
        {/* <Buttons
          handleClick={handleTimeButtonClick}
          selectedButton={selectedButton}
        /> */}
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
