import React from 'react';
import {RouterLink} from '../../../../shared/components/Link/Link';
import Button from '../../../../shared/components/Button/Button';
import {ROUTES} from '../../../../app/router/router-config';
import {useAuth} from "../../../../shared/context/AuthContext";

const HeaderMenu = () => {
    const {isAuth, logout} = useAuth()
    const renderAuthLink = () => {
    if (isAuth) {
      return (
        <li className="header-menu__item">
          <RouterLink url={ROUTES.adminPanel}>{'Admin Panel'}</RouterLink>
        </li>
      );
    } else {
      return (
        <li className="header-menu__item">
          <RouterLink url={ROUTES.login}>{'Login'}</RouterLink>
        </li>
      );
    }
  };
  return (
    <nav className="header__menu header-menu">
      <ul className="header-menu__list">
        <li className="header-menu__item">
          <RouterLink url={ROUTES.layout}>{'Home'}</RouterLink>
        </li>
        {renderAuthLink()}
        {isAuth && (
          <li className="header-menu__item">
            <Button onClick={logout}>Log out</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
