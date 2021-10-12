import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
export default function StocksAuth() {
  const history = useHistory();
  const qtrade_key = process.env.REACT_APP_QTRADE_API_KEY;

  useEffect(() => {
    fetch("/api/stocks/login")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  async function handleLogin() {
    try {
      history.push("/main");
    } catch {}
  }
  return (
    <>
      <VStack>
        <a
          href={`https://login.questrade.com/oauth2/authorize?client_id=${qtrade_key}&response_type=code&redirect_uri=https://localhost:3000/main`}
        >
          <Button>Questrade Login</Button>
        </a>
        {/* </a> */}
        <Button>WealthSimple Login</Button>
        <Button onClick={handleLogin}>Go to Stocks</Button>
      </VStack>
    </>
  );
}
