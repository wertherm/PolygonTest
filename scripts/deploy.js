const hre = require("hardhat");

async function main() {
  const MeuToken = await hre.ethers.getContractFactory("MeuToken");
  const meuToken = await MeuToken.deploy(1000000); // 1 milhão de tokens
  await meuToken.deployed();

  console.log(`MeuToken deployed to: ${meuToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
