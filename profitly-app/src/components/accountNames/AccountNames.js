import { Select } from "@chakra-ui/react";
import React from "react";

export default function AccountNames({ handleChange }) {
  return (
    <div>
      <Select onChange={handleChange}>
        <option value={"tfsa"}>TFSA</option>
        <option value={"rrsp"}>RRSP</option>
        <option value={"personal"}>PERSONAL</option>
        <option value={"crypto"}>CRYPTO</option>
      </Select>
    </div>
  );
}
