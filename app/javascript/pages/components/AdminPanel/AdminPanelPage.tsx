import React, {FC, useEffect, useState} from 'react';
import Pagination from '../../../shared/components/Pagination/Pagination';
import {PAGE_SIZE} from '../../../shared/utils/constants';
import HomePageBody from '../../../shared/components/Articles/HomePageBody';
import {useArticles} from '../../../shared/context/ArticlesContext';
import {ROUTES} from '../../../app/router/router-config';
import ButtonLink from '../../../shared/components/ButtonLink/ButtonLink';

const AdminPanelPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {data, isLoading, fetchArticles} = useArticles();

  useEffect(() => {
    fetchArticles(currentPage, PAGE_SIZE);
  }, [currentPage]);

  const onClickCurrentPage = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <section className={'page admin-panel-page'}>
      <div className="admin-panel-page__container">
        <h1 className="admin-panel-page__title page-title">Admin Panel | Articles</h1>
        <ButtonLink url={ROUTES.editArticles}>Add New Articles</ButtonLink>
        <HomePageBody
          articles={data.articles}
          isLoading={isLoading}
        />
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

export default AdminPanelPage;
