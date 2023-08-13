// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract Peace is ERC721A {
    
    address public owner;

    string baseuri = "https://gateway.pinata.cloud/ipfs/QmYJUb8boZ5Ffoze9xrkkEfyFgERgcdDjLNQd7ndYeg1Bz/";

    string prompt = "river, valley, mountains, city";
    
    constructor() ERC721A ("Peace", "RVM") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner , "Only Owner can mint NFTs");
        _;
    }

    function mint(uint256 amount) external payable onlyOwner {
        require(amount <= 5 , "Cannot Mint more than 5 NFTs");

        _mint(msg.sender, amount);
    }
    function burn(uint value) public 
    {
        require(value>0 && value<=5, "Can't burn this amount of tokens");
        _burn(value);
    }

    function _startTokenId() internal pure override returns (uint256) {
        return 1;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseuri;
    }

    function _promptDescription() external view returns(string memory) {
        return prompt;
    }
   
}