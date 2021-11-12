import { Button } from "@chakra-ui/button";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./styles/Navbar.css";
export default function Navbar({ buttons, handleLogout }) {
  const history = useHistory();
  let curURL = useLocation();

  const [isActive, setActive] = useState(curURL.pathname);
  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/${e.target.value}`);
    setActive(e.target.value);
  };
  return (
    <>
      <div className="app-navbar-container">
        {buttons === "stocksauth" ? (
          <div style={{ width: "25%" }}>
            <Button
              value="stocksauth"
              bg={isActive.includes("stocks") ? "#5DA271" : "black"}
              onClick={handleClick}
            >
              {" "}
              Stocks Login{" "}
            </Button>
          </div>
        ) : (
          <div className="nav-buttons">
            <Button
              value="main"
              bg={isActive.includes("main") ? "#5DA271" : "black"}
              onClick={handleClick}
            >
              Stocks
            </Button>
            <Button
              value="crypto"
              bg={isActive.includes("crypto") ? "#5DA271" : "black"}
              onClick={handleClick}
            >
              Crypto
            </Button>
            <Button
              value="stocksauth"
              bg={isActive.includes("stocks") ? "#5DA271" : "black"}
              onClick={handleClick}
            >
              Stocks Login
            </Button>
          </div>
        )}
        <div className="nav-greeting">Hello Investor</div>
        <div className="nav-logout">
          <Button bg="black" onClick={handleLogout}>
            Logout
          </Button>{" "}
        </div>
      </div>
    </>
  );
}
