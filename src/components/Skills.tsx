import { Box, Image, Text, VStack } from "@chakra-ui/react";
import pythonIcon from "../assets/python.png";
import htmlIcon from "../assets/htmlicon.png";
import jsIcon from "../assets/JSicon.png";
import cssIcon from "../assets/cssicon.png";
import sqlIcon from "../assets/database.png";
import mongoIcon from "../assets/mongodb.png";
import reactIcon from "../assets/react.png";
import astroIcon from "../assets/astro.png";
import "./skillicons.css";

const Skills = () => {
  return (
    <>
      <Text fontSize={"2xl"}> Skills</Text>
      <Box className="skillgrid">
        <VStack>
          <Image className="skillicon" height="50px" src={pythonIcon} />
          <Text>Python</Text>
        </VStack>
        <VStack>
          <Image className="skillicon" height="50px" src={jsIcon} />
          <Text>JavaScript</Text>
        </VStack>
        <VStack>
          <Image className="skillicon" height="50px" src={sqlIcon} />
          <Text>MySQL</Text>
        </VStack>
        <VStack>
          <Image className="skillicon" height="50px" src={mongoIcon} />
          <Text>MongoDB</Text>
        </VStack>
        <VStack>
          <Image className="skillicon" height="50px" src={reactIcon} />
          <Text>React</Text>
        </VStack>
        <VStack>
          <Image className="skillicon" height="50px" src={astroIcon} />
          <Text>Astro</Text>
        </VStack>
        <VStack>
          <Image className="skillicon" height="50px" src={htmlIcon} />
          <Text>HTML</Text>
        </VStack>
        <VStack>
          <Image className="skillicon" height="50px" src={cssIcon} />
          <Text>CSS</Text>
        </VStack>
      </Box>
    </>
  );
};

export default Skills;
