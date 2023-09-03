import { ethers } from 'ethers'
import _config from '../../../config'
import { config } from 'dotenv'
config()

export const UNIREP_ADDRESS = '0x4D137bb44553d55AE6B28B5391c6f537b06C9cc3'
export const APP_ADDRESS = '0x57D445fEA3c06b83C1a88ac00fbbdeA0b4cc90A6'
export const ETH_PROVIDER_URL =
    process.env.ETH_PROVIDER_URL ?? _config.ETH_PROVIDER_URL
export const PRIVATE_KEY = process.env.PRIVATE_KEY ?? _config.PRIVATE_KEY

export const DB_PATH = process.env.DB_PATH ?? ':memory:'

export const provider = ETH_PROVIDER_URL.startsWith('http')
    ? new ethers.providers.JsonRpcProvider(ETH_PROVIDER_URL)
    : new ethers.providers.WebSocketProvider(ETH_PROVIDER_URL)
