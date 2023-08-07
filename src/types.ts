export type ChainInfoJSON = {
  chainId: string;
  rest: string;
  bip44: {
    coinType: number;
  };
  stakeCurrency: {
    coinDenom: string;
    coinMinimalDenom: string;
    coinDecimals: number;
  };
};

export type ChainInfo = {
  chainId?: string;
  endpoint: string;
  coinType: number;
  denom: string;
  minimalDenom: string;
  decimal: number;
};
