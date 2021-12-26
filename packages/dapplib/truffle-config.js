require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note snow huge grace industry fringe two'; 
let testAccounts = [
"0x0b580ef536c9c84632cb585bfb1b11bb7342b59eec700b0eb1c947d5b46aaa2c",
"0x8843c10df471f53ae5496d5d0a7b646feab7e75b1575db3104d83864172d48f9",
"0x6a75debec7c2e41652128a1c0447a8601339101b84452e21e372bbf9ed0c7847",
"0x3e9c6a90f89d297cffc7b812e4483fafc6ee22559bf1da0a422be7793b46a669",
"0x6a12e132836522d0f0686f25968699a0588f8d18b2f9c0377e6da00d3e0bcc1a",
"0xafba14f938b06497249e12e9a02f03abe2c09cf1f79e56ceaeb3b7c0655ea3b0",
"0xada02081220fb65fc9fb75ef6e2e858807bfaeb1d8b23811fcb2c1bc5187f5f1",
"0xe763709273f691c8f178ae82f7dd23f68639bdb1a7b5291df58dcdc25feddcb1",
"0x5abafaffb87438315075f017b8074162c8217d11f660d0c82ef4c6e1230076c9",
"0x57a7169d7e20ae204bc02080a189dee12763fd9e3bdd3cb69e98ba9db893178a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


