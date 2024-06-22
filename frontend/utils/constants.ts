import exp from "constants";
import { createThirdwebClient, defineChain, getContract } from "thirdweb";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export const client = createThirdwebClient({
    clientId:CLIENT_ID as string,
});

export const chain = defineChain(84532);

const contractAdrress = "0x6CC14037395F7B84ba4eDaF239a6D97f0DcE3CEf";
const contractABI = [
  {
    "type": "function",
    "name": "addSubject",
    "inputs": [
      {
        "type": "string",
        "name": "subjectName",
        "internalType": "string"
      },
      {
        "type": "uint256",
        "name": "marks",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "calculateCGPA",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getSubjectsCount",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTable",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "string",
            "name": "name",
            "internalType": "string"
          },
          {
            "type": "uint256",
            "name": "mark",
            "internalType": "uint256"
          }
        ],
        "internalType": "struct CGPACalculator.memo[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "removeSubject",
    "inputs": [
      {
        "type": "uint256",
        "name": "_index",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
] as const;

  export const CONTRACT = getContract({
    client:client,
    chain:chain,
    address: contractAdrress,
    abi:contractABI,
  });