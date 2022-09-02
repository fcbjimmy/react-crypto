import { useState, useEffect, useContext } from 'react';
import './styles/global.scss';
import { dataList } from './helper/data.types';
import Navbar from './components/Navbar/Navbar';
import Coins from './components/Coins/Coins';
import CoinDisplay from './components/CoinDisplay/CoinDisplay';
import { Route, Routes } from 'react-router-dom';
import { AppContext } from './context/Context';
import { coinList } from './helper/Api';
import useAxiosFetch from './hooks/useAxiosFetch';
import { SkeletonTheme } from 'react-loading-skeleton';

const App = () => {
  // const [coins, setCoins] = useState<dataList[] | null>(null);
  // const { currency } = useContext(AppContext);
  // const { dataList, isLoading } = useAxiosFetch(coinList(currency));

  // useEffect(() => {
  //   setCoins(dataList);
  // }, [dataList]);

  return (
    <>
      <Navbar />
      <SkeletonTheme baseColor='#202020' highlightColor='#444'>
        <Routes>
          <Route path='/' element={<Coins />} />
          <Route path='/:id' element={<CoinDisplay />} />
        </Routes>
      </SkeletonTheme>
    </>
  );
};

export default App;
