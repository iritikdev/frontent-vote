import { Button } from "@chakra-ui/react";
import React from "react";

function Logo(props) {
  return (
    <Button
      fontWeight="700"
      variant={"outline"}
      color={"#181818"}
      border={"2px solid #181818"}
      boxShadow={"4px 4px #181818"}
      _hover={{
        opacity: "0.9",
        boxShadow: "none",
      }}
      _dark={{
        color: "#f3f2f2",
        border: "2px solid #f2f2f2",
        boxShadow: "4px 4px #f2f2f2",
        _hover: {
          boxShadow: "none",
        },
      }}
    >
      TrustBallot
    </Button>
  );
}

export default Logo;
