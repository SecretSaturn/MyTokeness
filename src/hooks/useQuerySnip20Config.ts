import { UseQueryOptions, useQuery } from 'react-query'

import { ResultTokenConfig } from '../../interface/snip20'
import { queryChain } from '../../utils/secretjs'

const useQuerySnip20Config = (
  contractAddress: string,
  options?: UseQueryOptions<ResultTokenConfig, Error>
) =>
  useQuery(
    ['tokenConfig', contractAddress],
    () => queryChain.query.compute.queryContract({
      contract_address: contractAddress,
      query: {
        token_config: {}
      }
    }) as Promise<ResultTokenConfig>,
    {
      enabled: !!contractAddress,
      refetchOnWindowFocus: false,
      retry: 1,
      ...options,
    }
  )

export default useQuerySnip20Config
