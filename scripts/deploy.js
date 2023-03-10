const {ethers, upgrades} = require("hardhat");

async function main() {
    const Fund = await ethers.getContractFactory("Fund")
    console.log("Deploying Fund, ProxyAdmin, and then Proxy...")
    const proxy = await upgrades.deployProxy(Fund, [], { initializer: "initialize" })
    console.log("Proxy of Fund deployed to:", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
