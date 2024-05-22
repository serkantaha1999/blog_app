import React from 'react';
import AdminForm from '../../shared/components/AdminForm/AdminForm';

const EditArticleAdminPage = () => {

    return (
        <div className={'page article-admin-page'}>
            <div className="article-admin-page__container">
                <h1 className="home-page__title page-title">Edit Article</h1>
                <AdminForm/>
            </div>
        </div>
    );
};

export default EditArticleAdminPage;
