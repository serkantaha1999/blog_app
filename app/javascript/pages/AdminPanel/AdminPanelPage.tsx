import React, {FC, useState} from 'react';
import Pagination from '../../shared/components/Pagination/Pagination';
import {useArticles} from '../hooks/useArticles';
import {PAGE_SIZE} from '../../shared/utils/constants';
import HomePageBody from '../../shared/components/Articles/HomePageBody';
import {useNavigate} from 'react-router-dom';

const AdminPanelPage: FC = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const {isLoading, data} = useArticles(currentPage, PAGE_SIZE);
    const onClickCurrentPage = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <section className={'page admin-panel-page'}>
            <div className="admin-panel-page__container">
                <h1 className="admin-panel-page__title page-title">Admin Panel | Articles</h1>
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
