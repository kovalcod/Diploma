const{ Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('14bf6f27ef9c5999d8e80ca72764a8a388f307ba85fb1083555ee41816a90d06');
const myWalletAddress = myKey.getPublic('hex');


let kovalcodCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
kovalcodCoin.addTransaction(tx1);


console.log('\n Starting the miner...');
kovalcodCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of xavier is', kovalcodCoin.getBalanceOfAddress(myWalletAddress));


