import { Select } from "@chakra-ui/react";
import React from "react";
import "./styles/AccountNames.css";
export default function AccountNames({ handleChange }) {
  return (
    <div className="account-names-container">
      <div className="account-names-text">Account Type </div>
      <div className="account-names-dropdown">
        <Select onChange={handleChange}>
          <option value={"tfsa"}>TFSA</option>
          <option value={"rrsp"}>RRSP</option>
          <option value={"personal"}>PERSONAL</option>
          <option value={"crypto"}>CRYPTO</option>
        </Select>
      </div>
    </div>
  );
}
