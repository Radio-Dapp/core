interface Token {
  id: string;
  symbol: string;
  decimals: number;
}

interface WhitelistPool {
  id: string;
  token0: Token;
  token1: Token;
  sqrtPrice: string;
  liquidity: string;
  tick: string;
  feeTier: string;
  feesUSD: string;
  mints: string;
  burns: string;
  swaps: string;
  collects: string;
  ticks: string;
  price: number;
}

interface QueryResult {
  token: {
    symbol: string;
    name: string;
    volumeUSD: string;
    feesUSD: string;
    totalSupply: string;
    totalValueLockedUSD: string;
    whitelistPools: WhitelistPool[];
  };
}


interface FeedResult {
  feeds : number[];
  decimals: number[];
  timestamp: number;
}