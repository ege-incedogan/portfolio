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
        <Box
          border="solid 0.2vh white"
          paddingRight="1vh"
          paddingLeft="1vh"
          borderRadius="1vh"
        >
          <Link to="/">
            <Text className="nameClass" fontSize={"3xl"}>
              {"EGE"}
            </Text>
          </Link>
        </Box>
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
              <a href="tel:+905073145864">
                <Text paddingLeft={3} paddingTop={3}>
                  +90 507 314-5864
                </Text>
              </a>
              <a href="https://wa.me/905073145864">
                <Text paddingLeft={3} paddingTop={3}>
                  WhatsApp
                </Text>
              </a>
              <a href="mailto:ege1912ksk@gmail.com">
                <Text paddingLeft={3} paddingTop={3}>
                  ege1912ksk@gmail.com
                </Text>
              </a>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Box>
  );
};

export default Mobilebar;
