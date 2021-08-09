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
            <Text>USD</Text>
          </VStack>
        </Box>
        {sectionWidth !== "33.33%" ? (
          <></>
        ) : (
          <>
            <Box width={sectionWidth}>
              <VStack alignItems="flex-end">
                <Text>Hey</Text>
              </VStack>
            </Box>
            <Box width={sectionWidth}>
              <VStack alignItems="flex-end">
                <Text>Hey</Text>
              </VStack>
            </Box>
          </>
        )}
      </HStack>
    </Box>
  );
}
