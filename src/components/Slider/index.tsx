import { Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import Link from "next/link";
import { Heading } from "@chakra-ui/react";

SwiperCore.use([Navigation, Pagination, A11y]);

export default function Slider() {
  return (
    <Flex
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        //slide movement
        autoplay={{
          delay: 4000,
        }}
        style={{
          width: "100%",
          flex: "1",
        }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/europe.svg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading
                  color="gray.100"
                  fontSize={["3xl", "4xl", "5xl"]}
                  fontWeight="bold"
                >
                  Europa
                </Heading>
                <Text
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  fontWeight="bold"
                  mt={["2", "4"]}
                >
                  Continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/europe.svg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading color="gray.100" fontSize="48px" fontWeight="175px">
                  Europe
                </Heading>
                <Text color="gray.100" fontSize="24px" fontWeight="175px">
                  Continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
