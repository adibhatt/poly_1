require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ["3bc36464b2cef0aecb84776c5c2be92a61c1e7e4fe32abffd3fc4875f0cc285c"],
    },
    goerli: {
      url: 'https://ethereum-goerli.publicnode.com',
      accounts: ["3bc36464b2cef0aecb84776c5c2be92a61c1e7e4fe32abffd3fc4875f0cc285c"],
    },
  }
};
