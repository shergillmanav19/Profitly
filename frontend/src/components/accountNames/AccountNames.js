import { Select, Text, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import "./styles/AccountNames.css";
export default function AccountNames({ handleChange }) {
  return (
    <div className="account-names-container">
      <VStack width="100%">
        <HStack width="50%" justifyContent="center">
          <Text fontWeight="bold" width="33%">
            WS Trade Account Type
          </Text>
          <Select onChange={handleChange} width="30%">
            <option value={"tfsa"}>TFSA</option>
            <option value={"rrsp"}>RRSP</option>
            <option value={"personal"}>PERSONAL</option>
          </Select>
        </HStack>
        <HStack width="50%" justifyContent="center">
          <Text fontWeight="bold" width="33%">
            Questrade Account Type{" "}
          </Text>
          <Select width="30%">
            <option value={"tfsa"}>TFSA</option>
          </Select>
        </HStack>
      </VStack>
    </div>
  );
}
