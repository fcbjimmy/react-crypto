import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { singleCoin } from '../../helper/Api';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import { singleCoinType } from '../../helper/data.types';
import { AppContext } from '../../context/Context';
import CoinInfo from '../CoinInfo/CoinInfo';
import LineChart from '../Chart/LineChart';
import style from './CoinDisplay.module.scss';
const CoinDisplay = () => {
  const [data, setData] = useState<singleCoinType | null>(null);

  const { id } = useParams();
  const { currency } = useContext(AppContext);

  const { singleCoinData } = useAxiosFetch(singleCoin(id));

  useEffect(() => {
    setData(singleCoinData);
    console.log(data?.market_data.current_price.hkd);
  }, [data, id, singleCoinData]);

  return (
    <div className={style.container}>
      <CoinInfo data={data} currency={currency} />
      <LineChart data={data} />
    </div>
  );
};

export default CoinDisplay;
