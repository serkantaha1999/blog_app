import React, {FC} from 'react';
import {RouterLink} from '../Link/Link';
import {ROUTES} from '../../../app/router/router-config';
import {useLocation} from 'react-router-dom';
import Button from '../Button/Button';
import {useArticles} from '../../context/ArticlesContext';
import ButtonLink from '../ButtonLink/ButtonLink';

interface Props {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const Article: FC<Props> = ({description, title, imageUrl, id}) => {
    const location = useLocation();
    const {deleteArticle} = useArticles()
    const renderAdminSettings = () => {
      if (location.pathname === ROUTES.adminPanel) {
        return (
          <div className="article-home-page__admin">
              <ButtonLink theme={"edit"} url={ROUTES.editArticleById(id)}>Edit</ButtonLink>
            <Button onClick={() => deleteArticle(id)} theme={'delete'}>Delete</Button>
          </div>
        );
      }
    };
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
          {renderAdminSettings()}
      </article>
    );
};

export default Article;
