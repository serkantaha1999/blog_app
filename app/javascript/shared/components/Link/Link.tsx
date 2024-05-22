import React, {FC, ReactNode} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {cn} from '../../utils/utils';

interface Props {
  url: string;
  children: ReactNode;
  classnames?: string;
}

export const RouterLink: FC<Props> = ({url, children, classnames = 'router-link'}) => {
  return (
    <NavLink
      className={({isActive}) =>
        cn(classnames, {
          'active': isActive,
        })
      }
      to={url}
    >
      {children}
    </NavLink>
  );
};
