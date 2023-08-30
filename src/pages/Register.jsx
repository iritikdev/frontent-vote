"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from "@chakra-ui/react";

import { useFormik } from "formik";

export default function Register({ state }) {
  const { contract } = state;

  const voter = useFormik({
    initialValues: {
      user: "",
      name: "",
      aadhaar: "",
      age: "",
    },

    onSubmit: async ({ user, name, aadhaar, age }, { resetForm }) => {
      await contract.registerVoter(user, name, aadhaar, age);
      resetForm();
    },
  });

  return (
    <Flex
      minH={"90vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={voter.handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="user" isRequired>
                <FormLabel>Your Account Address</FormLabel>
                <Input
                  type="text"
                  name="user"
                  id="user"
                  onChange={voter.handleChange}
                  value={voter.values.user}
                />
              </FormControl>

              <FormControl id="name">
                <FormLabel>Your full name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  onChange={voter.handleChange}
                  value={voter.values.name}
                />
              </FormControl>

              <FormControl id="aadhaar" isRequired>
                <FormLabel>Aadhaar</FormLabel>
                <Input
                  type="text"
                  name="aadhaar"
                  id="aadhaar"
                  onChange={voter.handleChange}
                  value={voter.values.aadhaar}
                />
              </FormControl>
              <FormControl id="age" isRequired>
                <FormLabel>Age</FormLabel>
                <Input
                  type="number"
                  name="age"
                  id="age"
                  onChange={voter.handleChange}
                  value={voter.values.age}
                />
              </FormControl>

              <Button
                size="lg"
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
