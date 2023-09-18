import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Education = () => {
  return (
    <Card border={"2px"}>
      <CardHeader>
        <Text fontSize={"2xl"}> Education</Text>
      </CardHeader>
      <CardBody paddingTop={0}>
        <HStack>
          <Text>2015-2022</Text>
          <VStack gap={1}>
            <Text>Manisa Celal Bayar University</Text>
            <Text>Faculty of Business</Text>
          </VStack>
          <Text>Bachelor</Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Education;
