import { Flex } from "@chakra-ui/layout";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import Card from "../card/Card";
import Loading from "../loading/Loading";
import "./styles/PortfolioPositions.css";
import { Button } from "@chakra-ui/react";
function calcAllTimeReturn(moneyNow, moneyIPutIn) {
  return (((moneyNow - moneyIPutIn) / moneyIPutIn) * 100).toFixed(2);
}

export default function PortfolioPositions({ accountName = "tfsa" }) {
  const [WS_positionsData, set_WS_PositionsData] = useState([]);
  const [QT_positionsData, set_QT_PositionsData] = useState([]);
  const [WS_netDeposit, set_WS_netDeposit] = useState();
  const [QT_netDeposit, set_QT_netDeposit] = useState([]);
  const [activePortfolioPositions, setactivePortfolioPositions] =
    useState("ws");

  const handleClick = (e) => {
    setactivePortfolioPositions(e.target.value);
  };

  useEffect(() => {
    set_WS_PositionsData([]);
    //ENV VAR
    const backend = process.env.REACT_APP_BACKEND_URL;
    fetch(`${backend}/api/stocks/getPositions/${accountName}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        set_WS_PositionsData(data.ws_positions);
        set_QT_PositionsData(data.qt_positions);
        set_WS_netDeposit(Number(data.ws_netDeposit).toFixed(0));
        set_QT_netDeposit(Number(data.qt_netDeposit).toFixed(0));
      })
      .catch((error) => console.log(error));
  }, [accountName]);

  return (
    <>
      <div className="positions-container">
        <div className="positions">
          {WS_positionsData.length === 0 || QT_positionsData.length === 0 ? (
            <Loading />
          ) : (
            <>
              <Box padding="4px">
                <Button
                  value="ws"
                  color="white"
                  bg={
                    activePortfolioPositions.includes("ws")
                      ? "#5DA271"
                      : "black"
                  }
                  onClick={handleClick}
                >
                  WS Trade Positions
                </Button>
                {"  "}
                <Button
                  value="qt"
                  color="white"
                  bg={
                    activePortfolioPositions.includes("qt")
                      ? "#5DA271"
                      : "black"
                  }
                  onClick={handleClick}
                >
                  Questrade Positions
                </Button>
              </Box>
              <Flex flexDirection="column">
                <Box padding="4px">
                  <Box
                    // bg="white"
                    color="white"
                    marginTop="0px"
                    // position="absolute"
                    borderRadius="4px"
                    width="50.5%"
                    padding="15px 10px"
                    bg="orange"
                  >
                    <Text fontSize="md" fontWeight="bold">
                      Initial Deposit:{" "}
                      {activePortfolioPositions.includes("ws")
                        ? WS_netDeposit
                        : QT_netDeposit}{" "}
                      {activePortfolioPositions.includes("ws") ? 60 : 10}
                      CAD
                    </Text>
                  </Box>
                </Box>
                <Box padding="4px">
                  <Box
                    bg="white"
                    color="black"
                    marginTop="0px"
                    // position="absolute"
                    borderRadius="4px"
                    width="95%"
                    padding="15px 10px"
                  >
                    {" "}
                    <HStack>
                      <Box width="33.33%">
                        <VStack alignItems="flex-start">
                          <Text fontSize="md" fontWeight="bold">
                            Name
                          </Text>
                        </VStack>
                      </Box>
                      <Box width="33.33%">
                        <VStack alignItems="flex-end">
                          <Text fontSize="md" fontWeight="bold">
                            Today's Value
                          </Text>
                        </VStack>
                      </Box>
                      <Box width="33.33%">
                        <VStack alignItems="flex-end">
                          <Text fontSize="md" fontWeight="bold">
                            Market Value
                          </Text>
                        </VStack>
                      </Box>
                      <Box width="33.33%" alignItems="flex-end">
                        <VStack alignItems="flex-end">
                          <Text fontSize="md" fontWeight="bold">
                            All Time Return (%)
                          </Text>
                        </VStack>
                      </Box>{" "}
                    </HStack>
                  </Box>
                  {activePortfolioPositions.includes("ws")
                    ? WS_positionsData.map((position) => (
                        <Card
                          symbol={position.stock.symbol}
                          name={position.stock.name}
                          price={position.quote.amount}
                          key={position.stock.symbol}
                          totalWidth={"95%"}
                          sectionWidth={"33.33%"}
                          marketValue={
                            position.todays_earnings_baseline_value.amount
                          }
                          currency={
                            position.todays_earnings_baseline_value.currency
                          }
                          //allTimeReturn = (Market Value - Money I Invested)/(Money I Invested) * 100%
                          allTimeReturn={calcAllTimeReturn(
                            position.todays_earnings_baseline_value.amount,
                            position.market_book_value.amount
                          )}
                        />
                      ))
                    : QT_positionsData.map((position) => (
                        <Card
                          symbol={position.symbol}
                          name={""}
                          price={position.currentPrice}
                          key={position.symbolId}
                          totalWidth={"95%"}
                          sectionWidth={"33.33%"}
                          marketValue={position.currentMarketValue}
                          currency={"USD"}
                          //allTimeReturn = (Market Value - Money I Invested)/(Money I Invested) * 100%
                          allTimeReturn={calcAllTimeReturn(
                            position.currentMarketValue,
                            position.totalCost
                          )}
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
