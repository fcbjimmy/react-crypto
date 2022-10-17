import React, { useEffect, useContext } from 'react';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import axios from 'axios';
import { AppContext } from '../../context/Context';
import { quotesDataType } from '../../helper/data.types';
import style from './Header.module.scss';
import SkeletonQuote from '../Skeletons/SkeletonQuote';
import SkeletonCoin from '../Skeletons/SkeletonCoin';

const getRandomNumber = (n: number) => Math.floor(Math.random() * n);

const Header = () => {
  const { isLoading, quoteData, fetchQuotes } = useContext(AppContext);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const randomQuote = quoteData[getRandomNumber(quoteData.length)];

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
