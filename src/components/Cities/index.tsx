import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidade +100
      </Heading>

      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3,1fr)", "repeat(4,1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City
          image="londres"
          flag="londresFlag"
          city="Londres"
          contry="Reino Unido"
        />
        <City
          image="paris"
          flag="parisFlag"
          city="Paris"
          contry="França"
        />

        <City
          image="londres"
          flag="londresFlag"
          city="Roma"
          contry="Itália"
        />

        <City
          image="amsterd"
          flag="amstedaflag"
          city="Amsterdã"
          contry="Holanda"
        />
      </Grid>
    </>
  );
}
