async function main() {
  const Fund = await ethers.getContractFactory("Fund")
  let upgradedContract = await upgrades.upgradeProxy("0x30379012Eba9ae49a26524Ad86AD6315C5198774", Fund)
  console.log("Your upgraded proxy is done!", upgradedContract.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error)
      process.exit(1)
  })