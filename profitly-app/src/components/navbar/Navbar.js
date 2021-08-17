import { Button } from "@chakra-ui/button";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles/Navbar.css";
export default function Navbar({ handleLogout }) {
  const [isActive, setActive] = useState("main");
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/${e.target.value}`);
    setActive(e.target.value);
  };
  return (
    <>
      <div className="app-navbar-container">
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
        </div>
        <div className="nav-greeting">Hello Investor</div>
        <div className="nav-logout">
          <Button bg="black" onClick={handleLogout}>
            Logout
          </Button>{" "}
        </div>
      </div>
      {/* <div className="dummy-nav-container"></div> */}
    </>
  );
}
