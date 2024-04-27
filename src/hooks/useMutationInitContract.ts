import { UseMutationResult, useMutation, useQueryClient } from 'react-query'

import { Params, instantiateContract } from '../../utils/contractInteractions'
import { useStoreState } from './storeHooks'
import { MsgInstantiateContractResponse } from 'secretjs'

const useMutationInitContract = <T extends object>(): UseMutationResult<
  MsgInstantiateContractResponse,
  Error,
  Params<T>
> => {
  const queryClient = useQueryClient()
  const walletAddress = useStoreState((state) => state.auth.connectedAddress)

  return useMutation((data) => instantiateContract(data), {
    onSettled: () =>
      queryClient.invalidateQueries(['nativeBalance', walletAddress]),
  })
}

export default useMutationInitContract
