# PUSH_task

## Task 1:

> Write a Solidity Smart Contract with the following capabilities:

> It should be an Upgradeable Smart Contract with ERC-1967 Transparent Upgradeable Proxy Pattern.

> The smart contract should be capable of creating new channels from the contract itself, using the Push Core Contract on Goerli Testnet.

> And lastly, the smart contract should also include a feature to emit out on-chain notifications using Push Communicator Contract on the Goerli testnet.

Contract: Fund.sol

Proxy Address: [0x30379012Eba9ae49a26524Ad86AD6315C5198774](https://goerli.etherscan.io/address/0x30379012Eba9ae49a26524Ad86AD6315C5198774)

Implementation Contract Address: [0x5835E12E9b0E07699e51bcef5CDbBAc27aaf8113](https://goerli.etherscan.io/address/0x5835e12e9b0e07699e51bcef5cdbbac27aaf8113#code)


## Task 2:
> Conduct a thorough review and document any Gas Optimizations (or security vulnerabilities) that you might find in the Push Core Smart Contract given below: 
> https://github.com/ethereum-push-notification-service/push-smart-contracts/blob/04dc260edf915aa1e81fa8e27d205bba9beb318d/contracts/EPNSCoreV1.sol

1. Old version of Solidity is used. Newer version could provide the following advantages:
  - No requirement of Safemath library, hence lower gas usage
  - Ability to use custom errors
 
2. `++i` could be used in for loop instead of `i++` to save gas

3. Use of custom errors instead of `require()` statement would lead to gas savings (requires solidity ^0.8.0)
