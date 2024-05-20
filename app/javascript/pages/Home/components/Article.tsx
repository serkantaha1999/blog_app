import React, {FC} from 'react';


interface Props {

}

const Article: FC<Props> = () => {
    return (
        <article className="home-page__article article-home-page">
            <div className="article-home-page__image">
                <img src="" alt=""/>
            </div>
            <h3 className="article-home-page__title"></h3>
            <p className="article-home-page__description"></p>
        </article>
    );
};

export default Article;