import React, {FC} from 'react';
import Article from './Article';
import ArticleSkeleton from './ArticleSkeleton';
import {Articles} from '../../../app/api/api';
import {ARTICLES_SKELETON_COUNT} from '../../../shared/utils/constants';

interface Props {
  articles: Articles[];
  isLoading?: boolean;
}

const HomePageBody: FC<Props> = ({articles, isLoading = false}) => {
  return (
    <div className="home-page__body">
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

export default HomePageBody;
