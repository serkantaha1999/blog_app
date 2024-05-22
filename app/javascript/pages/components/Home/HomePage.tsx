import React, {FC, useEffect, useState} from 'react';
import Pagination from '../../../shared/components/Pagination/Pagination';
import {PAGE_SIZE} from '../../../shared/utils/constants';
import ArticlesBody from '../../../shared/components/Articles/ArticlesBody';
import {useArticles} from '../../../shared/context/ArticlesContext';

const HomePage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {isLoading, data, fetchArticles} = useArticles();

  useEffect(() => {
    fetchArticles(currentPage, PAGE_SIZE);
  }, [currentPage]);

  const onClickCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className={'page home-page'}>
      <div className="home-page__container">
        <h1 className="home-page__title page-title">Articles:</h1>
        <div className="home-page__body">
          <ArticlesBody
            articles={data.articles}
            isLoading={isLoading}
          />
        </div>
        <Pagination
          currentPage={currentPage}
          total={data.limit}
          onClick={onClickCurrentPage}
          size={PAGE_SIZE}
        />
      </div>
    </section>
  );
};

export default HomePage;
