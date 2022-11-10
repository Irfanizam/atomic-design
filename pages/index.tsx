import { Flex, Stack } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/image";
// import { Img } from "@chakra-ui/react";
// import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { enGB } from "../translation";

import HeaderBar from "../components/molecules/HeaderBar";

import ContactInfo from "../components/organisms/ContactInfo";
import MenuSelect from "../components/organisms/MenuSelect";

const Home: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <Stack
      minW={"100vh"}
      direction={{ base: "column", md: "row" }}
      bg="#D1FEFF"
    >
      <HeaderBar />

      <Flex flex={1} align={"center"} justify={"center"}>
        <Stack w={"full"} textAlign={"center"}>
          <ContactInfo />
          <MenuSelect />
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Home;
