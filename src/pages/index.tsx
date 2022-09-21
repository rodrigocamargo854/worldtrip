import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Banner from "./components/Banner";
import Header from "./components/Header";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
    </Flex>
  );
}
