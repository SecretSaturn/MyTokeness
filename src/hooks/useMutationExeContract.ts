import { useMutation, useQueryClient } from "react-query";

import {
  ExecuteContractParams,
  executeContract,
} from "../../utils/contractInteractions";

import { useStoreState } from "./storeHooks";
import { MsgExecuteContractResponse } from "secretjs";

const useMutationExeContract = <T extends object>() => {
  const queryClient = useQueryClient();
  const walletAddress = useStoreState((state) => state.auth.connectedAddress);

  return useMutation<
    MsgExecuteContractResponse,
    Error,
    ExecuteContractParams<T>,
    unknown
  >((params: ExecuteContractParams<T>) => executeContract(params), {
    onSettled: () => {
      queryClient.invalidateQueries(["nativeBalance", walletAddress]);
    },
  });
};

export default useMutationExeContract;
