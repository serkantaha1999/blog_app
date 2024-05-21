import React, {FC} from 'react';

interface Props {
    name: string
    text: string
}


const CommentsPost: FC<Props> = ({name, text}) => {
    return (
        <div className="comments-posts__item">
            <h6 className="comments-posts__name">Ostap</h6>
            <p className="comments-posts__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ex
                fugiat id inventore nesciunt nihil, nisi non quod sed sequi temporibus, vitae? Accusantium atque
                eaque eius error id nulla quae!</p>
        </div>
    );
};

export default CommentsPost;