import React from 'react';
import AdminForm, {AdminFormType} from '../../shared/components/AdminForm/AdminForm';
import {useArticleById} from '../hooks/useArticleById';
import {useArticles} from '../../shared/context/ArticlesContext';
import {useParams} from 'react-router-dom';
import {Loader} from '../../shared/components/Loader/Loader';

const EditArticleAdminPage = () => {
  const {articleCard, isLoading} = useArticleById();
  const {articleId} = useParams();
  const {updateArticle} = useArticles();
  const onSubmit = (data: AdminFormType) => {
    updateArticle(Number(articleId), data);
  };
  return (
    <div className={'page article-admin-page'}>
      <div className="article-admin-page__container">
        <h1 className="home-page__title page-title">Edit Article</h1>
        {!isLoading ? (
          <AdminForm
            onSubmit={onSubmit}
            buttonText={'Update'}
            articleCard={articleCard.article}
          />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default EditArticleAdminPage;
