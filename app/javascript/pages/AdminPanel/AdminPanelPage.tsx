import React, {FC, useState} from 'react';
import Pagination from '../../shared/components/Pagination/Pagination';
import {useArticles} from '../hooks/useArticles';
import {PAGE_SIZE} from '../../shared/utils/constants';
import HomePageBody from '../../shared/components/Articles/HomePageBody';

const AdminPanelPage: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {isLoading, data} = useArticles(currentPage, PAGE_SIZE);

    const onClickCurrentPage = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section className={'page home-page'}>
            <div className="home-page__container">
                <h1 className="home-page__title page-title">Admin Panel | Articles</h1>
                <div className="home-page__body">
                    <HomePageBody
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

export default AdminPanelPage;
