import { useState, useEffect } from 'react';
import './styles/global.scss';
import axios from 'axios';
import { Result } from './helper/data.types';
import Navbar from './components/Navbar';
import Coins from './components/Coins';

const url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=hkd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

const App = () => {
  const [coins, setCoins] = useState<Result[] | null>(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Coins coins={coins} />
    </>
  );
};

export default App;
