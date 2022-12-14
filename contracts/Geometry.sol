// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Geometry is ERC721, Ownable {
    constructor () ERC721("Geometry", "GMT") {} 

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/QmcfsZCGdcXyHJP8MupMQwYuSET8TFJCHUhAaoJwe4EJuP"; 
    }

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId); 
    }
}