import { useState, useEffect, useContext } from 'react';
import './styles/global.scss';
import axios from 'axios';
import { dataList } from './helper/data.types';
import Navbar from './components/Navbar';
import Coins from './components/Coins';
import CoinDisplay from './components/CoinDisplay';
import { Route, Routes } from 'react-router-dom';
import { AppContext } from './context/Context';
import { coinList } from './helper/Api';
import useAxiosFetch from './hooks/useAxiosFetch';

const url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=hkd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

const App = () => {
  const [coins, setCoins] = useState<dataList[] | null>(null);
  const { currency } = useContext(AppContext);
  const { dataList } = useAxiosFetch(coinList(currency));
  console.log(dataList, 'hi');

  useEffect(() => {
    // axios
    //   .get(coinList(currency))
    //   .then((res) => {
    //     setCoins(res.data);
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setCoins(dataList);
  }, [dataList]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/:id' element={<CoinDisplay />} />
      </Routes>
    </>
  );
};

export default App;
