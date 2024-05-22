import React, {FC} from 'react';
import CommentsPost from "./CommentsPost";
import {Comments} from "../../../../app/api/api";

interface Props {
    comments: Comments[]
}

const CommentsPosts: FC<Props> = ({comments}) => {
    return (
        <section className={"article-card__comments comments-posts"}>
            {comments.map(comment => <CommentsPost key={comment.article_id} name={comment.author} text={comment.content}/>)}
        </section>
    );
};

export default CommentsPosts;
