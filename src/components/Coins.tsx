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
        <div className={styles.heading}>
          <p>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p>Volume</p>
          <p>Market cap</p>
        </div>
        {coins?.map((coin, index) => {
          return <Coin coin={coin} key={index} />;
        })}
      </section>
    </>
  );
};

export default Coins;
