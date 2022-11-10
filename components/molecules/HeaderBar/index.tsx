import React from "react";
import MenuDrawer from "../../atoms/MenuDrawer";
import RoundLogo from "../../atoms/RoundLogo";

interface Props {}

function HeaderBar(props: Props) {
  const {} = props;

  return (
    <>
      <RoundLogo />
      <MenuDrawer />
    </>
  );
}

export default HeaderBar;
