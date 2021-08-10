import { Button } from "@chakra-ui/button";
import React, { useState } from "react";
import "./styles/Navbar.css";
export default function Navbar({ handleLogout }) {
  const [isActive, setActive] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setActive(e.target.value);
  };
  return (
    <>
      <div className="app-navbar-container">
        <div className="nav-buttons">
          <Button
            value="stocks"
            bg={isActive === "stocks" ? "#5DA271" : "black"}
            onClick={handleClick}
          >
            Stocks
          </Button>
          <Button
            value="crypto"
            bg={isActive === "crypto" ? "#5DA271" : "black"}
            onClick={handleClick}
          >
            Crypto
          </Button>
        </div>
        <div className="nav-greeting">Hello, Stranger</div>
        <div className="nav-logout">
          <Button bg="black" onClick={handleLogout}>
            Logout
          </Button>{" "}
        </div>
      </div>
      <div className="dummy-nav-container"></div>
    </>
  );
}
