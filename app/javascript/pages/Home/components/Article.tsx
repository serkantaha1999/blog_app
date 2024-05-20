import React, {FC} from 'react';


interface Props {
    imageUrl: string
    title: string
    description: string
}

const Article: FC<Props> = ({description, title, imageUrl}) => {
    return (
        <article className="home-page__article article-home-page">
            <div className="article-home-page__image">
                <img src={imageUrl} alt="Header-Logo"/>
            </div>
            <div className="article-home-page__content">
                <h3 className="article-home-page__title">{title}</h3>
                <p className="article-home-page__description">{description}</p>
            </div>
        </article>
    );
};

export default Article;