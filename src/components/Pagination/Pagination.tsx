import { useContext } from 'react';
import { AppContext } from '../../context/Context';
import { dataList } from '../../helper/data.types';
import style from './Pagination.module.scss';
type Props = {
  itemsPerPage: number;
};

const Pagination = ({ itemsPerPage }: Props) => {
  const { setCurrentPage, currentPage, coins } = useContext(AppContext);
  let pages: number[] = [];

  if (coins) {
    for (let i = 1; i < Math.ceil(coins.length / itemsPerPage); i++) {
      pages.push(i);
    }
  }
  console.log('page: ', currentPage);
  return (
    <div className={style.pagination}>
      {pages.map((page, index) => {
        return (
          <button
            className={page === currentPage ? style.activeButton : style.button}
            onClick={(e) => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
