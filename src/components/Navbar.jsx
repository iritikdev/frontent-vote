import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import {
  MdOutlineDarkMode,
  MdOutlineAccountTree,
  MdOutlineLightMode,
} from "react-icons/md";
import { VscDebugDisconnect } from "react-icons/vsc";
import { SiEthereum } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = ({ onClickWallet, user }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center" p={4}>
          <Link to={"/"}>
            <Logo />
          </Link>

          <Box>
            <UnorderedList
              display={"inline-flex"}
              alignItems={"center"}
              columnGap={4}
              listStyleType={"none"}
            >
              <ListItem>
                <Link to="/about">About</Link>
              </ListItem>
              <ListItem>
                <Link to="/contact">Contact</Link>
              </ListItem>
              <ListItem>
                <Menu>
                  <MenuButton
                    variant="solid"
                    as={Button}
                    onClick={onClickWallet}
                    backgroundColor={user.username !== "" ? "green.500" : ""}
                    _hover={{
                      backgroundColor: "green.700",
                    }}
                  >
                    {user.username !== "" ? "connected" : "connect"}
                  </MenuButton>
                  <MenuList>
                    <MenuItem icon={<MdOutlineAccountTree fontSize={18} />}>
                      {`${user.username.slice(0, 4)}...${user.username.slice(
                        -4
                      )}`}
                    </MenuItem>
                    <MenuItem icon={<SiEthereum fontSize={18} />}>
                      {`${user.balance.slice(0, 6)}`}
                    </MenuItem>

                    <Link to={"/dashboard"}>
                      <MenuItem icon={<RxDashboard fontSize={18} />}>
                        Dashboard
                      </MenuItem>
                    </Link>

                    <MenuItem icon={<VscDebugDisconnect fontSize={18} />}>
                      Disconnect
                    </MenuItem>
                  </MenuList>
                </Menu>
              </ListItem>
            </UnorderedList>

            <IconButton
              ml={4}
              onClick={toggleColorMode}
              icon={
                colorMode == "dark" ? (
                  <MdOutlineLightMode fontSize={24} />
                ) : (
                  <MdOutlineDarkMode fontSize={24} />
                )
              }
              backgroundColor={"transparent"}
              // _hover={{ backgroundColor: "#181818", color: "#A8A8A8" }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
