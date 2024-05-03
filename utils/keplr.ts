import { Keplr as IKeplr } from "@keplr-wallet/types";
import { SECRET_CHAIN_ID, SECRET_LCD } from "./config";
import { SecretNetworkClient } from "secretjs";

declare global {
  interface Window {
    keplr: IKeplr;
    getOfflineSigner: any;
    getEnigmaUtils: any;
  }
}

interface ErrorResponse {
  message: string;
}

interface Response {
  success?: boolean;
  error?: ErrorResponse;
}

const getKeplr = () => {
  return window.keplr;
};

const getGetOfflineSigner = (id: string) => {
  return window.keplr.getOfflineSignerOnlyAmino(id);
};

const getEnigmaUtils = (id: string | undefined) => {
  return window.getEnigmaUtils(id);
};

const connect = async (): Promise<Response> => {
  const keplr = getKeplr();

  if (!keplr) {
    throw new Error("Kelpr not installed.");
  }

  try {
    await keplr.enable(SECRET_CHAIN_ID as string);
    return { success: true };
  } catch (error) {
    throw error;
  }
};

const getAccounts = async () => {
  try {
    const keplrOfflineSigner = getGetOfflineSigner(SECRET_CHAIN_ID);
    const accounts = await keplrOfflineSigner.getAccounts();

    return { accounts, signer: keplrOfflineSigner };
  } catch (error) {
    throw error;
  }
};

const createSigningClient = async (): Promise<SecretNetworkClient> => {
  const { accounts, signer } = await getAccounts();

  try {
    const utils = getEnigmaUtils(SECRET_CHAIN_ID);
    return new SecretNetworkClient({
      url: SECRET_LCD,
      chainId: SECRET_CHAIN_ID,
      wallet: signer,
      walletAddress: accounts[0].address,
      encryptionUtils: utils,
    });
  } catch (error) {
    throw error;
  }
};

const getSnip20ViewingKey = async (contractAddress: string) => {
  const keplr = getKeplr();

  try {
    return await window.keplr.getSecret20ViewingKey(
      SECRET_CHAIN_ID,
      contractAddress,
    );
  } catch (error) {
    throw error;
  }
};

const suggestToken = async (contractAddress: string) => {
  const keplr = getKeplr();

  try {
    await keplr.suggestToken(SECRET_CHAIN_ID, contractAddress);
  } catch (error) {
    throw error;
  }
};

export default {
  getKeplr,
  connect,
  getAccounts,
  createSigningClient,
  getSnip20ViewingKey,
  suggestToken,
  getEnigmaUtils,
};
