import { Box, Heading } from "@chakra-ui/react";
import React from "react";

function SectionHeader({title, subtitle}) {
  return (
    <Box>
      <Heading>{title}</Heading>
      <Text>{subtitle}</Text>
    </Box>
  );
}

export default SectionHeader;
