import React, { useEffect, useState } from 'react';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import { motivationalQuotes } from '../../helper/Api';
import { quotesDataType } from '../../helper/data.types';
import style from './Header.module.scss';
import SkeletonQuote from '../Skeletons/SkeletonQuote';
import SkeletonCoin from '../Skeletons/SkeletonCoin';

const getRandomNumber = (n: number) => Math.floor(Math.random() * n);

const Header = () => {
  const [quotes, setQuotes] = useState<quotesDataType[]>([]);
  const { quoteData, isLoading } = useAxiosFetch(motivationalQuotes());

  useEffect(() => {
    setQuotes(quoteData);
  }, [quotes, quoteData]);

  const randomQuote = quotes[getRandomNumber(quotes.length)];

  return (
    <>
      {isLoading && <SkeletonQuote />}
      {!isLoading && (
        <div className={style.content}>
          <h1>"{randomQuote?.text}"</h1>
          <h3>-{randomQuote?.author}</h3>
        </div>
      )}
    </>
  );
};

export default Header;
