import axios from 'axios';

// https://fcd.terra.dev/wasm/contracts/terra14f5y8j5udr48a3prakm3j8st96u3rczuqtlc55/store?query_msg=%7B%22all_nft_info%22:%7B%22token_id%22:%222501%22%7D%7D
export function queryNftList(tokenId: string) {
  const queryMsg = {
    all_nft_info: {
      token_id: tokenId,
    },
  };
  const encodeQueryMsg = JSON.stringify(queryMsg);
  const requestParams = {
    params: {
      query_msg: encodeQueryMsg,
    },
  };
  return axios.get<any>(
    'https://fcd.terra.dev/wasm/contracts/terra14f5y8j5udr48a3prakm3j8st96u3rczuqtlc55/store',
    requestParams
  );
}