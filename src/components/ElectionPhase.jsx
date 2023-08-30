import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

function ElectionPhase({ state }) {
  const [electionState, setElectionState] = useState(0);
  const [ids, setIds] = useState("");
  const { contract } = state;
  const phase = {
    0: "Registration is going on...",
    1: "Voting is going on...",
    2: "Voting Completed",
  };

  const handleElectionPhase = async (ids) => {
    const tx = await contract.getCurrentElectionState();
    setElectionState(Number(tx));
    await contract.changeState(ids);
    console.log("state change to voting...");
  };

  console.log(ids);
  return (
    <Box bgColor={"gray.50"} padding={6}>
      <Text mb={12}>
        <Button
          size={"xs"}
          bgColor={"green.600"}
          color={"white"}
          _hover={{
            opacity: "0.95",
          }}
        >
          Current Status
        </Button>
        &nbsp;{phase[electionState]}
      </Text>
      <FormControl id="ids" isRequired>
        <FormLabel>Enter Ids to switch election state</FormLabel>
        <Input
          type="number"
          name="ids"
          id="ids"
          value={ids}
          onChange={(e) => setIds(e.target.value)}
          placeholder="Enter '0' for registration or '1' for voting or '2' for completed "
        />
      </FormControl>

      <Button
        mt={4}
        onClick={() => handleElectionPhase(ids)}
        variant={"solid"}
        bgColor={"gray.900"}
        color={"white"}
        _hover={{
          opacity: "0.95",
        }}
      >
        Change Election Phase
      </Button>
    </Box>
  );
}

export default ElectionPhase;
