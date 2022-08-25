import { Result } from '../helper/data.types';
import styles from './Coins.module.scss';
import Coin from './Coin';

interface Props {
  coins: Result[] | null;
}

const Coins = ({ coins }: Props) => {
  console.log(coins);
  return (
    <>
      <section className={styles.container}>
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
            {coins?.map((coin, index) => {
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
