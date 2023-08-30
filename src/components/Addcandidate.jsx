import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import { useFormik } from "formik";

export default function AddCandidate({ state }) {
  const toast = useToast();
  const { contract, provider } = state;

  async function checkTransactionStatus(txHash) {
    try {
      const txReceipt = await provider.getTransactionReceipt(txHash);

      if (txReceipt && txReceipt.status === 1) {
        console.log("Transaction was successful.");
      } else if (txReceipt && txReceipt.status === 0) {
        console.log("Transaction failed.");
      } else {
        console.log("Transaction receipt not available yet.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const candidate = useFormik({
    initialValues: {
      candidateName: "",
      partyName: "",
      menifesto: "",
      partyLogo: "",
      candidateImage: "",
    },

    onSubmit: async (
      { candidateName, partyName, menifesto, partyLogo, candidateImage },
      { resetForm }
    ) => {
      const tx = await contract.listingCandidate(
        candidateName,
        candidateImage,
        partyName,
        partyLogo,
        menifesto
      );
      checkTransactionStatus(tx.hash);
      resetForm();
      toast({
        title: "You are sucessfully register yourself 🚀",
        description: `Account balance duduced with ${AMOUNT} ETH.`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    },
  });

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Register Candidate
        </Heading>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={candidate.handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="candidateName" isRequired>
                <FormLabel>Candidate Name</FormLabel>
                <Input
                  type="text"
                  id="candidateName"
                  name="candidateName"
                  onChange={candidate.handleChange}
                  value={candidate.values.email}
                />
              </FormControl>

              <FormControl id="partyName" isRequired>
                <FormLabel>Party Name</FormLabel>
                <Input
                  type="text"
                  id="partyName"
                  name="partyName"
                  onChange={candidate.handleChange}
                  value={candidate.values.partyName}
                />
              </FormControl>

              <FormControl id="candidateImage" isRequired>
                <FormLabel>Upload Candidate Profile Picture</FormLabel>
                <Input
                  type="file"
                  id="candidateImage"
                  name="candidateImage"
                  onChange={candidate.handleChange}
                  value={candidate.values.candidateImage}
                />
              </FormControl>

              <FormControl id="partyLogo">
                <FormLabel>Upload Party Symbol</FormLabel>
                <Input
                  type="file"
                  id="partyLogo"
                  name="partyLogo"
                  onChange={candidate.handleChange}
                  value={candidate.values.partyLogo}
                />
              </FormControl>

              <FormControl id="menifesto" isRequired>
                <FormLabel>Menifesto</FormLabel>
                <Textarea
                  placeholder="seperate each menifesto with pipe(|)"
                  id="menifesto"
                  name="menifesto"
                  onChange={candidate.handleChange}
                  value={candidate.values.menifesto}
                />
              </FormControl>

              <Button
                loadingText="Submitting"
                size="lg"
                type="submit"
                bg={"#181818"}
                color={"white"}
                _hover={{
                  opacity: "0.9",
                }}
              >
                Add Candidate
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
