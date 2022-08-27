import { Result } from '../helper/data.types';
import styles from './Coins.module.scss';
import Coin from './Coin';
import { useState } from 'react';

interface Props {
  coins: Result[] | null;
}

const Coins = ({ coins }: Props) => {
  const [findCoin, setFindCoin] = useState<string>('');

  //add debounce
  const searchCoin = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFindCoin(e.target.value);
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.search}>
          <input type='text' placeholder='search' onChange={searchCoin} />
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
                }
              })
              .map((coin, index) => {
                return (
                  <tr key={index}>
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
                      <span>${coin.current_price}</span>
                    </td>
                    <td data-label='24H'>
                      <span>{coin.price_change_24h}</span>
                    </td>
                    <td data-label='Volume'>
                      <span>{coin.price_change_percentage_24h}</span>
                    </td>
                    <td data-label='Market Cap'>
                      <span>{coin.market_cap}</span>
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
