const Web3 = require('web3');
const rpcUrl = 'http://127.0.0.1:7545';
const web3 = new Web3(rpcUrl);

web3.eth.getBlockNumber().then(console.log);

const account1 = "0xeb9eef3666fc009F9e6f1AAEc1E14b28CA60E109";
const account2 = "0x7382fBBd0c6fe3b2396A17F4BCAF2f3a51332bC3";

web3.eth.sendTransaction({from: account1, to: account2, value: web3.utils.toWei('1','ether')});

