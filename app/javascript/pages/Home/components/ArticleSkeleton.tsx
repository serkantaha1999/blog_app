import React from 'react';

const ArticleSkeleton = () => {
    return (
        <div className={"article-skeleton"}>
            <div className="article-skeleton__image"></div>
            <div className="article-skeleton__content">
                <div className="article-skeleton__title"></div>
                <div className="article-skeleton__text"></div>
            </div>
        </div>
    );
};

export default ArticleSkeleton;