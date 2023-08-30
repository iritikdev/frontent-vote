import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "./SectionHeader";

function Feature(props) {
  return (
    <Box>
      <SectionHeader
        title="Why Choose SecureVote?"
        subtitle="Say goodbye to doubts about election integrity and hello to a future where your voice truly matters."
      />
      <Flex>
        <Card>
            
        </Card>
      </Flex>
    </Box>
  );
}

export default Feature;
