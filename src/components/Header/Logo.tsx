import { Image } from "@chakra-ui/react";

export function Logo() {
  return (
    <Image
      w={["81px", "184px"]}
      src="/logo.svg"
      alt="Um avião voando sobre o nome da marca world trip"
      justifySelf="center"
      gridColumn="2"
    />
  );
}
