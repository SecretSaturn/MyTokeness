import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";

import { ResultTokenInfo } from "../../interface/snip20";
import { queryChain } from "../../utils/secretjs";

const useQuerySnip20Info = (
  contractAddress: string,
  options?: UseQueryOptions<ResultTokenInfo, Error>,
): UseQueryResult<ResultTokenInfo, Error> =>
  useQuery(
    ["tokenInfo", contractAddress],
    () =>
      queryChain.query.compute.queryContract({
        contract_address: contractAddress,
        query: {
          token_info: {},
        },
      }) as Promise<ResultTokenInfo>,
    {
      refetchOnWindowFocus: false,
      retry: 1,
      ...options,
    } as any,
  );

export default useQuerySnip20Info;
