import { QueryKey, UseQueryOptions, useQuery } from 'react-query'

import { queryChain } from '../../utils/secretjs'

const useQueryContract = <T extends object, K extends object, A = K>(
  key: QueryKey,
  contractAddress: string,
  queryMsg: T,
  options?: UseQueryOptions<K, Error, A>
) =>
  useQuery(
    key,
    () => queryChain.query.compute.queryContract({
      contract_address: contractAddress,
      query: queryMsg
    }) as K,
    options
  )

export default useQueryContract