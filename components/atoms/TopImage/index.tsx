import { Image } from "@chakra-ui/image";
import React from "react";

interface Props {}

function TopImage(props: Props) {
  const {} = props;

  return (
    <>
      <Image
        alt={"Hero Background Image"}
        objectFit={"cover"}
        src={"images/hero-background.png"}
      />
    </>
  );
}

export default TopImage;
