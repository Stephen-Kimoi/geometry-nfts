const { ethers } = require("hardhat"); 
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers"); 
const { expect } = require("chai"); 

describe("Geometry contract", function() {

    async function deployedGeometry() {
        const [owner, addressOne] = await ethers.getSigners(); 
        const geometryFactory = await ethers.getContractFactory("Geometry"); 
        const geometryContract = await geometryFactory.deploy(); 

        await geometryContract.deployed(); 

        return { owner, addressOne, geometryContract }
    }; 
    
    it("Owner of the contract must be equal to the one who deployed", async() => {
        const { geometryContract, owner } = await loadFixture(deployedGeometry); 
        expect(await geometryContract.owner()).to.equal(await owner.address); 
    }); 

    it("Safemint should transfer ownership of the NFT from one address to the other", async function() {
        const { geometryContract, owner} = await loadFixture(deployedGeometry); 
        expect(await geometryContract.safeMint(owner.address, 1)).to.emit(geometryContract, "Transfer"); 
    }); 
})