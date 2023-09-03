import { ethers } from 'ethers'
import _config from '../../../config'
import { config } from 'dotenv'
config()

export const UNIREP_ADDRESS = '0xC2cEAF60fA88aE56fD2eC3Fa2997034c1201bF3A'
export const APP_ADDRESS = '0xf078c5Eb6925112c5155290eB53Fc1FDF5b1d47b'
export const ETH_PROVIDER_URL =
    process.env.ETH_PROVIDER_URL ?? _config.ETH_PROVIDER_URL
export const PRIVATE_KEY = process.env.PRIVATE_KEY ?? _config.PRIVATE_KEY

export const DB_PATH = process.env.DB_PATH ?? ':memory:'

export const provider = ETH_PROVIDER_URL.startsWith('http')
    ? new ethers.providers.JsonRpcProvider(ETH_PROVIDER_URL)
    : new ethers.providers.WebSocketProvider(ETH_PROVIDER_URL)
