import { Result } from '../helper/data.types';
import styles from './Coin.module.scss';
import { useParams } from 'react-router-dom';
// interface Props {
//   coin: Result;
// }

const CoinDisplay = () => {
  const { id } = useParams();
  console.log(id);
  return <div>hi</div>;
};

export default CoinDisplay;
