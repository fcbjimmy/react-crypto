import { dataList } from '../../helper/data.types';
import styles from './Coins.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  coins: dataList[] | null;
}

const Coins = ({ coins }: Props) => {
  const [findCoin, setFindCoin] = useState<string>('');
  const navigate = useNavigate();

  const test = (data: React.MouseEventHandler<HTMLTableRowElement>) => {
    console.log(data);
  };

  //add debounce
  const searchCoin = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFindCoin(e.target.value);
  };

  return (
    <>
      <section className={styles.container}>
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
          <tbody>
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
                  <tr key={index} onClick={() => navigate('/' + coin.id)}>
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
      </section>
    </>
  );
};

export default Coins;
