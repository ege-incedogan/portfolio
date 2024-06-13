import {
  Box,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/email.png";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between">
        <HStack>
          <Box
            border="solid 0.2vh white"
            paddingRight="1vh"
            paddingLeft="1vh"
            borderRadius="1vh"
          >
            <Link to="/">
              <Text className="nameClass" fontSize={"3xl"}>
                {"EGE INCEDOGAN"}
              </Text>
            </Link>
          </Box>
        </HStack>
        <HStack fontSize={"xl"} gap={3} paddingRight={2}>
          <Link className="navLinks" to="/">
            Home
          </Link>
          <p>|</p>
          <Link className="navLinks" to="resume">
            Resume
          </Link>
          <p>|</p>
          <Link className="navLinks" to="projects">
            Projects
          </Link>
          <p>|</p>
          <Menu>
            <MenuButton className="navLinks">Contact Me</MenuButton>
            <MenuList paddingLeft={3} paddingRight={3}>
              <HStack gap={3}>
                <Image height={"20px"} src={phoneIcon} />
                <Text>+90 507-314-5864</Text>
              </HStack>
              <HStack marginTop={2} gap={3}>
                <Image height={"20px"} src={emailIcon} />
                <Text>ege1912ksk@gmail.com</Text>
              </HStack>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </>
  );
};

export default NavBar;
