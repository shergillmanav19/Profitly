import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
export default function Card({
  symbol,
  name,
  price,
  totalWidth,
  sectionWidth,
  marketValue,
  currency,
  allTimeReturn,
}) {
  return (
    <Box
      bg="white"
      color="black"
      marginTop="2px"
      borderRadius="4px"
      width={totalWidth}
      padding="15px 10px"
    >
      <HStack>
        <Box width={sectionWidth}>
          <VStack alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              {symbol}
            </Text>
            <Text fontSize="sm" color="grey">
              {name}
            </Text>
          </VStack>
        </Box>
        <Box width={sectionWidth}>
          <VStack alignItems="flex-end">
            <Text>{price}</Text>
            <Text>{currency}</Text>
          </VStack>
        </Box>
        {sectionWidth !== "33.33%" ? (
          <></>
        ) : (
          <>
            <Box width={sectionWidth}>
              <VStack alignItems="flex-end">
                <Text>{marketValue}</Text>
                <Text>{currency}</Text>
              </VStack>
            </Box>
            <Box width={sectionWidth}>
              <VStack alignItems="flex-end">
                <Text>
                  {allTimeReturn > 0 ? (
                    <BsFillCaretUpFill color="green" />
                  ) : (
                    <BsFillCaretDownFill color="red" />
                  )}
                </Text>
                <Text>{allTimeReturn}%</Text>
              </VStack>
            </Box>
          </>
        )}
      </HStack>
    </Box>
  );
}
