import { Box, SimpleGrid } from "@chakra-ui/react";
import Languages from "./Languages";
import Skills from "./Skills";
import Education from "./Education";
import TextAboutMe from "./TextAboutMe";
import Experience from "./Experience";

const AboutMe = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg: 1, xl: 2 }}
      padding={10}
      spacing={50}
    >
      <Box minWidth={"max"}>
        <Skills />
      </Box>
      <Box minWidth={"max"} width={"xs"}>
        <Education />
      </Box>
      <Box maxW={"sm"}>
        <Languages />
      </Box>
      <Box maxW={"620px"}>
        <Experience />
      </Box>
      <Box maxW={"sm"}>
        <TextAboutMe />
      </Box>
    </SimpleGrid>
  );
};

export default AboutMe;
