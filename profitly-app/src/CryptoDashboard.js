import React from "react";
import { Link, Redirect } from "react-router-dom";
export default function CryptoDashboard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "50px",
        fontSize: 18,
        fontWeight: "bold",
      }}
    >
      <h2>Will be available soon</h2>
      <Link to="/main">
        <p style={{ color: "blue" }}>{"<"} Return to stocks</p>
      </Link>
    </div>
  );
}
