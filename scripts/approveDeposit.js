// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/Peace.sol/Peace.json");

const NFTAddress = "0x8c8CCE3b79AFbcaF8b5b03fd1EE72E5C93aE9148"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0x4D13754ea5A3841068F4a8111548efeD7b1B51d6"; // place your public address for your wallet here

async function main() {

    const NFTContract = await hre.ethers.getContractAt(tokenABI, NFTAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);
    
    const id = [1,2,3,4,5];
    
    const approveTx = await NFTContract.setApprovalForAll(fxERC721RootAddress, true);
    await approveTx.wait();


    console.log('Approval confirmed');

    for(let i = 0; i < 5; i++){
    const depositTx = await fxContract.deposit(NFTAddress, walletAddress, id[i], "0x6556");
    await depositTx.wait();
    }

    console.log("NFTs deposited");
  
  }
  
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });