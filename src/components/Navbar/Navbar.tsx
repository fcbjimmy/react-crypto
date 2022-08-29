import styles from './Navbar.module.scss';
import { RiCoinsFill } from 'react-icons/ri';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { useContext } from 'react';
import { AppContext } from '../../context/Context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setCurrency, currency } = useContext(AppContext);

  console.log(currency);
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.title}>
          <Link to='/'>
            <RiCoinsFill className={styles.icon} />
          </Link>
          <Link to='/'>
            <h1 className={styles.head}>Crypto Coins</h1>
          </Link>
        </div>
        <select
          className={styles.currency}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCurrency(e.target.value)}
        >
          <option value='HKD'>HKD</option>
          <option value='USD'>USD</option>
        </select>
        <AiOutlineMenuFold className={styles.menu} />
      </div>
    </nav>
  );
};

export default Navbar;
