import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import sunImage from "../assets/sun.png";
import moonImage from "../assets/moon.png";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="gray"
      />
      {colorMode === "dark" ? (
        <Image height="35px" width="40px" src={moonImage} alt="Sun Image" />
      ) : (
        <Image height="35px" width="40px" src={sunImage} alt="Moon Image" />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
