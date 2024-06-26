import {
  MsgExecuteContractResponse,
  MsgInstantiateContractResponse,
} from "secretjs";
import keplr from "./keplr";
import { max } from "date-fns";

export type Params<T> = {
  initMsg: T;
  label: string;
  codeId: number;
  maxGas: string;
};

const instantiateContract = async <T extends Record<keyof T, unknown>>(
  data: Params<T>,
): Promise<MsgInstantiateContractResponse> => {
  const { initMsg, label, codeId, maxGas } = data;

  const signingClient = await keplr.createSigningClient();

  try {
    const tx = await signingClient.tx.compute.instantiateContract(
      {
        sender: signingClient.address,
        code_id: codeId,
        init_msg: initMsg,
        label: label,
      },
      {
        gasLimit: Number(maxGas),
      },
    );
    console.log(tx);
    const contractAddress = tx?.arrayLog?.find(
      (log) => log.type === "message" && log.key === "contract_address",
    )?.value;
    return MsgInstantiateContractResponse.fromPartial({
      address: contractAddress,
    });
  } catch (error) {
    throw error;
  }
};

export type ExecuteContractParams<T> = {
  maxGas: string;
  contractAddress: string;
  handleMsg: T;
};

const executeContract = async <T extends Record<keyof T, unknown>>(
  params: ExecuteContractParams<T>,
): Promise<MsgExecuteContractResponse> => {
  const { handleMsg, contractAddress, maxGas } = params;
  const signingClient = await keplr.createSigningClient();

  try {
    const tx = await signingClient.tx.compute.executeContract(
      {
        sender: signingClient.address,
        contract_address: contractAddress,
        msg: handleMsg,
      },
      {
        gasLimit: Number(maxGas),
      },
    );
    return MsgExecuteContractResponse.fromPartial({});
  } catch (error) {
    throw error;
  }
};

export { instantiateContract, executeContract };
