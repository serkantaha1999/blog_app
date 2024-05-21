import React from 'react';
import {useArticleById} from '../hooks/useArticleById';
import {formatDate} from '../../shared/utils/utils';
import CommentsForm from './components/CommentsForm';
import CommentsPosts from './components/CommentsPosts';
import {Comments} from "../../app/api/api";

const ArticleCardPage = () => {
  const {articleCard, isLoading, setArticleCard} = useArticleById();
  const addedComments = (comment: Comments) => {
      setArticleCard(prevState => ({
          ...prevState,
          comments: [...prevState.comments, comment]
      }))
  }
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
            <CommentsForm addedComments={addedComments} articleId={articleCard.article.id} />
            <CommentsPosts comments={articleCard.comments}/>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ArticleCardPage;
