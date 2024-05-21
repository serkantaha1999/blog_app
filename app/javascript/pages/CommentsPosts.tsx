import React from 'react';
import CommentsPost from "./CommentsPost";

const CommentsPosts = () => {
    return (
        <section className={"article-card__comments comments-posts"}>
            <CommentsPost/>
            <CommentsPost/>
            <CommentsPost/>
            <CommentsPost/>
            <CommentsPost/>
        </section>
    );
};

export default CommentsPosts;