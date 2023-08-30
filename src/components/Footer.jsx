import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SocialIcons from "./SocialIcons";

function Footer(props) {
  return (
    <Box
      textAlign={"center"}
      borderTop={"1px solid #f2f2f2"}
      _dark={{
        borderColor: "#ffffff29",
      }}
      mx={5}
      py={4}
    >
      <Text
        fontFamily={"inter"}
        fontSize={"sm"}
        color={"#2D3748"}
        _dark={{ color: "#a1a1aa" }}
      >
        Proudly made in &#x1F1EE;&#x1F1F3; by Ritik & Teams
      </Text>
      <SocialIcons />

      <Button
        mt={5}
        size={"sm"}
        backgroundColor={"#181818"}
        color={"#FAFAFA"}
        _hover={{
          opacity: "0.9",
        }}
      >
        Build with 🌐 Web3 & React
      </Button>
    </Box>
  );
}

export default Footer;
