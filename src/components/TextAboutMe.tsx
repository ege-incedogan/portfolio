import { Box, HStack, Img, Text } from "@chakra-ui/react";
import myPic from "../assets/picofme.png";

const TextAboutMe = () => {
  return (
    <Box className="AboutTextBox">
      <HStack
        gap="3%"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Img src={myPic} paddingRight="2vh" paddingBottom="2vh" />
        <Box>
          <Text>
            Hello my name is Ege Incedoğan, a self-taught developer with a
            background in Finance and Accounting, ready to bring a unique blend
            of skills and expertise to the table.
          </Text>
          <br />
          <Text>
            After dedicating years to pursuing my finance degree, I came to the
            realization that it wasn't the career path I wanted for my future.
            Instead, I decided to follow my passion and explore coding.
          </Text>
          <br />
          <Text>
            To my delight, I discovered a deep love for programming, and I've
            since honed my developer skills to a confident level. Now, I am
            eagerly anticipating the opportunity to collaborate and work
            together with you.
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default TextAboutMe;
