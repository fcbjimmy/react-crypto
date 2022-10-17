import { useContext } from 'react';
import { singleCoinType } from '../../helper/data.types';
import style from './CoinInfo.module.scss';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import SkeletonCoin from '../Skeletons/SkeletonCoin';
import { AppContext } from '../../context/Context';
const CoinInfo = () => {
  const { currency, isLoading, singleCoinData } = useContext(AppContext);

  const number = singleCoinData?.market_data?.price_change_percentage_24h || 0;

  return (
    <>
      {isLoading && (
        <section className={style.container}>
          <SkeletonCoin />
        </section>
      )}
      {!isLoading && (
        <section className={style.container}>
          <div className={style.rankAndLogo}>
            <div className={style.rank}>
              <p>Rank #{singleCoinData?.market_cap_rank}</p>
            </div>
            <img
              src={singleCoinData?.image.large}
              alt={singleCoinData?.name}
              className={style.logo}
            />
          </div>
          <div className={style.market}>
            <span className={style.currentPrice}>
              {singleCoinData?.name} ({singleCoinData?.symbol.toUpperCase()}) $
              {singleCoinData?.market_data.current_price[currency.toLowerCase()].toLocaleString(
                'en-US'
              )}
            </span>
            <span className={number > 0 ? style.positive : style.negative}>
              {singleCoinData?.market_data.price_change_percentage_24h_in_currency[
                currency.toLowerCase()
              ].toFixed(2)}
              %{number > 0 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </span>
          </div>
          <div className={style.description}>
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: singleCoinData?.description.en.split('. ')[0] + '.',
              }}
            />
          </div>
          <div className={style.table}>
            <div className={style.item}>1h</div>
            <div className={style.item}>24h</div>
            <div className={style.item}>7d</div>
            <div className={style.item}>14d</div>
            <div className={style.item}>30d</div>
            <div className={style.item}>1yr</div>
            <div className={style.item}>
              {singleCoinData?.market_data.price_change_percentage_1h_in_currency[
                currency.toLowerCase()
              ].toFixed(2)}
            </div>
            <div className={style.item}>
              {singleCoinData?.market_data.price_change_percentage_24h_in_currency[
                currency.toLowerCase()
              ].toFixed(2)}
            </div>
            <div className={style.item}>
              {singleCoinData?.market_data.price_change_percentage_7d_in_currency[
                currency.toLowerCase()
              ].toFixed(2)}
            </div>
            <div className={style.item}>
              {singleCoinData?.market_data.price_change_percentage_14d_in_currency[
                currency.toLowerCase()
              ].toFixed(2)}
            </div>
            <div className={style.item}>
              {singleCoinData?.market_data.price_change_percentage_30d_in_currency[
                currency.toLowerCase()
              ].toFixed(2)}
            </div>
            <div className={style.item}>
              {singleCoinData?.market_data.price_change_percentage_1y_in_currency[
                currency.toLowerCase()
              ].toFixed(2)}
            </div>
          </div>
          <div className={style.details}>
            <div className={style.info}>
              <span className={style.tittle}>24 Hour Low</span>
              <span>
                $
                {singleCoinData?.market_data.low_24h[currency.toLowerCase()].toLocaleString(
                  'en-US'
                )}
              </span>
            </div>
            <div className={style.info}>
              <span className={style.tittle}>24 Hour High</span>
              <span>
                $
                {singleCoinData?.market_data.high_24h[currency.toLowerCase()].toLocaleString(
                  'en-US'
                )}
              </span>
            </div>
            <div className={style.info}>
              <span className={style.tittle}>Market Cap</span>
              <span>
                $
                {singleCoinData?.market_data.market_cap[currency.toLowerCase()].toLocaleString(
                  'en-US'
                )}
              </span>
            </div>
            <div className={style.info}>
              <span className={style.tittle}>Circulating Supply</span>
              <span>{singleCoinData?.market_data.circulating_supply.toLocaleString('en-US')}</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CoinInfo;
