import styles from './Navbar.module.scss';
import { RiCoinsFill } from 'react-icons/ri';
import { AiOutlineMenuFold } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.title}>
          <RiCoinsFill className={styles.icon} />
          <h1>Hunger Coins</h1>
        </div>
        <select className={styles.currency}>
          <option value='USD' selected>
            USD
          </option>
          <option value='HKD'>HKD</option>
        </select>
        <AiOutlineMenuFold className={styles.menu} />
      </div>
    </nav>
  );
};

export default Navbar;
