import React from "react";
// import Hero from "../src/components/Hero";
import { Flex } from "@chakra-ui/react";
import HeroCTA from "./../components/HeroCTA";
import MemosTable from "./../components/MemosTable";

function Home({ candidates, state }) {
  return (
    <>
      <HeroCTA />

      <Flex
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={10}
        my={8}
      >
        <MemosTable candidates={candidates} state={state} />
      </Flex>
    </>
  );
}

export default Home;
