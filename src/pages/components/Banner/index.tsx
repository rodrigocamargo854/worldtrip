import { Image, Box, Flex, Text, Heading } from "@chakra-ui/react";

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
        px={["4", "10", "15", "20", "36"]}
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
          >
            5 continentes,
            <br /> infinitas possibildades
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontStyle={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "550px"]}
          >
            {" "}
            5 Continentes, infinitas possibilidades.
          </Text>
        </div>
        <Image w={["300px", "300px", "300px", "430px"]} 
        
        display={["none","none",""]}
        />
      </Flex>
    </Flex>
  );
}
