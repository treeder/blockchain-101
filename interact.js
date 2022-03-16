import { ethers } from "ethers"

const provider = new ethers.providers.JsonRpcProvider('https://rpc.gochain.io')
let wallet = new ethers.Wallet(process.env.WEB3_PRIVATE_KEY, provider)

import abi from './Counter.abi.json' assert {type: "json"}
let contract = new ethers.Contract(process.env.WEB3_ADDRESS, abi, wallet)

let counter = await contract.counter()
console.log("before increment:", counter.toNumber())

let incResponse = await contract.increment()
let inc2 = await incResponse.wait()

counter = await contract.counter()
console.log("after increment:", counter.toNumber())
