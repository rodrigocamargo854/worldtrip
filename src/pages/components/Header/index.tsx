import { Flex, Grid, Image } from "@chakra-ui/react";
import { Logo } from "./Logo";

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      align="center"
      bgColor="white"
      mx="auto"
      h={["50px", "100px"]}
      justify="center"
      px="1rem"
    >
      <Grid
        h="100%"
        mx="100%"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3,1fr)"
        justifyContent="center"
      >
        <Logo />
      </Grid>
    </Flex>
  );
}
