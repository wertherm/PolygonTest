const { expect } = require("chai");

describe("MeuToken", function () {
  it("Deve atribuir o supply total ao deployer", async function () {
    const [owner] = await ethers.getSigners();

    const MeuToken = await ethers.getContractFactory("MeuToken");
    const meuToken = await MeuToken.deploy(1000000);
    await meuToken.deployed();

    const ownerBalance = await meuToken.balanceOf(owner.address);
    expect(await meuToken.totalSupply()).to.equal(ownerBalance);
  });
});
