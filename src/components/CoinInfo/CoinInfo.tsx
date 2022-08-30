import { singleCoinType } from '../../helper/data.types';
import style from './CoinInfo.module.scss';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

interface Props {
  data: singleCoinType | null;
  currency: string;
}

const CoinInfo = ({ data, currency }: Props) => {
  const number = data?.market_data?.price_change_percentage_24h || 0;

  console.log(data);
  return (
    <section className={style.container}>
      <div className={style.rankAndLogo}>
        <div className={style.rank}>
          <p>Rank #{data?.market_cap_rank}</p>
        </div>
        <img src={data?.image.large} alt={data?.name} className={style.logo} />
      </div>
      <div className={style.market}>
        <span className={style.currentPrice}>
          {data?.name} ({data?.symbol.toUpperCase()}) $
          {data?.market_data.current_price[currency.toLowerCase()].toLocaleString('en-US')}
        </span>
        <span className={number > 0 ? style.positive : style.negative}>
          {data?.market_data.price_change_percentage_24h_in_currency[
            currency.toLowerCase()
          ].toFixed(2)}
          %{number > 0 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </span>
      </div>
      <div className={style.description}>
        <h3>About</h3>
        <p>{data?.description.en.split('.')[0] + '.'}</p>
      </div>
      <div className={style.table}>
        <div className={style.item}>1h</div>
        <div className={style.item}>24h</div>
        <div className={style.item}>7d</div>
        <div className={style.item}>14d</div>
        <div className={style.item}>30d</div>
        <div className={style.item}>1yr</div>
        <div className={style.item}>
          {data?.market_data.price_change_percentage_1h_in_currency[currency.toLowerCase()].toFixed(
            2
          )}
        </div>
        <div className={style.item}>
          {data?.market_data.price_change_percentage_24h_in_currency[
            currency.toLowerCase()
          ].toFixed(2)}
        </div>
        <div className={style.item}>
          {data?.market_data.price_change_percentage_7d_in_currency[currency.toLowerCase()].toFixed(
            2
          )}
        </div>
        <div className={style.item}>
          {data?.market_data.price_change_percentage_14d_in_currency[
            currency.toLowerCase()
          ].toFixed(2)}
        </div>
        <div className={style.item}>
          {data?.market_data.price_change_percentage_30d_in_currency[
            currency.toLowerCase()
          ].toFixed(2)}
        </div>
        <div className={style.item}>
          {data?.market_data.price_change_percentage_1y_in_currency[currency.toLowerCase()].toFixed(
            2
          )}
        </div>
      </div>
      <div className={style.details}>
        <div className={style.info}>
          <span className={style.tittle}>24 Hour Low</span>
          <span>${data?.market_data.low_24h[currency.toLowerCase()].toLocaleString('en-US')}</span>
        </div>
        <div className={style.info}>
          <span className={style.tittle}>24 Hour High</span>
          <span>${data?.market_data.high_24h[currency.toLowerCase()].toLocaleString('en-US')}</span>
        </div>
        <div className={style.info}>
          <span className={style.tittle}>Market Cap</span>
          <span>
            ${data?.market_data.market_cap[currency.toLowerCase()].toLocaleString('en-US')}
          </span>
        </div>
        <div className={style.info}>
          <span className={style.tittle}>Circulating Supply</span>
          <span>{data?.market_data.circulating_supply.toLocaleString('en-US')}</span>
        </div>
      </div>
    </section>
  );
};

export default CoinInfo;
