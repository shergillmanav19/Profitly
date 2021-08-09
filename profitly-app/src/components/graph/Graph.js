import { React, useEffect, useState } from "react";
import Buttons from "../buttons/Buttons";
import Loading from "../loading/Loading";
import PrintGraph from "./PrintGraph";
import "./styles/graph.css";
export default function Graph({ accountName = "tfsa" }) {
  const [portfolioData, setPortfolioData] = useState([]);

  const [selectedButton, setSelectedButton] = useState("1m");

  const handleTimeButtonClick = (e) => {
    e.preventDefault();
    setSelectedButton(e.target.value);
  };

  useEffect(() => {
    // default to 1m and tfsa
    //set to empty so loading happens when account name changes
    setPortfolioData([]);

    const request = async () =>
      await fetch(`/api/ws/getHistoricalData/${selectedButton}/${accountName}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((data) => {
          setPortfolioData(data.ws_dataset);
        })
        .catch((error) => console.log(error));

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
            <PrintGraph data={portfolioData} selectedButton={selectedButton} />
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
