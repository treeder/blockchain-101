# blockchain-101

Simple smart contract example. 

* [Install web3 CLI](https://github.com/gochain/web3#install-web3)
* Set a `WEB3_PRIVATE_KEY` with some native tokens in it. For instance, if using Ethereum, it needs ETH, if using GoChain, it needs GO

```sh
web3 contract build counter.sol
web3 contract deploy Counter.bin
# copy returned address then
export WEB3_ADDRESS=0xADDRESS
web3 contract call --abi Counter.abi --wait --function counter
# should be zero
web3 contract call --abi Counter.abi --wait --function increment
# now should return 1!
```

## JavaScript interaction

`interact.js` is an example of using the contract from code. This uses the same environment variables as you used above. 

```sh
npm install ethers
node interact.js
```
