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
              <a href="tel:+905073145864">
                <HStack gap={3} cursor="pointer">
                  <Image height={"20px"} src={phoneIcon} alt="Phone Icon" />
                  <Text>+90 507-314-5864</Text>
                </HStack>
              </a>
              <a
                href="https://web.whatsapp.com/send?phone=905073145864"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HStack marginTop={2} gap={3} cursor="pointer">
                  <Image height={"20px"} src={phoneIcon} alt="WhatsApp Icon" />
                  <Text>WhatsApp</Text>
                </HStack>
              </a>
              <a href="mailto:ege1912ksk@gmail.com">
                <HStack marginTop={2} gap={3} cursor="pointer">
                  <Image height={"20px"} src={emailIcon} alt="Email Icon" />
                  <Text>ege1912ksk@gmail.com</Text>
                </HStack>
              </a>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </>
  );
};

export default NavBar;
