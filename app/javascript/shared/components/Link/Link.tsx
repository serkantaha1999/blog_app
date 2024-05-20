import React, {FC, ReactNode} from 'react';
import {Link} from 'react-router-dom';

interface Props {
  url: string;
  children: ReactNode;
}

export const RouterLink: FC<Props> = ({url, children}) => {
  return (
    <Link
      className={'router-link'}
      to={url}
    >
      {children}
    </Link>
  );
};
