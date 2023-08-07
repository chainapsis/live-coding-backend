export type ChainInfoJSON = {
    chainId: string;
    rest: string;
    stakeCurrency: {
        coinDenom: string;
        coinMinimalDenom: string;
        coinDecimals: number;
    }
};