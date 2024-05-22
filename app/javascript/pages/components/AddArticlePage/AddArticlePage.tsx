import React from 'react';
import AdminForm, {AdminFormType} from '../../../shared/components/AdminForm/AdminForm';
import {useArticles} from '../../../shared/context/ArticlesContext';
import {useNavigate} from 'react-router-dom';
import {ROUTES} from '../../../app/router/router-config';

const AddArticlePage = () => {
  const {addArticle} = useArticles();
  const navigate = useNavigate();
  const onSubmit = async (data: AdminFormType) => {
    await addArticle(data);
    navigate(ROUTES.adminPanel);
  };
  return (
    <div className={'page article-admin-page'}>
      <div className="article-admin-page__container">
        <h1 className="home-page__title page-title">New Article</h1>
        <AdminForm
          onSubmit={onSubmit}
          buttonText={'Publish'}
        />
      </div>
    </div>
  );
};

export default AddArticlePage;
