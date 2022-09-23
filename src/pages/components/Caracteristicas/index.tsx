import { Grid, GridItem } from "@chakra-ui/react";
import Caracteristica from "./Caracteristica";


export default function Caracteristicas() {
  return (
   <Grid>
<GridItem>
<Caracteristica icon="cocktail" text="Vida noturna"/>
<Caracteristica icon="surf" text="praia"/>
<Caracteristica icon="museum" text="moderno"/>
<Caracteristica icon="building" text="clássico"/>
<Caracteristica icon="earth" text="e mais..."/>
</GridItem>
   </Grid>
  );
}
