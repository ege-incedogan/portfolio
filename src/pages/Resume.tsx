import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import cvPdf from "../assets/CV.png";

const Resume = () => {
  return (
    <SimpleGrid justifyContent={"center"}>
      <Box paddingTop={5} width="100%">
        <Image maxHeight={"1200px"} src={cvPdf} />
      </Box>
    </SimpleGrid>
  );
};

export default Resume;
