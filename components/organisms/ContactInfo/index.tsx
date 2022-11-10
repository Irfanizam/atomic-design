import React from "react";
import HeadingText from "../../atoms/HeadingText";
import TextContact from "../../atoms/TextContact";
import TopImage from "../../atoms/TopImage";
import HeaderBar from "../../molecules/HeaderBar";

interface Props {}

function ContactInfo(props: Props) {
  const {} = props;

  return (
    <>
      <HeadingText />
      <TopImage />
      <TextContact />
    </>
  );
}

export default ContactInfo;
