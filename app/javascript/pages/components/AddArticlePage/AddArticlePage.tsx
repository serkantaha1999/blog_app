import React from 'react';
import AdminForm from '../../../shared/components/AdminForm/AdminForm';

const AddArticlePage = () => {
  return (
    <div className={'page article-admin-page'}>
      <div className="article-admin-page__container">
        <h1 className="home-page__title page-title">New Article</h1>
        <AdminForm buttonText={'Publish'} />
      </div>
    </div>
  );
};

export default AddArticlePage;
