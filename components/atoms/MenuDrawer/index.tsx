import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";

interface Props {}

function MenuDrawer(props: Props) {
  const {} = props;

  return (
    <HamburgerIcon w={"48px"} h={"41px"} pos="absolute" right={10} top={5} />
  );
}

export default MenuDrawer;
