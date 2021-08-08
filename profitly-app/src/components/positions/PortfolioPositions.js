import { Flex, Box } from "@chakra-ui/layout";
import { React, useEffect, useState } from "react";
import Card from "../card/Card";
import Loading from "../loading/Loading";
import "./styles/PortfolioPositions.css";
export default function PortfolioPositions({ accountName = "tfsa" }) {
  const [positionsData, setPositionsData] = useState([]);

  useEffect(() => {
    setPositionsData([]);
    fetch(`/api/ws/getPositions/${accountName}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => setPositionsData(data))
      .catch((error) => console.log(error));
  }, [accountName]);

  return (
    <>
      <div className="positions-container">
        <div className="positions">
          {positionsData.length === 0 ? (
            <Loading />
          ) : (
            <>
              Your Portfolio Positions
              <Flex flexDirection="column">
                <Box padding="4px">
                  {positionsData.ws_positions.map((position) => (
                    <Card
                      symbol={position.stock.symbol}
                      name={position.stock.name}
                      price={position.quote.amount}
                      key={position.stock.symbol}
                      totalWidth={"95%"}
                      sectionWidth={"33.33%"}
                    />
                  ))}
                </Box>
              </Flex>
            </>
          )}
        </div>
      </div>
    </>
  );
}
