import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './skeleton.scss';

function SkeletonCoin() {
  return (
    <div className='container'>
      <div className='margin'>
        <Skeleton circle width={160} height={160} />
      </div>
      <div className='margin'>
        <Skeleton width='30%' />
      </div>
      <div className='margin'>
        <Skeleton count={3} width='80%' />
      </div>
      <div className='margin'>
        <Skeleton height={50} />
      </div>
      <div className='margin'>
        <Skeleton height={80} />
      </div>
    </div>
  );
}

export default SkeletonCoin;
