import { HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import pythonIcon from "../assets/python.png";
import htmlIcon from "../assets/htmlicon.png";
import jsIcon from "../assets/JSicon.png";
import cssIcon from "../assets/cssicon.png";
import sqlIcon from "../assets/database.png";
import mongoIcon from "../assets/mongodb.png";
import reactIcon from "../assets/react.png";
import "./skillicons.css";

const Skills = () => {
  return (
    <SimpleGrid>
      <Text fontSize={"2xl"}> Skills</Text>
      <HStack>
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
          <Image className="skillicon" height="60px" src={mongoIcon} />
          <Text>MongoDB</Text>
        </VStack>
        <VStack>
          <Image className="skillicon" height="60px" src={reactIcon} />
          <Text>React</Text>
        </VStack>
        <VStack>
          <Image className="skillicon" height="65px" src={htmlIcon} />
          <Text>HTML</Text>
        </VStack>
        <VStack>
          <Image className="skillicon" height="65px" src={cssIcon} />
          <Text>CSS</Text>
        </VStack>
      </HStack>
    </SimpleGrid>
  );
};

export default Skills;
