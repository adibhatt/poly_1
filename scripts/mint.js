// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Peace.sol/Peace.json");
require('dotenv').config()

const tokenAddress = "0x8c8CCE3b79AFbcaF8b5b03fd1EE72E5C93aE9148"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x4D13754ea5A3841068F4a8111548efeD7b1B51d6"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  
    const tx = await token.mint(5);
    await tx.wait();

    console.log("You now have: " + await token.balanceOf(walletAddress) + " NFTs");

    console.log("Prompt: ", await NFT._promptDescription());
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });