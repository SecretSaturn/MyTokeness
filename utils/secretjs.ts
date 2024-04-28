import { SecretNetworkClient } from "secretjs";
import { SECRET_CHAIN_ID, SECRET_LCD } from "./config";

const queryChain = new SecretNetworkClient({
  url: SECRET_LCD,
  chainId: SECRET_CHAIN_ID,
});

export { queryChain };
