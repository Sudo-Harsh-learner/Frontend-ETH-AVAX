# CGPA Calculator

## Overview

This project implements a CGPA Calculator using blockchain technology. It consists of a frontend application built with Next.js for user interaction and a backend smart contract developed with Solidity using Hardhat for Ethereum blockchain integration.

## Features 

- Add Subjects: Users can add subjects along with their marks.
- Calculate CGPA: The smart contract calculates the Cumulative Grade Point Average (CGPA) based on the subjects added.
- View Subject List: Displays the list of subjects added and their respective marks.

# Technology Used

## Frontend
- Next.js
- React
- TypeScript
- Thirdweb SDK for blockchain interactions

## Backend
- Solidity
- Hardhat
- Ethereum blockchain

## Getting Started

Create a project using this example:

```bash
npx thirdweb create --contract --template hardhat-javascript-starter
```

You can start editing the page by modifying `contracts/Contract.sol`.

To add functionality to your contracts, you can use the `@thirdweb-dev/contracts` package which provides base contracts and extensions to inherit. The package is already installed with this project. Head to our [Contracts Extensions Docs](https://portal.thirdweb.com/contractkit) to learn more.

## Building the project

After any changes to the contract, run:

```bash
npm run build
```

to compile your contracts. This will also detect the [Contracts Extensions Docs](https://portal.thirdweb.com/contractkit) detected on your contract.

## Deploying Contracts

When you're ready to deploy your contracts, just run one of the following command to deploy you're contracts:

```bash
npm run deploy
# or
npm thirdweb deploy
```

## Create Frontend

When you're ready to create the frontend just got to other directory or to root of current directory and create a next js project.

```bash
npm create-next-app project-name
```
Once it is done then start building the front-end in that project.

## Run 

To run the frontend part go to terminal and enter:
```bash
npm run dev
```

## Acknowledgements

- Next.js Documentation
- Hardhat Documentation
- Thirdweb Documentation

## Contact

For issues or inquiries, please contact [harshdeepsingh2809@gmail.com].

## Authors

Contributors names and contact info
- [@Harshdeep Singh](https://github.com/Sudo-Harsh-learner)
