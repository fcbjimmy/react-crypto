import { Result } from '../helper/data.types';
import styles from './Coin.module.scss';

interface Props {
  coin: Result;
}

const Coin = ({ coin }: Props) => {
  console.log(coin);
  return (
    <div className={styles.row}>
      <div>
        <img src={coin.image} alt={coin.name} />
        <p>Symbol: {coin.symbol}</p>
      </div>
      <p>{coin.current_price}</p>
      <p>{coin.price_change_24h}</p>
      <p>{coin.price_change_percentage_24h}</p>
      <p>{coin.market_cap}</p>
    </div>
  );
};

export default Coin;
