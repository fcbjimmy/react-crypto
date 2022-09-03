export const coinList = (currency: string, page: number): string =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`;

export const singleCoin = (id?: string): string => `https://api.coingecko.com/api/v3/coins/${id}`;

export const historicalData = (id?: string, currency?: string, days: number = 365): string =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const motivationalQuotes = () => `https://type.fit/api/quotes`;
