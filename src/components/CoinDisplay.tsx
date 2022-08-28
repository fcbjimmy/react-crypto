import { useContext, useEffect, useState } from 'react';
import styles from './CoinDisplay.module.scss';
import { useParams } from 'react-router-dom';
import { singleCoin } from '../helper/Api';
import useAxiosFetch from '../hooks/useAxiosFetch';
import { singleCoinType } from '../helper/data.types';
import { AppContext } from '../context/Context';
const CoinDisplay = () => {
  const [data, setData] = useState<singleCoinType | null>(null);
  const { id } = useParams();
  const { currency } = useContext(AppContext);

  const { singleCoinData } = useAxiosFetch(singleCoin(id));
  console.log(currency, 'currency');

  useEffect(() => {
    setData(singleCoinData);
    console.log(data?.market_data.current_price.hkd);
  }, [data, id, singleCoinData]);

  return (
    <section className={styles.container}>
      <img src={data?.image.large} />
      <h1>{data?.name}</h1>
      <h1>${data?.market_data.current_price[currency.toLowerCase()]}</h1>
    </section>
  );
};

export default CoinDisplay;
