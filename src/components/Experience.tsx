import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Experience = () => {
  return (
    <Card border={"2px"}>
      <CardHeader>
        <Text fontSize={"2xl"}>Experience</Text>
      </CardHeader>
      <CardBody paddingTop={0}>
        <HStack>
          <VStack paddingRight={"50px"}>
            <Text minW={"130px"}>EKTAM 2014-2015</Text>
          </VStack>
          <VStack maxW={"350px"}>
            <Text>
              spent a year working as intern at accounting department as part of
              my highschool education
            </Text>
          </VStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Experience;
