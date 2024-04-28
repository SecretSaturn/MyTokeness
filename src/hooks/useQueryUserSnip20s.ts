import { UseQueryResult, useQuery } from "react-query";

import { ResultTokenInfo, TokenInfo } from "../../interface/snip20";
import { CONTRACT_CODE_ID } from "../../utils/constants";
import { queryChain } from "../../utils/secretjs";

interface UserSnip20 extends Partial<TokenInfo> {
  address: string;
}

const useQueryUserSnip20s = (
  walletAddress: string,
): UseQueryResult<UserSnip20[], Error> => {
  console.log(walletAddress);
  return useQuery(
    ["snip20s", walletAddress],
    async () => fetchSnip20s(walletAddress),
    { enabled: !!walletAddress, refetchOnWindowFocus: true },
  );
};

const fetchSnip20s = async (walletAddress: string) => {
  try {
    const snip20Contracts = await queryChain.query.compute.contractsByCodeId({
      code_id: CONTRACT_CODE_ID.SNIP20.toString(),
    });
    console.log(snip20Contracts);

    const filteredContracts =
      snip20Contracts?.contract_infos?.filter((contract) => {
        return contract?.contract_info?.creator?.toString() === walletAddress;
      }) || [];

    return Promise.all(
      filteredContracts.map(async (contract) => {
        console.log(contract);
        const snip20Info: any = await queryChain.query.compute.queryContract({
          contract_address: contract.contract_address || "",
          query: {
            token_info: {},
          },
        });

        return {
          address: contract.contract_address,
          name: snip20Info?.token_info?.name,
          symbol: snip20Info?.token_info?.symbol,
        };
      }),
    );
  } catch (error) {
    throw error;
  }
};

export default useQueryUserSnip20s;
