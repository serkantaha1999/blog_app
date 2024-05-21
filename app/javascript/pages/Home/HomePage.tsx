import React, {FC, useEffect, useState} from 'react';
import Article from './components/Article';
import Pagination from '../../shared/components/Pagination/Pagination';
import ArticleSkeleton from './components/ArticleSkeleton';
import {Articles, articlesAPI} from '../../app/api/api';

const skeletonCount = 3;

const HomePage: FC = () => {
  const [articles, setArticles] = useState<Articles[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchArticles() {
      setIsLoading(true);
      let {data} = await articlesAPI.getArticles();
      setArticles(data.articles);
      setIsLoading(false);
    }
    fetchArticles();
  }, []);
  return (
    <section className={'page page__home home-page'}>
      <div className="home-page__container">
        <h1 className="home-page__title page-title">Articles:</h1>
        <div className="home-page__body">
          {!isLoading
            ? articles.map((article) => (
                <Article
                  key={article.id}
                  description={article.content}
                  imageUrl={article.image.url}
                  title={article.title}
                />
              ))
            : [...Array(skeletonCount)].map((_, id) => <ArticleSkeleton key={id} />)}
        </div>
        <Pagination
          currentPage={1}
          total={25}
          onClick={() => {}}
          size={5}
        />
      </div>
    </section>
  );
};

export default HomePage;
