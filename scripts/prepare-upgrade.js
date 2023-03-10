// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0x30379012Eba9ae49a26524Ad86AD6315C5198774'
    const Fund = await ethers.getContractFactory("Fund")
    console.log("Preparing upgrade...")
    const FundAddress = await upgrades.prepareUpgrade(proxyAddress, Fund)
    console.log("Fund at:", FundAddress)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
