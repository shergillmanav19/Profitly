import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
export default function StocksAuth() {
  //ENV VARS
  const qtrade_key = process.env.REACT_APP_QTRADE_API_KEY;
  const backend = process.env.REACT_APP_BACKEND_URL;

  const history = useHistory();

  //questrade login process
  let curURL = useLocation();
  curURL = curURL.hash;
  let qt_data = "";

  if (curURL.includes("#")) {
    const hash_part = curURL.split("#")[1];
    const get_data = hash_part.split("&");

    const access_token = get_data[0].split("=")[1];
    const refresh_token = get_data[1].split("=")[1];
    const token_type = "Bearer";
    const expires_in = get_data[3].split("=")[1];
    let api_server = get_data[4].split("=")[1].replace("\\", "");
    // the '/' at the end isnt needed
    api_server = api_server.substring(0, api_server.length - 1);

    qt_data = new URLSearchParams({
      access_token: access_token,
      refresh_token: refresh_token,
      token_type: token_type,
      expires_in: expires_in,
      api_server: api_server,
    });
  }
  //-----------------------------------------
  const [error, setError] = useState("");
  const { logout } = useAuth();
  useEffect(() => {
    if (qt_data !== "") {
      fetch(`${backend}/api/stocks/qt-login`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          // "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: qt_data, // body data type must match "Content-Type" header
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  }, [backend, qt_data]);
  //make a session state that updates so that the app knows if user is logged in for ws and qt
  async function handleLogin() {
    try {
      history.push("/main");
    } catch {}
  }
  async function handleLogout() {
    try {
      setError("");
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  function handleWSLogin() {
    fetch(`${backend}/api/stocks/ws-login`)
      .then((response) => {
        if (!response.data === "OTP") {
          setError(response.data);
        } else {
          history.push("/enter-otp");
        }
      })
      .catch((error) => setError(error));
    console.log("Hello from WS");
  }
  //using this function to test out qt login
  function handleQTLogin() {
    fetch(`${backend}/api/stocks/qt-login`).then((response) =>
      console.log(response.data)
    );
    console.log("Hello from QT");
  }
  return (
    <>
      <VStack>
        {error}
        <Navbar handleLogout={handleLogout} />
        <a
          href={`https://login.questrade.com/oauth2/authorize?client_id=${qtrade_key}&response_type=token&redirect_uri=https://auth-profitly-dev.web.app/stocksauth`}
        >
          <Button>Questrade Login</Button>
        </a>
        <Button onClick={handleQTLogin}>New QT Login</Button>
        <Button onClick={handleWSLogin}>WealthSimple Login</Button>
        <Button onClick={handleLogin}> Go to Stocks</Button>
      </VStack>
    </>
  );
}
