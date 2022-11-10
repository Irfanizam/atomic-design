import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/react";
import React from "react";

interface Props {}

function BottomImage(props: Props) {
  const {} = props;

  return (
    <Flex bg="#D1FEFF" letterSpacing={5} justifyContent="center">
      <Image
        alt={"Bottom Plate Image"}
        width={{ base: "441.37px", md: "550px", lg: "848px" }}
        height={{ base: "442.51px", md: "550px", lg: "852px" }}
        src={"images/bottom-plate.png"}
      />
    </Flex>
  );
}

export default BottomImage;
