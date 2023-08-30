import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import banner from "../assets/banner.png";
import BuyCoffee from "./BuyCoffee";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { FaGithubAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero({ state }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClose = (data) => {
    onClose(data);
  };
  return (
    <Box
      bgImage={banner}
      px={["8", "16", "40"]}
      py={["8", "16", "24"]}
      margin={4}
      borderRadius={10}
    >
      <Text mt={2} mb={2} fontSize={["16", "16"]} _dark={{ color: "#181818" }}>
        ✔ Empowering Democracy with Blockchain Technology
      </Text>
      <Heading
        fontFamily={"poppins"}
        fontWeight={700}
        _dark={{ color: "#181818" }}
      >
        Revolutionize Voting with Blockchain Security
      </Heading>
      <Text mt={2} fontSize={["14", "15", "16"]} color={"#181818"}>
        At TrustBallot, we're paving the way for a new era of transparent,
        tamper-proof, and efficient voting systems. Our blockchain-based eVoting
        solution ensures that every vote is securely recorded, verifiable, and
        resistant to manipulation. Say goodbye to doubts about election
        integrity and hello to a future where your voice truly matters.
      </Text>
      <Link to="/register">
        <Button
          mt={3}
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
        as={"a"}
        mt={3}
        ml={2}
        href="https://github.com/iritikdev/BuyMeCoffee"
        target="_blank"
        rightIcon={<FaGithubAlt />}
        isExternal
        _dark={{ color: "#181818", bgColor: "#f2f2f2" }}
      >
        Github
      </Button>
    </Box>
  );
}
