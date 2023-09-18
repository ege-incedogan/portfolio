import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Expertise = () => {
  return (
    <>
      <Text paddingBottom={2} fontSize={"2xl"}>
        Expertise
      </Text>
      <UnorderedList>
        <ListItem>Accounting</ListItem>
        <ListItem>Marketing</ListItem>
        <ListItem>Finance</ListItem>
      </UnorderedList>
    </>
  );
};

export default Expertise;
