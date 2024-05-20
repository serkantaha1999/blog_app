import React from 'react';
import {navConfig} from '../config/nav-config';
import {RouterLink} from '../../../../shared/components/Link/Link';

const HeaderMenu = () => {
  return (
    <nav className="header__menu header-menu">
      <ul className="header-menu__list">
        {navConfig.map((link) => (
          <li
            key={link.url}
            className="header__item"
          >
            <RouterLink url={link.url}>{link.text}</RouterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
