import { Image, Box, Flex, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/banner.jpg')"
      bgPosition={["100% 20%, 100% 20%, 100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex 
      justify={["center", "space-between"]} 
      align="center" 
      w="100%"
      mx="auto"
      px={["4","10","15","20","36"]}
      >
        <Text>5 Continentes, infinitas possibilidades.</Text>
      </Flex>
    </Flex>
  );
}
