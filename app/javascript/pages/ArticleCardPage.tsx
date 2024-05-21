import React from 'react';
import {useArticleById} from './hooks/useArticleById';
import {formatDate} from '../shared/utils/utils';
import CommentsForm from './CommentsForm';
import CommentsPosts from './CommentsPosts';

const ArticleCardPage = () => {
  const {articleCard, isLoading} = useArticleById();
  return (
    <section className="page article-card">
      <div className="article-card__container">
        {!isLoading ? (
          <div className="article-card__body">
            <div className="article-card__info">
              <h1 className="article-card__title page-title">{articleCard.article.title}</h1>
              <p className="article-card__date">
                Date: <span>{formatDate(articleCard.article.created_at)}</span>
              </p>
            </div>
            <div className="article-card__image">
              <img
                src={articleCard.article.image.url}
                alt="Article-Card-Image"
              />
            </div>
            <p className="article-card__description">{articleCard.article.content}</p>
            <CommentsForm />
            <CommentsPosts />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ArticleCardPage;
