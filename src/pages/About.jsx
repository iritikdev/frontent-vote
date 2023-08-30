import {
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Team from "../components/Team";

import ritik from "../assets/ritik.jpeg";
import amit from "../assets/amit.jpg";
import nisha from "../assets/nisha.jpeg";
import mayank from "../assets/mayank.jpeg";

function About(props) {
  return (
    <Box maxWidth={"1140px"} mx={"auto"}>
      <Divider />
      <Heading pt={10} pb={8} color={"#181818"} fontFamily={"poppins"}>
        About the Project
      </Heading>
      <Text fontSize={"lg"} color={"#808080"}>
        Decentralized eVoting DApps (decentralized applications) leverage
        blockchain technology to revolutionize the voting process. These DApps
        offer a transparent, secure, and tamper-resistant platform for
        conducting elections.
        <br />
        <br />
        Blockchain's inherent characteristics, such as immutability and
        consensus mechanisms, ensure the integrity of the voting data. By
        removing the need for intermediaries, decentralized eVoting DApps enable
        direct participation and empower voters. Each vote cast is recorded as a
        unique transaction on the blockchain, preventing any alterations or
        unauthorized access. This transparent ledger can be audited by anyone,
        ensuring the authenticity of the election results. Additionally,
        blockchain-based eVoting enhances security. Voter identities can be
        cryptographically protected, reducing the risk of fraud or data
        breaches. <br />
        <br />
        Smart contracts, self-executing pieces of code on the blockchain, can
        automate the voting process, ensuring accurate vote tallying and
        minimizing human error. Despite these advantages, challenges remain,
        including ensuring voter privacy while maintaining transparency,
        addressing potential scalability issues, and navigating regulatory
        concerns. However, decentralized eVoting DApps hold the potential to
        create a more inclusive, efficient, and trustworthy electoral system in
        the digital age.
      </Text>
      <Heading pt={12} pb={8} color={"#181818"} fontFamily={"poppins"}>
        Future Scope
      </Heading>
      <Text fontSize={"lg"} color={"#808080"}>
        The scope of decentralized eVoting DApps using blockchain technology in
        India is significant and can address several challenges faced by the
        current electoral system. Here are some aspects of its potential scope:
        <List padding={6}>
          <ListItem>
            <Heading fontSize={"xl"} fontFamily={"poppins"} color={"#666666"}>
              Transparency and Integrity
            </Heading>
            <Text>
              {" "}
              Blockchain's transparent and tamper-resistant nature can enhance
              trust in the electoral process. Voters and stakeholders can
              independently verify the accuracy of results, reducing concerns
              about fraud and manipulation.
            </Text>
          </ListItem>
          <ListItem>
            <Heading fontSize={"xl"} fontFamily={"poppins"} color={"#666666"}>
              Access and Inclusion
            </Heading>
            <Text>
              {" "}
              Decentralized eVoting can enable remote and secure voting for
              citizens who face geographical barriers or mobility issues. This
              technology can increase voter turnout by providing a more
              accessible voting method.
            </Text>
          </ListItem>
          <ListItem>
            <Heading fontSize={"xl"} fontFamily={"poppins"} color={"#666666"}>
              Identity Verification
            </Heading>
            <Text>
              {" "}
              Blockchain's cryptographic techniques can strengthen voter
              identity verification while maintaining privacy. This can reduce
              the risk of impersonation and ensure that only eligible voters
              participate.
            </Text>
          </ListItem>
          <ListItem>
            <Heading
              fontSize={"xl"}
              fontFamily={"poppins"}
              color={"#666666"}
              mb={3}
            >
              Reduced Costs
            </Heading>
            <Text>
              {" "}
              Blockchain-based systems have the potential to streamline the
              voting process, reducing administrative costs associated with
              traditional methods. Smart contracts can automate processes,
              minimizing manual intervention.
            </Text>
          </ListItem>
          <ListItem>
            <Heading
              fontSize={"xl"}
              fontFamily={"poppins"}
              color={"#666666"}
              mb={3}
            >
              Security Against Tampering
            </Heading>
            <Text>
              {" "}
              Immutable and distributed ledger capabilities of blockchain
              prevent unauthorized tampering with voting records, ensuring the
              sanctity of the electoral data.
            </Text>
          </ListItem>
          <ListItem>
            <Heading
              fontSize={"xl"}
              fontFamily={"poppins"}
              color={"#666666"}
              mb={3}
            >
              Decentralization and Trust
            </Heading>
            <Text>
              {" "}
              The decentralized nature of blockchain reduces the reliance on a
              single central authority, fostering trust in the election process.
            </Text>
          </ListItem>
          <ListItem>
            <Heading
              fontSize={"xl"}
              fontFamily={"poppins"}
              color={"#666666"}
              mb={3}
            >
              Auditability
            </Heading>
            <Text>
              {" "}
              Blockchain's public ledger allows for independent auditing of the
              voting process, contributing to the overall credibility of
              election outcomes.
            </Text>
          </ListItem>
        </List>
      </Text>
      <Heading>Challenges</Heading>
      <List padding={6}>
        <ListItem>
          <Heading
            fontSize={"xl"}
            fontFamily={"poppins"}
            color={"#666666"}
            mb={3}
          >
            Technological Literacy
          </Heading>
          <Text>
            Adoption requires citizens to be familiar with blockchain technology
            and its usage, which might be a hurdle in a diverse and large
            country like India.
          </Text>
        </ListItem>
        <ListItem>
          <Heading
            fontSize={"xl"}
            fontFamily={"poppins"}
            color={"#666666"}
            mb={3}
          >
            Infrastructure
          </Heading>
          <Text>
            Reliable internet connectivity and access to smartphones or
            computers are necessary for decentralized eVoting. This could be a
            limitation, particularly in rural areas.
          </Text>
        </ListItem>
        <ListItem>
          <Heading
            fontSize={"xl"}
            fontFamily={"poppins"}
            color={"#666666"}
            mb={3}
          >
            Regulatory Framework
          </Heading>
          <Text>
            The integration of blockchain-based voting would require
            establishing a legal and regulatory framework to govern its use,
            addressing issues of privacy, data protection, and dispute
            resolution.
          </Text>
        </ListItem>
        <ListItem>
          <Heading
            fontSize={"xl"}
            fontFamily={"poppins"}
            color={"#666666"}
            mb={3}
          >
            Security Concerns
          </Heading>
          <Text>
            While blockchain is robust, no system is entirely immune to cyber
            threats. Ensuring the security of the platform and voter data is
            crucial.
          </Text>
        </ListItem>
        <ListItem>
          <Heading
            fontSize={"xl"}
            fontFamily={"poppins"}
            color={"#666666"}
            mb={3}
          >
            Cultural and Social Factors
          </Heading>
          <Text>
            Traditional voting holds cultural significance in India. Convincing
            citizens to shift to a new technology might require considerable
            effort.
          </Text>
        </ListItem>
        The successful implementation of decentralized eVoting DApps in India
        would depend on a well-designed system that addresses these challenges
        and ensures that the technology aligns with the country's unique
        socio-political landscape.
      </List>

      <Heading pt={10} pb={8} color={"#181818"} fontFamily={"poppins"}>
        Our Teams
      </Heading>

      <Flex columnGap={10} mb={12}>
        <Team
          image={ritik}
          name={"Ritik Sharma"}
          username={"@iritikdev"}
          description={
            "Learning & Working with JS Technologies, | www.ritiksharma.online"
          }
        />
        <Team
          image={amit}
          name={"Amit Kumar"}
          username={"@amit.dev"}
          description={
            "Code poet, crafting digital masterpieces with keystrokes and imagination."
          }
        />
        <Team
          image={mayank}
          name={"Myank Kumar"}
          username={"@icodermayank"}
          description={"Problem Solver | Code Enthusiast"}
        />
        <Team
          image={nisha}
          name={"Nisha Kumari"}
          username={"@nish.56"}
          description={"Open-Source Enthusiast | Code Artist"}
        />
      </Flex>
    </Box>
  );
}

export default About;
