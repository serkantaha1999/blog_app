import React from 'react';
import AdminForm from '../../shared/components/AdminForm/AdminForm';

const ArticleAdminPage = () => {

    return (
        <div className={'page article-admin-page'}>
            <div className="article-admin-page__container">
                <h1 className="home-page__title page-title">New Article</h1>
                <AdminForm/>
            </div>
        </div>
    );
};

export default ArticleAdminPage;
