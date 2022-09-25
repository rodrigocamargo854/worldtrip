import {
  Flex,
  Heading,
  Popover,
  Text,
  PopoverTrigger,
  Icon,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function Informations() {
  return (
    <Flex align="center" justify="space-between">
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          50
        </Heading>
        <Text fontWeight="bold" fontSize={["md", "xl"]} color="gray.700">
          paises
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          60
        </Heading>
        <Text fontWeight="bold" fontSize={["md", "xl"]} color="gray.700">
          línguas
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          17
        </Heading>
        <Text fontWeight="bold" fontSize={["md", "xl"]} color="gray.700">
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="1"
                  color="gray.400"
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                Paris, Europa, Chile Canada, china
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
}
