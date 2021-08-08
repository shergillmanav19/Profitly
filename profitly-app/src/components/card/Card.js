import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

export default function Card({
  symbol,
  name,
  price,
  totalWidth,
  sectionWidth,
}) {
  return (
    <Box
      bg="white"
      color="black"
      marginTop="2px"
      borderRadius="4px"
      width={totalWidth}
      padding="15px 0"
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
          <VStack>
            <Text>{price}</Text>
            <Text>USD</Text>
          </VStack>
        </Box>
        {sectionWidth !== "33.33%" ? (
          <></>
        ) : (
          <>
            <Box width={sectionWidth}></Box>
            <Box width={sectionWidth}></Box>{" "}
          </>
        )}
      </HStack>
    </Box>
  );
}
