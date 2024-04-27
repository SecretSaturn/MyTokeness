import { SecretNetworkClient } from 'secretjs'

export const SECRET_CHAIN_ID = "https://lcd.mainnet.secretsaturn.net"
export const SECRET_LCD = "secret-4"

const queryChain = new SecretNetworkClient({
    url: SECRET_CHAIN_ID,
    chainId: SECRET_LCD,
  })

export { queryChain }
