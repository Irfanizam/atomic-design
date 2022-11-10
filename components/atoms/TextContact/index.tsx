import { Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

function TextContact(props: Props) {
  const {} = props;

  return (
    <Text fontSize={{ base: "16px", lg: "34px" }}>
      123 SUFFOLK BLVD. NEW YORK, NEW YORK <br />
      +212 364 9089
    </Text>
  );
}

export default TextContact;
