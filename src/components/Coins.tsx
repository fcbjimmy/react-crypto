import { Result } from "../helper/data.types";
import styles from "./Coins.module.scss";

interface Props {
  coins: Result[] | null;
}

const Coins = ({ coins }: Props) => {
  console.log(coins);
  return (
    <>
      <div className={styles.container}>
        <div> heading</div>
        <p>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p>Market cap</p>

        {coins?.map((coin, index) => {
          return <div key={index}>{coin.name}</div>;
        })}
      </div>
    </>
  );
};

export default Coins;
