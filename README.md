# ERC721 Goerli to Mumbai Bridge Using fxPortal
In this project, we have created 5 custom NFTs in our goerli ethereum network using ERC721A using various functions like mint, deploy, prompt generation etc. We have created files for transferring NFTs over FXPortal Bridge from Goerli to Mumbai Testnet

## Steps

### Clone the Repository
use the link to copy this repository into your own system.

### Install
`npm i` -- Install the dependencies

### Compile
`npx hardhat compile` 

This will compile your contract and generate the JSON files.

### Deploy on Goerli Testnet

Make sure hardhat.config.js contains the URL and private key for deployment on network goerli.

`npx hardhat run scripts/deploy.js --network goerli`

This command will deploy our contract onto the ethereum goerli network and we will in turn get the contract deploy address which we can use to mint and burn NFTs.


### Mint NFTs on Goerli Testnet
`Note: `

- The contract address and wallet address must be provided to mint.js script.
 
`npx hardhat run scripts/mint.js --network goerli`

This scripts mints the NFTs to your wallet address.

### Approve and Deposit To Mumbai Testnet

`Note:`

- The contract address and wallet address must be provided to approveDeposit.js script.
- fxERC71RootAddress must be provided.
  
`npx hardhat run scripts/approveDeposit.js --network goerli`

- This Script approves and bridges our NFTs from goerli to Mumbai testnet.

### getBalance of Mumbai Testnet

`Note:`

- The contract address of NFTs deployment and wallet address must be provided to getBalance.js script.

`npx hardhat run scripts/getBalance.js --network mumbai`

- This script fetches the balance of our wallet from mumbai testnet and display on screen.

## Functions
### `mint`
- A hardhat script is used for minting NFTs. In this project, The NFTs are minted all at once.

### `approveDeposit`
- This hardhat script is used to approve the transfer of tokens and Deposit them on Mumbai Testnet.

### `getBalance`
- This script is used to return the balance of the wallet address specified.

### `_promptDescription`
- This function returns the prompt used to generate the images.


## Authors
Aditya Bhatt
adityabhatt05101007@gmail.com


## Video Walkthrough
https://drive.google.com/drive/folders/1GJXt5AyXDQgXUPKAggvmjFAW3j2BgXaK?usp=sharing
