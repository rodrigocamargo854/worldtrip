import { Flex, Heading, theme } from "@chakra-ui/react";
import Banner from "./components/Banner";
import Caracteristicas from "./components/Caracteristicas";
import Header from "./components/Header";
import Separate from "./components/Separate";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Caracteristicas />
      <Separate />
      <Heading
        textAlign="center"
        color="gray.700"
        fontWeight="500"
        fontSize="36px"
        fontFamily="heading.Poppins"
        mb={["5", "14"]}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>
      <Slider/>
    </Flex>
  );
}
