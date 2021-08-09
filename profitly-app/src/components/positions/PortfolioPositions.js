import { Flex } from "@chakra-ui/layout";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
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
