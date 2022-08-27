import styles from './Navbar.module.scss';
import { RiCoinsFill } from 'react-icons/ri';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { useContext } from 'react';
import { AppContext } from '../context/Context';

const Navbar = () => {
  const { setCurrency, currency } = useContext(AppContext);

  console.log(currency);
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.title}>
          <RiCoinsFill className={styles.icon} />
          <h1>Hunger Coins</h1>
        </div>
        <select
          className={styles.currency}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCurrency(e.target.value)}
        >
          <option value='HK'>HKD</option>
          <option value='US'>USD</option>
        </select>
        <AiOutlineMenuFold className={styles.menu} />
      </div>
    </nav>
  );
};

export default Navbar;
