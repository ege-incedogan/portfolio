import { Box, Text } from "@chakra-ui/react";

const Goal = () => {
  return (
    <Box className="AboutTextBox">
      <>
        <Text paddingBottom="2px" fontSize="2xl">
          Current Capabilities:
        </Text>
        <Text>
          I have a strong proficiency in front-end web development, with
          additional experience in integrating back-end functionalities.
        </Text>
        <br />
        <Text paddingBottom="2px" fontSize="2xl">
          Goal:
        </Text>
        <Text>
          I am actively expanding my skill set in back-end technologies to
          transition into full-stack developer role.
        </Text>
      </>
    </Box>
  );
};

export default Goal;
