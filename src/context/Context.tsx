import { useState, createContext } from 'react';
import axios from 'axios';
import { dataList, historicData, singleCoinType, quotesDataType } from '../helper/data.types';
import { coinList, historicalData, singleCoin, motivationalQuotes } from '../helper/Api';
interface Props {
  children: React.ReactNode;
}

interface ContextType {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  coins: dataList[] | null;
  setCoins: React.Dispatch<React.SetStateAction<dataList[] | null>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: true | false;
  setIsLoading: React.Dispatch<React.SetStateAction<true | false>>;
  dataChart: historicData | null;
  fetchData: () => Promise<void>;
  quoteData: quotesDataType[];
  fetchQuotes: () => Promise<void>;
  singleCoinData: singleCoinType | null;
  fetchSingleCoin: (id: string | undefined) => Promise<void>;
  fetchHistoricData: (id: string | undefined, days: number) => Promise<void>;
}

export const AppContext = createContext({} as ContextType);

export const AppContextProvider = ({ children }: Props) => {
  const [currency, setCurrency] = useState<string>('HKD');
  const [coins, setCoins] = useState<dataList[] | null>(null);
  const [dataChart, setDataChart] = useState<historicData | null>(null);
  const [singleCoinData, setSingleCoinData] = useState<singleCoinType | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<true | false>(false);
  const [quoteData, setQuoteData] = useState<quotesDataType[]>([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(coinList(currency));
      setCoins(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const fetchSingleCoin = async (id: string | undefined) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(singleCoin(id));
      setSingleCoinData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const fetchHistoricData = async (id: string | undefined, days: number) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(historicalData(id, currency, days));
      setDataChart(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchQuotes = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(motivationalQuotes());
      setQuoteData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        currency,
        setCurrency,
        coins,
        setCoins,
        currentPage,
        setCurrentPage,
        isLoading,
        setIsLoading,
        fetchData,
        singleCoinData,
        fetchSingleCoin,
        dataChart,
        fetchHistoricData,
        quoteData,
        fetchQuotes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
