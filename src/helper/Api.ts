export const coinList = (currency: string): string =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

export const singleCoin = (id?: string): string => `https://api.coingecko.com/api/v3/coins/${id}`;
