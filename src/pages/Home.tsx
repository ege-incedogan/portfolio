import { Box, SimpleGrid } from "@chakra-ui/react";
import Skills from "../components/Skills";
import AnimatedAbout from "../components/AnimatedAbout";

const Home = () => {
  return (
    <SimpleGrid
      justifyItems={"center"}
      marginTop={5}
      marginLeft={10}
      gap={5}
      columns={1}
    >
      <Box maxW={"600px"}>
        <AnimatedAbout />
      </Box>
      <Box minWidth={"max"}>
        <Skills />
      </Box>
    </SimpleGrid>
  );
};

export default Home;
