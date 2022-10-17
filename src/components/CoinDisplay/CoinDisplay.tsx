import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { singleCoin } from '../../helper/Api';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import { singleCoinType } from '../../helper/data.types';
import { AppContext } from '../../context/Context';
import CoinInfo from '../CoinInfo/CoinInfo';
import LineChart from '../Chart/LineChart';
import style from './CoinDisplay.module.scss';
import Skeleton from 'react-loading-skeleton';

const CoinDisplay = () => {
  // const [data, setData] = useState<singleCoinType | null>(null);
  const { id } = useParams();
  const { currency, fetchSingleCoin, isLoading, singleCoinData } = useContext(AppContext);

  // const { singleCoinData, isLoading } = useAxiosFetch(singleCoin(id));

  // useEffect(() => {
  //   setData(singleCoinData);
  // }, [data, id, singleCoinData]);

  useEffect(() => {
    fetchSingleCoin(id);
  }, [id]);

  return (
    <div className={style.container}>
      <CoinInfo />
      <LineChart id={id} />
    </div>
  );
};

export default CoinDisplay;
