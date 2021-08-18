import { Select, Flex } from "@chakra-ui/react";
import React from "react";
import "./styles/AccountNames.css";
export default function AccountNames({ handleChange }) {
  return (
    <div className="account-names-container">
      <Flex direction="column">
        <Flex width="100%">
          <div className="account-names-text">WS Trade Account Type </div>
          <div className="account-names-dropdown">
            <Select onChange={handleChange}>
              <option value={"tfsa"}>TFSA</option>
              <option value={"rrsp"}>RRSP</option>
              <option value={"personal"}>PERSONAL</option>
              <option value={"crypto"}>CRYPTO</option>
            </Select>
          </div>
        </Flex>
        <br />
        <Flex>
          <div className="account-names-text">Questrade Account Type </div>
          <div className="account-names-dropdown">
            <Select>
              <option value={"tfsa"}>TFSA</option>
            </Select>
          </div>
        </Flex>
      </Flex>
    </div>
  );
}
