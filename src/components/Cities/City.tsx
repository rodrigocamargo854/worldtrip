import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";

interface CityProps {
  image: string;
  city: string;
  contry: string;
  flag:string
}

export default function City({ city, image, contry ,flag}: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={`/${image}.jpg`} h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {city}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {contry}
          </Text>
        </Flex>
        <Image src={`/${flag}.svg`} />
      </Flex>
    </Box>
  );
}
