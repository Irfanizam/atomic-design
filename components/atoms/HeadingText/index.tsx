import { Button, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { enGB, esSP } from "../../../translation.js";

export default function HeadingText() {
  return (
    <>
      <Heading
        fontSize={{ base: "2rem", md: "3rem", lg: "4rem" }}
        position="absolute"
        alignSelf={"center"}
        // left={"250px"}
        top={"165px"}
      >
        <Text as={"span"} fontWeight="900">
          LA PERA
        </Text>
        <br />
        <Text as={"span"} letterSpacing={10}>
          r i s t o r a n t e
        </Text>
      </Heading>
    </>
  );
}
