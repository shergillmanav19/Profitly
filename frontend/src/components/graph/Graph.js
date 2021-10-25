import { React, useEffect, useState } from "react";
import Buttons from "../buttons/Buttons";
import Loading from "../loading/Loading";
import PrintGraph from "./PrintGraph";
import "./styles/graph.css";
export default function Graph({ accountName = "tfsa" }) {
  const [portfolioData, setPortfolioData] = useState([]);
  const [netDeposit, setNetDeposit] = useState([]);
  const [selectedButton, setSelectedButton] = useState("1m");

  const handleTimeButtonClick = (e) => {
    e.preventDefault();
    setSelectedButton(e.target.value);
  };

  useEffect(() => {
    // default to 1m and tfsa
    //set to empty so loading happens when account name changes
    setPortfolioData([]);
    //ENV VAR
    const backend = process.env.REACT_APP_BACKEND_URL;
    // -----------------------------------------------
    const request = async () => {
      await fetch(
        `${backend}/api/stocks/getBalance/${selectedButton}/${accountName}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((data) => {
          setPortfolioData(data.data);
          setNetDeposit(data.netDeposit);
          console.log(data);
        })
        .catch((error) => console.log(error));
    };
    request();
  }, [accountName, selectedButton]);

  return (
    <>
      <div className="graph-container">
        {portfolioData.length === 0 ? (
          <div className="graph-display">
            <Loading />
          </div>
        ) : (
          <div>
            <PrintGraph
              data={portfolioData}
              netDeposit={netDeposit}
              selectedButton={selectedButton}
            />
          </div>
        )}
      </div>
      <Buttons
        handleClick={handleTimeButtonClick}
        selectedButton={selectedButton}
      />
    </>
  );
}
