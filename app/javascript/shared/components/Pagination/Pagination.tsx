import React, {FC} from 'react';
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from 'react-icons/io';
import {cn} from '../../utils/utils';

interface Props {
  currentPage: number;
  total: number;
  onClick: (currentPage: number) => void;
  size: number;
  isLoading?: boolean;
}

const Pagination: FC<Props> = ({currentPage, onClick, total, size, isLoading}) => {
  const totalCountPage = Math.ceil(total / size);
  const disabledNextPage = currentPage === totalCountPage || isLoading
  const disabledPrevPage = currentPage === 1 || isLoading
  const pages = [];
  for (let i = 1; i <= totalCountPage; i++) {
    pages.push(i);
  }
  const prevPageHandler = () => {
    onClick(currentPage - 1);
  };
  const nextPageHandler = () => {
    onClick(currentPage + 1);
  };

  const onClickPageHandler = (page: number) => {
    onClick(page);
  };
  return (
    <section className={'pagination'}>
      <div className="pagination__body">
        <button
          disabled={disabledPrevPage}
          onClick={prevPageHandler}
          className="pagination__btn"
        >
          <IoIosArrowRoundBack />
        </button>
        {pages.map((page) => (
          <button
            disabled={isLoading}
            key={page}
            onClick={() => onClickPageHandler(page)}
            className={cn('pagination__btn', {
              'active': currentPage === page && !isLoading,
            })}
          >
            {page}
          </button>
        ))}
        <button
          disabled={disabledNextPage}
          onClick={nextPageHandler}
          className="pagination__btn"
        >
          <IoIosArrowRoundForward />
        </button>
      </div>
    </section>
  );
};

export default Pagination;
