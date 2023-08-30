// compile : 30/08/23 - 12:42
export const contractAddress = "0xd63b01fc32E9eC95D7203e1e71702b90d7781024";

export const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "candidateCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "candidates",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "candidateName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "partyName",
        type: "string",
      },
      {
        internalType: "string",
        name: "menifesto",
        type: "string",
      },
      {
        internalType: "string",
        name: "partyLogo",
        type: "string",
      },
      {
        internalType: "string",
        name: "candidateImage",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Voting.PHASE",
        name: "x",
        type: "uint8",
      },
    ],
    name: "changeState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllCandidates",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "candidateName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "voteCount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "partyName",
            type: "string",
          },
          {
            internalType: "string",
            name: "menifesto",
            type: "string",
          },
          {
            internalType: "string",
            name: "partyLogo",
            type: "string",
          },
          {
            internalType: "string",
            name: "candidateImage",
            type: "string",
          },
        ],
        internalType: "struct Voting.Candidate[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCandidateNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentElectionState",
    outputs: [
      {
        internalType: "enum Voting.PHASE",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWinners",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_candidateName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_partyName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_menifesto",
        type: "string",
      },
      {
        internalType: "string",
        name: "_partyLogo",
        type: "string",
      },
      {
        internalType: "string",
        name: "_candidateImage",
        type: "string",
      },
    ],
    name: "listingCandidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_aadhar",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
    ],
    name: "registerVoter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum Voting.PHASE",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_contestantId",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "voterCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "voters",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "aadharNumber",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "hasVoted",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "vote",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isRegistered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
