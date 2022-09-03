import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './skeleton.scss';

function SkeletonQuote() {
  return (
    <div className='container'>
      <div className='text'>
        <Skeleton height={50} width='56rem' />
      </div>
      <div className='text'>
        <Skeleton height={30} width='10rem' />
      </div>
    </div>
  );
}

export default SkeletonQuote;
