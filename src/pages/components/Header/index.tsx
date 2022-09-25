import { Flex, Grid, GridItem, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { RiArrowLeftSLine } from 'react-icons/ri';
import Link from 'next/link';
import { Logo } from "./Logo";

export default function Header() {
  const { asPath } = useRouter()
  const notHomePage = asPath !== '/'

  return (
    <Flex bg="white" w="100%" as="header" mx="auto" px="1rem" h={["50px","100px"]} align="center" justify="center">
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20,40]} justifySelf="start"/>
            </a>
          </Link>
        )}
         <Logo/>
      </Grid>
    </Flex>
  )
}