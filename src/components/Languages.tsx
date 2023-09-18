import { Card, CardBody, CardHeader, Progress, Text } from "@chakra-ui/react";

const Languages = () => {
  return (
    <Card border={"2px"}>
      <CardHeader>
        <Text fontSize="2xl">Languages</Text>
      </CardHeader>
      <CardBody paddingTop={0}>
        <div>
          <Text>English</Text>
          <Progress size="xs" colorScheme="whatsapp" value={90} />
        </div>
        <div>
          <Text>Turkish</Text>
          <Progress size="xs" colorScheme="whatsapp" value={100} />
        </div>
      </CardBody>
    </Card>
  );
};

export default Languages;
