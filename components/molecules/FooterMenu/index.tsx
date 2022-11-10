import { Button, Link, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { enGB, esSP } from "../../../translation";

function FooterMenu() {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en-GB" ? enGB : esSP;

  const handleLanguageToggle = () => {
    switch (locale) {
      case "en-GB":
        router.push("/", "/", { locale: "es-SP" });
        break;
      case "es-SP":
        router.push("/", "/", { locale: "en-GB" });
        break;
    }
  };
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      paddingBottom={"100px"}
      fontWeight="700"
      spacing={{ base: "34px", lg: "105px" }}
      letterSpacing={5}
      justify={"center"}
    >
      <p onClick={handleLanguageToggle}>{locale}</p>

      <Link
        href="/menu"
        fontSize={{ base: "16px", lg: "26px" }}
        color={"#444444"}
      >
        {t.menu}
      </Link>
      <Link
        href="/chef"
        fontSize={{ base: "16px", lg: "26px" }}
        color={"#444444"}
      >
        {t.chef}
      </Link>
      <Link
        href="/reservation"
        fontSize={{ base: "16px", lg: "26px" }}
        color={"#444444"}
      >
        {t.reservation}
      </Link>
      <Link
        href="/location"
        fontSize={{ base: "16px", lg: "26px" }}
        color={"#444444"}
      >
        {t.location}
      </Link>
    </Stack>
  );
}

export default FooterMenu;
