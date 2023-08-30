import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { MdOutlineHowToVote } from "react-icons/md";

export default function MemosTable({ candidates, state }) {
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { contract } = state;

  const count = async () => {
    const tx = await contract?.getCandidateNumber();
    setCounter(Number(tx));
  };
  count();
  const listCandidates = [];
  for (let i = 0; i < counter; i++) {
    const candidate = {};

    candidate["id"] = candidates?.[i]?.[0];
    candidate["name"] = candidates?.[i]?.[1];
    candidate["voteCount"] = candidates?.[i]?.[2];
    candidate["partyImage"] = candidates?.[i]?.[3];
    candidate["partyName"] = candidates?.[i]?.[4];

    candidate["candidateImage"] = candidates?.[i]?.[5];
    candidate["menifesto"] = candidates?.[i]?.[6];

    listCandidates.push(candidate);
  }

  const handleVote = async (id) => {
    try {
      await contract.vote(id);
    } catch ({ message }) {
      setError(message);
    }
  };

  return (
    <>
      <TableContainer shadow={"lg"} py={4} px={4}>
        <Table variant={"simple"}>
          <TableCaption>
            Transactions with a smart contract that deployed with sepolia test
            network.
          </TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              {/* <Th>Party Symbol</Th> */}
              <Th>Party Name</Th>
              {/* <Th>Candidate Image</Th> */}
              <Th>Candidate Name</Th>
              <Th>Menifesto</Th>
              <Th>Votes</Th>
            </Tr>
          </Thead>

          <Tbody>
            {listCandidates.map((c) => (
              <Tr key={c.id?.toString()}>
                <Td>{c.id?.toString()}</Td>
                {/* <Td>{c.partyImage}</Td> */}
                <Td>{c.partyName}</Td>
                {/* <Td>{c.candidateImage}</Td> */}
                <Td>{c.name}</Td>
                <Td>
                  <Button onClick={onOpen} size={"xs"} variant={"solid"}>
                    view
                  </Button>
                  <Modal onClose={onClose} size={"sm"} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader fontFamily={"poppins"}>
                        Menifesto
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        Our party is committed to fostering economic growth by
                        investing in education, healthcare, and infrastructure.
                        We aim to create job opportunities, reduce poverty, and
                        ensure a brighter future for all citizens. We pledge to
                        promote sustainable development, environmental
                        protection, and social equality. We stand for
                        transparent governance, accountable leadership, and
                        citizen empowerment. Together, let's build a prosperous
                        and inclusive India for generations to come.
                      </ModalBody>
                      <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Td>
                <Td>
                  <Button
                    onClick={() => handleVote(c.id)}
                    variant={"outline"}
                    rightIcon={<MdOutlineHowToVote />}
                    bgColor={"gray.900"}
                    color={"white"}
                    _hover={{
                      opacity: 0.9,
                    }}
                  >
                    vote
                  </Button>
                </Td>
                <Td>{c.voteCount.toString()}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
