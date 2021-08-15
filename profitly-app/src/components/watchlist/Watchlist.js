import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "../card/Card";
import "./styles/Watchlist.css";
import Loading from "../loading/Loading";
import { Flex, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
function Watchlist() {
  const [watchlistData, setWatchlistData] = useState([]);

  useEffect(() => {
    fetch("/api/ws/getWatchlist")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => setWatchlistData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="watchlist-container">
        {watchlistData.length === 0 ? (
          <Loading />
        ) : (
          <>
            <Box padding="4px">
              <Button>Watchlist</Button>
            </Box>
            <Flex direction="column">
              <Box padding="4px">
                {watchlistData.ws_watchlist.map((stock) => (
                  <Card
                    symbol={stock.stock.symbol}
                    name={stock.stock.name}
                    price={stock.quote.amount}
                    key={stock.stock.symbol}
                    totalWidth={"100%"}
                    sectionWidth={"50%"}
                  />
                ))}
              </Box>
            </Flex>
          </>
        )}
      </div>
    </>
  );
}

export default Watchlist;
