import { Image, Box, Flex } from "@chakra-ui/react";

export function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt=""
      justifySelf="center"
      gridColumn="2"
      w={["81px", "184px"]}
    />
  );
}
