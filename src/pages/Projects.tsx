import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import gamebrowserimg from "../assets/gamebrowser.png";
import carshopimg from "../assets/carshop.png";
import browsergameimg from "../assets/browsergame.png";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const projects = [
  {
    id: 1,
    name: "game-browser",
    img: gamebrowserimg,
    site: "https://ege-incedogan.github.io/gamebrowser/",
    github: "https://github.com/ege-incedogan/gamebrowser",
    describtion:
      "Small project that I made using rawg.io API, vite, react and other front-end elements",
  },
  {
    id: 2,
    name: "car-shop",
    img: carshopimg,
    site: "https://ege-incedogan.github.io/carshop/",
    github: "https://github.com/ege-incedogan/carshop",
    describtion:
      "Small project made using React, and other front-end elements to show filtering options",
  },
  {
    id: 3,
    name: "browser-game",
    img: browsergameimg,
    site: "https://ege-incedogan.github.io/jsbrowsergame/",
    github: "https://github.com/ege-incedogan/jsbrowsergame",
    describtion:
      "Clicker kinda browser game made by using only raw HTML,CSS and JS",
  },
];

const Projects = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={5}
      spacing={3}
    >
      {projects.map((p) => (
        <Card border={"2px"} key={p.id}>
          <CardHeader paddingTop={0} alignSelf={"center"}>
            <Text fontSize={"2xl"}>{p.name}</Text>
          </CardHeader>
          <CardBody paddingTop={0}>
            <Image className="projectimg" src={p.img} />
            <Text paddingTop={3}>{p.describtion}</Text>
          </CardBody>
          <CardFooter paddingTop={0} alignSelf={"center"}>
            <VStack>
              <Link href={p.site} isExternal={true}>
                <HStack>
                  <Text color={"purple.500"}>Click here to preview</Text>{" "}
                  <ExternalLinkIcon />
                </HStack>
              </Link>
              <Link href={p.github} isExternal={true}>
                <HStack>
                  <Text>Github</Text>
                  <ExternalLinkIcon />
                </HStack>
              </Link>
            </VStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};
export default Projects;
