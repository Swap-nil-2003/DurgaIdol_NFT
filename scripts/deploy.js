async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  //0x288d236B902E226578c617516c82dECDf74B106E

  //1st hash: 0x90d8a7366e393dfe7deb08972993fbf2f9b2b12225cb68e2d2cd7cb066b5ddd9 