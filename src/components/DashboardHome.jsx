import React from "react";
import {
  Box,
  Heading,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  TableCaption,
  Td,
  Button,
  List,
  Text,
} from "@chakra-ui/react";

function DashboardHome(props) {
  const parties = [
    {
      symbol: "path_to_symbol_image_1.png",
      party: "Indian National Party",
      name: "John Doe",
      menifesto: [
        "Praesent nec tincidunt felis, in tincidunt nunc.",
        "Praesent nec tincidunt felis, in tincidunt nunc.",
        "Praesent nec tincidunt felis, in tincidunt nunc.",
      ],
      totalVotes: 45,
    },
    {
      symbol: "path_to_symbol_image_2.png",
      party: "Party B",
      name: "Jane Smith",
      menifesto: [
        "Praesent nec tincidunt felis, in tincidunt nunc.",
        "Praesent nec tincidunt felis, in tincidunt nunc.",
        "Praesent nec tincidunt felis, in tincidunt nunc.",
      ],
      totalVotes: 45,
    },
    {
      symbol: "path_to_symbol_image_3.png",
      party: "Party C",
      name: "Michael Johnson",
      menifesto: [
        "Praesent nec tincidunt felis, in tincidunt nunc.",
        "Praesent nec tincidunt felis, in tincidunt nunc.",
        "Praesent nec tincidunt felis, in tincidunt nunc.",
      ],
      totalVotes: 45,
    },
    {
      symbol: "path_to_symbol_image_3.png",
      party: "Party C",
      name: "Michael Johnson",
      menifesto: [
        "Praesent nec tincidunt felis, in tincidunt nunc.",
        "Praesent nec tincidunt felis, in tincidunt nunc.",
        "Praesent nec tincidunt felis, in tincidunt nunc.",
      ],
      totalVotes: 45,
    },
    {
      symbol: "path_to_symbol_image_3.png",
      party: "Party C",
      name: "Michael Johnson",
      menifesto: [
        "Praesent nec tincidunt felis, in tincidunt nunc.",
        "Praesent nec tincidunt felis, in tincidunt nunc.",
        "Praesent nec tincidunt felis, in tincidunt nunc.",
      ],
      totalVotes: 45,
    },
  ];

  return (
    <Box padding={6} bgColor={"#fefefe"}>
      <Text fontSize={"3xl"} color={"#2D3748"} fontFamily={"poppins"}>
        List of Registered Candidates
      </Text>
      <TableContainer py={4} px={4}>
        <Table variant={"striped"}>
          <TableCaption>
            Transactions with a smart contract that deployed with sepolia test
            network.
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Symbol</Th>
              <Th>Party Name</Th>
              <Th>Candidate Name</Th>
              <Th>Menifesto</Th>
              <Th>Total Votes</Th>
            </Tr>
          </Thead>

          <Tbody>
            {parties.map((p) => (
              <Tr key={p.name}>
                <Td>{p.symbol}</Td>
                <Td>{p.party}</Td>
                <Td>{p.name}</Td>
                <Td>
                  <List>
                    {p.menifesto.map((m) => (
                      <ListItem>{m}</ListItem>
                    ))}
                  </List>
                </Td>
                <Td>{p.totalVotes}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default DashboardHome;
