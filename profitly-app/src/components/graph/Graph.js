import { React, useEffect, useState } from "react";
import Buttons from "../buttons/Buttons";
import Loading from "../loading/Loading";
import PrintGraph from "./PrintGraph";
import "./styles/graph.css";
export default function Graph({ accountName = "tfsa" }) {
  const [portfolioData, setPortfolioData] = useState({
    labels: [],
    datasets: [{}],
  });

  const [selectedButton, setSelectedButton] = useState("1m");

  const handleTimeButtonClick = (e) => {
    e.preventDefault();
    setSelectedButton(e.target.value);
  };

  //going to make an API call every time its loaded
  useEffect(() => {
    // default to 1m and tfsa

    //set to empty so loading happens when account name changes
    console.log("1");
    setPortfolioData({
      labels: [],
      datasets: [{}],
    });

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
          setPortfolioData({
            labels: data.ws_dates,
            datasets: [data.ws_dataset],
          });
        })
        .catch((error) => console.log(error));

    request();
  }, [accountName, selectedButton]);

  //TODO: so whats happening is that this return gets run first
  //meaning the data is presented with what it was before
  //then useEffect happens and then we get new data and it gets rendered again

  return (
    <>
      {/* {console.log(portfolioData)} */}
      <div className="graph-container">
        {portfolioData.labels.length === 0 ? (
          <div className="graph-display">
            <Loading />
          </div>
        ) : (
          <div>
            <PrintGraph
              labels={portfolioData.labels}
              datasets={portfolioData.datasets}
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
