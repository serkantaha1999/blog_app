import React, {FC} from 'react';
import Article from './Article';
import ArticleSkeleton from './ArticleSkeleton';
import {ARTICLES_SKELETON_COUNT} from '../../utils/constants';
import {Articles} from '../../../app/api/api-types';

interface Props {
  articles: Articles[];
  isLoading?: boolean;
}

const ArticlesBody: FC<Props> = ({articles, isLoading = false}) => {
  return (
    <div className="articles-body">
      {!isLoading
        ? articles.map((article) => (
            <Article
              key={article.id}
              id={article.id}
              description={article.content}
              imageUrl={article.image.url}
              title={article.title}
            />
          ))
        : [...Array(ARTICLES_SKELETON_COUNT)].map((_, id) => <ArticleSkeleton key={id} />)}
    </div>
  );
};

export default ArticlesBody;
