import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Stack, Text, chakra } from "@chakra-ui/react";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import banner from "../assets/banner.png";

function HeroCTA(props) {
  return (
    <Box
      mx="auto"
      bgImage={banner}
      px={["2", "10", "0"]}
      py={["8", "12", "20"]}
      margin={4}
      borderRadius={10}
    >
      <Box
        w={{
          base: "full",
          md: 11 / 12,
          xl: 9 / 12,
        }}
        mx="auto"
        textAlign={{
          base: "left",
          md: "center",
        }}
      >
        <chakra.h1
          mb={6}
          fontFamily={"poppins"}
          fontSize={{
            base: "3xl",
            md: "6xl",
          }}
          fontWeight="bold"
          lineHeight={{
            base: "40px",
            md: "70px",
          }}
          letterSpacing={{
            base: "normal",
            md: "tight",
          }}
          color="gray.900"
          _dark={{
            color: "gray.100",
          }}
        >
          Revolutionize&nbsp;
          <Text
            display={{
              base: "block",
              lg: "inline",
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            Voting with Blockchain
          </Text>{" "}
          Security with TrustWallet
        </chakra.h1>
        <chakra.p
          px={{
            base: 0,
            lg: 24,
          }}
          mb={6}
          fontSize={{
            base: "medium",
            md: "xl",
          }}
          color="gray.600"
          _dark={{
            color: "gray.300",
          }}
        >
          At TrustBallot, we're paving the way for a new era of transparent,
          tamper-proof, and efficient voting systems. Our blockchain-based
          eVoting solution ensures that every vote is securely recorded,
          verifiable, and resistant to manipulation. Say goodbye to doubts about
          election integrity and hello to a future where your voice truly
          matters.
        </chakra.p>
        <Stack
          direction={{
            base: "column",
            sm: "row",
          }}
          mb={{
            base: 4,
            md: 8,
          }}
          spacing={2}
          justifyContent={{
            sm: "left",
            md: "center",
          }}
        >
          <Link to="register">
            <Button
              backgroundColor={"#181818"}
              color={"#FAFAFA"}
              _hover={{
                opacity: "0.9",
              }}
            >
              Register &nbsp; <ArrowRightIcon fontSize={10} />
            </Button>
          </Link>
          <Button
            as={NavLink}
            ml={2}
            to={"/about"}
            rightIcon={<BsInfoCircle />}
            isExternal
            _dark={{ color: "#181818", bgColor: "#f2f2f2" }}
          >
            Know more
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default HeroCTA;
