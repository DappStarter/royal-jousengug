require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success stove dash still hole hover desert flush gauge'; 
let testAccounts = [
"0x42ffcb9cb51d2416c354d9c4c850fa0756df453bbf83448a15c5857255567b36",
"0x7dd6604b56f2b50d8a8073984324360857f92aafa546baf831910914c697282f",
"0xdead8bf34df21113adc1d1c326b7ba619bc4dd0afb856f6e03118cfe9c089c6d",
"0xfe2506bae6f48e5148fb8994e8f8e90615a2b28d2b18d98fac08123a72e76d7e",
"0x867caff8ac7b3b3f7f3a6f8d7b9485a8c9b5a373cc060377d595cce97bef49fa",
"0x1a3073ebc6a53ce31158dc11d28ec333db8295ebf5f7927f6673d61d2ff2df60",
"0xdfc7fd89ae4f8dae45d36293b52abb565fedd40b3d4f1c62818cc54719dc2603",
"0xe70fd4948cf5b18d6c9e1e6cecbc6477a23f0131330158db190e9c40aeec7c74",
"0x167d6b993e87a2be2ffb812397bc8eca3fa057b237cebd8e1b77de9b65fd577f",
"0xd183f17bda3c0e4cf641f26e2c860b39e848eae8bf061eeac703ed221f4cfc68"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
