import React, {FC} from 'react';
import {RouterLink} from "../Link/Link";
import {ROUTES} from "../../../app/router/router-config";


interface Props {
    id: number
    imageUrl: string
    title: string
    description: string
    children?: React.ReactNode
}

const Article: FC<Props> = ({description, title, imageUrl, id, children}) => {
    return (
      <article className="home-page__article article-home-page">
        <RouterLink url={ROUTES.articleById(id)}>
          <div className="article-home-page__image">
            <img
              src={imageUrl}
              alt="Header-Logo"
            />
          </div>
        </RouterLink>
        <div className="article-home-page__content">
          <h3 className="article-home-page__title">{title}</h3>
          <p className="article-home-page__description">{description}</p>
        </div>
          {children}
      </article>
    );
};

export default Article;
