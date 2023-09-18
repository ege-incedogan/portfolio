import {
  Box,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Mobilebar = () => {
  return (
    <Box>
      <HStack justifyContent={"space-between"}>
        <Text color={"purple.500"} fontSize={"3xl"}>
          {"<Ege />"}
        </Text>
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              size={"lg"}
            />
            <MenuList>
              <Link to={"/"}>
                <MenuItem>Home</MenuItem>
              </Link>
              <Link to={"resume"}>
                <MenuItem>Resume</MenuItem>
              </Link>
              <Link to={"projects"}>
                <MenuItem>Projects</MenuItem>
              </Link>
              <MenuDivider />
              <Text paddingLeft={3}>Contact Me</Text>
              <Text paddingLeft={3} paddingTop={3}>
                +90 507 314-5864
              </Text>
              <Text paddingLeft={3} paddingTop={3}>
                ege1912ksk@gmail.com
              </Text>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Box>
  );
};

export default Mobilebar;
