import {
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
          <Link to="/">
            <Text color={"purple.500"} fontSize={"3xl"}>
              {"<Ege_incedogan />"}
            </Text>
          </Link>
        </HStack>
        <HStack fontSize={"xl"} gap={3} paddingRight={2}>
          <Link to="/">Home</Link>
          <p>|</p>
          <Link to="resume">Resume</Link>
          <p>|</p>
          <Link to="projects">Projects</Link>
          <p>|</p>
          <Menu>
            <MenuButton>Contact Me</MenuButton>
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
