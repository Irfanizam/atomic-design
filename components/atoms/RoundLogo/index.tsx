import { Image } from "@chakra-ui/image";
import React from "react";

interface Props {}

function RoundLogo(props: Props) {
  const {} = props;

  return (
    <>
      <Image
        alt={"Logo Image"}
        src={"images/quest-Q.png"}
        w="56px"
        h="56px"
        pos="absolute"
        top="36px"
        left="36px"
      />
    </>
  );
}

export default RoundLogo;
