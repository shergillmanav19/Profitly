import { React, useEffect, useState } from "react";
import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
export default function Buttons(props) {
  // function handleHover() {
  //   setColor("black");
  // }

  return (
    <>
      <div className="button-container">
        <Flex justifyContent="center" bg="">
          <ButtonGroup spacing="4" size="sm" _hover={false}>
            <Button
              onClick={props.handleClick}
              value="1d"
              bg={props.selectedButton === "1d" ? "black" : ""}
              color={props.selectedButton === "1d" ? "white" : "black"}
              borderRadius="100%"
              _hover={false}
            >
              1d
            </Button>
            <Button
              onClick={props.handleClick}
              value="1w"
              bg={props.selectedButton === "1w" ? "black" : ""}
              color={props.selectedButton === "1w" ? "white" : "black"}
              borderRadius="100%"
              _hover={false}
            >
              1w
            </Button>
            <Button
              onClick={props.handleClick}
              value="1m"
              bg={props.selectedButton === "1m" ? "black" : ""}
              color={props.selectedButton === "1m" ? "white" : "black"}
              borderRadius="100%"
              _hover={false}
            >
              1m
            </Button>
            <Button
              onClick={props.handleClick}
              value="3m"
              bg={props.selectedButton === "3m" ? "black" : ""}
              color={props.selectedButton === "3m" ? "white" : "black"}
              borderRadius="100%"
              _hover={false}
            >
              3m
            </Button>
            <Button
              onClick={props.handleClick}
              value="1y"
              bg={props.selectedButton === "1y" ? "black" : ""}
              color={props.selectedButton === "1y" ? "white" : "black"}
              borderRadius="100%"
              _hover={false}
            >
              1y
            </Button>
            <Button
              onClick={props.handleClick}
              value="all"
              bg={props.selectedButton === "all" ? "black" : ""}
              color={props.selectedButton === "all" ? "white" : "black"}
              borderRadius="100%"
              _hover={false}
            >
              All
            </Button>
          </ButtonGroup>
        </Flex>
      </div>
    </>
  );
}
