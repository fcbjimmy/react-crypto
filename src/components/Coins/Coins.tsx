import { useContext, useEffect } from 'react';
import { dataList } from '../../helper/data.types';
import styles from './Coins.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import { coinList } from '../../helper/Api';
import { AppContext } from '../../context/Context';
import { ClipLoader } from 'react-spinners';
import Header from '../Header/Header';

const Coins = () => {
  const [coins, setCoins] = useState<dataList[]>([]);
  const [findCoin, setFindCoin] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const { currency } = useContext(AppContext);
  const { dataList, isLoading } = useAxiosFetch(coinList(currency, page));
  const navigate = useNavigate();

  useEffect(() => {
    setCoins((prev) => [...prev, ...dataList]);
  }, [currency, dataList]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const searchCoin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFindCoin(e.target.value);
  };

  return (
    <>
      <section className={styles.container}>
        <Header />
        <div className={styles.search}>
          <input type='text' placeholder='Search' onChange={searchCoin} />
        </div>
        <table className={styles.tableContent}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price</th>
              <th>24H</th>
              <th>Volume</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {coins
              ?.filter((data) => {
                if (findCoin === '') {
                  return data;
                } else if (data.name.toLowerCase().includes(findCoin)) {
                  return data;
                } else if (data.symbol.toLowerCase().includes(findCoin)) {
                  return data;
                }
              })
              .map((coin, index) => {
                return (
                  <tr
                    key={index}
                    className={styles.tableRow}
                    onClick={() => navigate('/' + coin.id)}
                  >
                    <td data-label='Coin'>
                      <span className={styles.image}>
                        <img src={coin.image} alt={coin.name} />
                        <div>
                          <p>{coin.name}</p>
                          <p>{coin.symbol}</p>
                        </div>
                      </span>
                    </td>
                    <td data-label='Price'>
                      <span>${coin.current_price.toLocaleString('en-US')}</span>
                    </td>
                    <td
                      data-label='24H'
                      className={
                        coin.price_change_percentage_24h > 0 ? styles.positive : styles.negative
                      }
                    >
                      <span>{coin.price_change_percentage_24h.toFixed(2)}%</span>
                    </td>
                    <td data-label='Volume'>
                      <span>${coin.total_volume.toLocaleString('en-US')}</span>
                    </td>
                    <td data-label='Market Cap'>
                      <span>${coin.market_cap.toLocaleString('en-US')}</span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {isLoading && <ClipLoader color='#fff' />}
      </section>
    </>
  );
};

export default Coins;
