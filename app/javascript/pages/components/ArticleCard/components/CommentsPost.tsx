import React, {FC} from 'react';

interface Props {
  name: string;
  text: string;
}

const CommentsPost: FC<Props> = ({name, text}) => {
  return (
    <div className="comments-posts__item">
      <h6 className="comments-posts__name">{name}</h6>
      <p className="comments-posts__text">{text}</p>
    </div>
  );
};

export default CommentsPost;
