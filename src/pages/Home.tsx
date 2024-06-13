import { Box, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import TextAboutMe from "../components/TextAboutMe";
import Goal from "../components/Goal";
import Skills from "../components/Skills";

const TestPage = () => {
  const columns = useBreakpointValue({ base: 1, lg: 2 });

  return (
    <SimpleGrid
      justifyItems={"center"}
      marginTop={10}
      columns={columns}
      spacing={10}
    >
      <Box maxW={"600px"} width={"100%"}>
        <TextAboutMe />
      </Box>
      <Box maxW={"600px"} width={"100%"}>
        <Skills />
      </Box>
      <Box maxW={"600px"} width={"100%"}>
        <Goal />
      </Box>
    </SimpleGrid>
  );
};

export default TestPage;
