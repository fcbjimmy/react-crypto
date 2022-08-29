import { singleCoinType } from '../../helper/data.types';
import styles from './CoinInfo.module.scss';

interface Props {
  data: singleCoinType | null;
  currency: string;
}

const CoinInfo = ({ data, currency }: Props) => {
  const number = data?.market_data?.price_change_percentage_24h || 0;

  console.log(data);
  return (
    <section className={styles.container}>
      <div className={styles.rank}>
        <p>Rank #{data?.market_cap_rank}</p>
      </div>
      <img src={data?.image.large} alt={data?.name} className={styles.logo} />
      <h1>
        {data?.name} ({data?.symbol.toUpperCase()}) $
        {data?.market_data.current_price[currency.toLowerCase()].toLocaleString('en-US')}
      </h1>
      <h1 className={number > 0 ? styles.positive : styles.negative}>
        {data?.market_data.price_change_percentage_24h_in_currency[currency.toLowerCase()].toFixed(
          2
        )}
      </h1>
      <h3>About</h3>
      <p>{data?.description.en.split('.')[0] + '.'}</p>
      <table>
        <thead>
          <tr>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>14d</th>
            <th>30d</th>
            <th>1yr</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {data?.market_data.price_change_percentage_1h_in_currency[
                currency.toLowerCase()
              ].toFixed(2)}
            </td>
            <td>
              {data?.market_data.price_change_percentage_24h_in_currency[
                currency.toLowerCase()
              ].toFixed(2)}
            </td>
            <td>
              {data?.market_data.price_change_percentage_7d_in_currency[
                currency.toLowerCase()
              ].toFixed(2)}
            </td>
            <td>
              {data?.market_data.price_change_percentage_14d_in_currency[
                currency.toLowerCase()
              ].toFixed(2)}
            </td>
            <td>
              {data?.market_data.price_change_percentage_30d_in_currency[
                currency.toLowerCase()
              ].toFixed(2)}
            </td>
            <td>
              {data?.market_data.price_change_percentage_1y_in_currency[
                currency.toLowerCase()
              ].toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default CoinInfo;
