import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
require('dotenv').config()

const { ethers } = require('ethers')

export default {
    defaultNetwork: 'local',
    networks: {
        hardhat: {
            blockGasLimit: 12000000,
        },
        mumbai: {
            url: process.env.ETH_PROVIDER_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
        local: {
            url: 'http://127.0.0.1:8545',
            blockGasLimit: 12000000,
            accounts: [
                '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
            ],
        },
        arb: {
            url: 'https://arbitrum.goerli.unirep.io',
            accounts: [
                '0x0f70e777f814334daa4456ac32b9a1fdca75ae07f70c2e6cef92679bad06c88b',
            ],
        },
    },
    solidity: {
        compilers: [
            {
                version: '0.8.17',
                settings: {
                    optimizer: { enabled: true, runs: 200 },
                },
            },
        ],
    },
}
