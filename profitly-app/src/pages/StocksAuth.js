import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import React, { useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";
export default function StocksAuth() {
  //ENV VARS
  const qtrade_key = process.env.REACT_APP_QTRADE_API_KEY;
  const backend = process.env.REACT_APP_BACKEND_URL;

  const history = useHistory();

  //questrade login process
  let curURL = useLocation();
  curURL = curURL.search;
  let code;
  if (curURL.includes("code")) {
    code = curURL.match("code=.*$");
    code = code.toString().split("=")[1];
    console.log(code);
  }
  //-----------------------------------------
  useEffect(() => {
    if (code !== "") {
      fetch(`${backend}/api/stocks/login/${code}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .catch((error) => console.log(error));
    }
  }, [backend, code]);

  async function handleLogin() {
    try {
      history.push("/main");
    } catch {}
  }
  return (
    <>
      <VStack>
        <a
          href={`https://login.questrade.com/oauth2/authorize?client_id=${qtrade_key}&response_type=code&redirect_uri=https://auth-profitly-dev.web.app/stocksauth`}
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
